import { Component, OnInit } from '@angular/core';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  angleDownIcon = this.iconService.angleDownIcon;
  caretRightIcon = this.iconService.caretRightIcon;
  cogIcon = this.iconService.cogIcon;
  videoIcon = this.iconService.videoIcon;
  graduationIcon = this.iconService.graduationIcon;
  trophyIcon = this.iconService.trophyIcon;
  fireIcon = this.iconService.fireIcon;
  brainIcon = this.iconService.brainIcon;
  reloadIcon = this.iconService.reloadIcon;



  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

}
