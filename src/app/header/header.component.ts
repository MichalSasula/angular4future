import { Component, OnInit } from '@angular/core';
import { faChessPawn, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pawnIcon = faChessPawn;
  cartIcon = faCartPlus;
  userIcon = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
