import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPremiumFeatureComponent } from './buy-premium-feature.component';

describe('BuyPremiumFeatureComponent', () => {
  let component: BuyPremiumFeatureComponent;
  let fixture: ComponentFixture<BuyPremiumFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPremiumFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPremiumFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
