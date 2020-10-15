import { Component, OnInit } from '@angular/core';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  barsIcon = this.iconService.barsIcon;
  thLargeIcon = this.iconService.thLargeIcon;

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

}
