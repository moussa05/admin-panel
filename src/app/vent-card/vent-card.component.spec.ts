import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentCardComponent } from './vent-card.component';

describe('VentCardComponent', () => {
  let component: VentCardComponent;
  let fixture: ComponentFixture<VentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
