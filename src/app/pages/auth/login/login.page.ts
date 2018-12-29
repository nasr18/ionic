import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    this.authService.login();
  }

  onSubmit() {
    console.log('onSubmit:', this.loginForm.value);
  }
}
