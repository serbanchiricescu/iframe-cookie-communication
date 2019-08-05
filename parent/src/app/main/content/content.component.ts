import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  username: string;
  parentCookie: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.username = 'Not loaded...';
  }

  getCookies() {
    this.username = this.cookieService.get('username');
  }

  store() {
    this.cookieService.set('parent', this.parentCookie, 3600, '/', 'ceva123.com');
  }

}
