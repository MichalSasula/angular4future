import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnShopComponent } from './pawn-shop.component';

describe('PawnShopComponent', () => {
  let component: PawnShopComponent;
  let fixture: ComponentFixture<PawnShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawnShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
