import { Injectable } from '@angular/core';
import { faAngleDown, faCog, faVideo, faGraduationCap, faTrophy, faFire, faBrain, faSyncAlt, faCaretRight, faChessPawn, faCartPlus, faUser, faBell, faMoon, faEnvelope,
         faSignOutAlt, faBars, faThLarge} from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  angleDownIcon = faAngleDown;
  caretRightIcon = faCaretRight;
  cogIcon = faCog;
  videoIcon = faVideo;
  graduationIcon = faGraduationCap;
  trophyIcon = faTrophy;
  fireIcon = faFire;
  brainIcon = faBrain;
  reloadIcon = faSyncAlt;
  pawnIcon = faChessPawn;
  cartIcon = faCartPlus;
  userIcon = faUser;
  bellIcon = faBell;
  facebookIcon = faFacebook;
  googleIcon = faGoogle;
  appleIcon = faApple;
  moonIcon = faMoon;
  envelopeIcon = faEnvelope;
  signOutIcon = faSignOutAlt;
  barsIcon = faBars;
  thLargeIcon = faThLarge;

  constructor() { }
}
