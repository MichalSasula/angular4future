import { Component, OnInit } from '@angular/core';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-pawn-shop',
  templateUrl: './pawn-shop.component.html',
  styleUrls: ['./pawn-shop.component.css']
})
export class PawnShopComponent implements OnInit {

  videoIcon = this.iconService.videoIcon;
  pawnIcon = this.iconService.pawnIcon;
  graduationIcon = this.iconService.graduationIcon;

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

}
