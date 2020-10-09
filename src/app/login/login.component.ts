import { Component, OnInit } from '@angular/core';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  facebookIcon = faFacebook;
  googleIcon = faGoogle;
  appleIcon = faApple;



  constructor() { }

  ngOnInit(): void {
  }

}
