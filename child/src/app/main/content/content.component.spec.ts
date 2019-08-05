import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import {CookieService} from 'ngx-cookie-service';
import {By} from '@angular/platform-browser';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(async(() => {
    const cookieServiceSpy = jasmine.createSpyObj('CookieService', ['get']);
    TestBed.configureTestingModule({
      declarations: [ ContentComponent ],
      providers: [{provide: CookieService, useValue: cookieServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    cookieService = TestBed.get(CookieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('parentCookie should not be loaded', () => {
    expect(component.parentCookie).toEqual('Not loaded...');
  });

  it('should get cookie on button click', () => {
    cookieService.get.and.returnValue('new cookie');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('p'))[0].nativeElement.innerText).toContain('new cookie');
    expect(component.parentCookie).toEqual('new cookie');
  });

});
