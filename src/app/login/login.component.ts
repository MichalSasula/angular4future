import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { IconService } from '../services/icon.service';

enum AuthMode {
  LogInMode,
  SignUpMode
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  facebookIcon = this.iconService.facebookIcon;
  googleIcon = this.iconService.googleIcon;
  appleIcon = this.iconService.appleIcon;

  AuthMode = AuthMode;
  isLoading = false;
  error: string = null;
  
  constructor(private iconService: IconService, private authService: AuthService, private router: Router) { }
  
  
  ngOnInit(): void {
  }
  
  onAuth(form: NgForm, authMode: AuthMode) {
    let authObservable: Observable<AuthResponseData>;
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if(authMode == AuthMode.SignUpMode) {
      authObservable = this.authService.signup(email, password);
    }
    if(authMode == AuthMode.LogInMode) {
      authObservable = this.authService.login(email,password);
    }
    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      errorMesage => {
        console.log(errorMesage);
        this.error = errorMesage;
        this.isLoading = false;
      }
    )
    form.reset();
  }

  onSubmit(form: NgForm) {
  }


}
