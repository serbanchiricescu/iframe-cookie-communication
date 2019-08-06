import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  @ViewChild('iframe', {static: false}) iframe: ElementRef;
  cookieStatus: string;
  subdomain: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.subdomain = sanitizer.bypassSecurityTrustResourceUrl(`http://${environment.subdomain}`);
  }

  ngOnInit() {
    window.addEventListener('message', e => {
      if (e.origin === this.subdomain) {
        this.cookieStatus = `${e.data} Message from: ${e.origin}`;
      }
    });
  }

  forceCookie() {
    this.iframe.nativeElement.contentWindow.postMessage('Get the cookie, now!', this.subdomain);
  }

}
