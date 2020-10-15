import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-decimal-rating',
  templateUrl: './decimal-rating.component.html',
  styleUrls: ['./decimal-rating.component.css']
})
export class DecimalRatingComponent implements OnInit {
  @Input() currentRate = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
