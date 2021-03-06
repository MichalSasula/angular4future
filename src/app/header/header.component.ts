import { Component, OnInit } from '@angular/core';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pawnIcon = this.iconService.pawnIcon;
  cartIcon = this.iconService.cartIcon;
  userIcon = this.iconService.userIcon;
  bellIcon = this.iconService.bellIcon;
  cogIcon = this.iconService.cogIcon;
  moonIcon = this.iconService.moonIcon;
  envelopeIcon = this.iconService.envelopeIcon;
  signOutIcon = this.iconService.signOutIcon;

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

}
