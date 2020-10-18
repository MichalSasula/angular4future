import { Component, OnInit } from '@angular/core';
import { IconService } from '../services/icon.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  facebookIcon = this.iconService.facebookIcon;
  googleIcon = this.iconService.googleIcon;
  appleIcon = this.iconService.appleIcon;

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

}
