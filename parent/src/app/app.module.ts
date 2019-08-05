import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './main/content/content.component';
import { IframeComponent } from './main/iframe/iframe.component';
import {CookieService} from 'ngx-cookie-service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
