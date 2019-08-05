import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  a: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.cookieService.set('username', this.loginForm.controls.username.value, 3600, '/', 'ceva123.com');
    this.a = this.cookieService.get('username');
  }

}
