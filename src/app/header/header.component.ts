import { Component, OnInit } from '@angular/core';
import { faChessPawn, faCartPlus, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pawnIcon = faChessPawn;
  cartIcon = faCartPlus;
  userIcon = faUser;
  bellIcon = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
