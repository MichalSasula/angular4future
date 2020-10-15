import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalRatingComponent } from './decimal-rating.component';

describe('DecimalRatingComponent', () => {
  let component: DecimalRatingComponent;
  let fixture: ComponentFixture<DecimalRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
