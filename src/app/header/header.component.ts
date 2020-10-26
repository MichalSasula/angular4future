import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSubscription: Subscription;
  pawnIcon = this.iconService.pawnIcon;
  cartIcon = this.iconService.cartIcon;
  userIcon = this.iconService.userIcon;
  bellIcon = this.iconService.bellIcon;
  cogIcon = this.iconService.cogIcon;
  moonIcon = this.iconService.moonIcon;
  envelopeIcon = this.iconService.envelopeIcon;
  signOutIcon = this.iconService.signOutIcon;

  constructor(private iconService: IconService,
      private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(user);
    });
  }

  signout() {
    this.authService.signout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
