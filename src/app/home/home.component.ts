import { Component, OnInit } from '@angular/core';
import { faAngleDown, faCog, faVideo, faGraduationCap, faTrophy, faFire, faBrain, faSyncAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  angleDownIcon = faAngleDown;
  caretRightIcon = faCaretRight;
  cogIcon = faCog;
  videoIcon = faVideo;
  graduationIcon = faGraduationCap;
  trophyIcon = faTrophy;
  fireIcon = faFire;
  brainIcon = faBrain;
  reloadIcon = faSyncAlt;



  constructor() { }

  ngOnInit(): void {
  }

}
