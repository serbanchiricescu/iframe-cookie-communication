import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(async(() => {
    const cookieServiceSpy = jasmine.createSpyObj('CookieService', ['get', 'set']);
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [{provide: CookieService, useValue: cookieServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    cookieService = TestBed.get(CookieService);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('submitting a form should create a cookie', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls.username.setValue('new cookie');
    expect(component.loginForm.valid).toBeTruthy();
    cookieService.get.and.returnValue(component.loginForm.controls.username.value);
    component.onSubmit();
    expect(component.a).toEqual('new cookie');
  });
});
