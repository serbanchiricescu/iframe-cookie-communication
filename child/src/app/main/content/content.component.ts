import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {WindowService} from '../../services/window.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  parentCookie: string;

  constructor(private cookieService: CookieService, private windowService: WindowService) { }

  ngOnInit() {
    this.parentCookie = 'Not loaded...';
    this.windowService.getWindow().addEventListener('message', e => {
      if (e.origin === 'http://ceva123.com') {
        this.getCookie();
      }
    });
  }

  getCookie() {
    this.parentCookie = this.cookieService.get('parent');
    this.windowService.getWindow().top.postMessage('Got the cookie, thanks!', 'http://ceva123.com');
  }

}
