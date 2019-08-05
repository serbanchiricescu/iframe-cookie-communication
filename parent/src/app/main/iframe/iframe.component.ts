import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  @ViewChild('iframe', {static: false}) iframe: ElementRef;
  cookieStatus: string;

  constructor() { }

  ngOnInit() {
    window.addEventListener('message', e => {
      if (e.origin === 'http://dev.ceva123.com') {
        this.cookieStatus = `${e.data} Message from: ${e.origin}`;
      }
    });
  }

  forceCookie() {
    this.iframe.nativeElement.contentWindow.postMessage('Get the cookie, now!', 'http://dev.ceva123.com');
  }

}
