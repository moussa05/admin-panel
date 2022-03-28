import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCathegorieComponent } from './new-cathegorie.component';

describe('NewCathegorieComponent', () => {
  let component: NewCathegorieComponent;
  let fixture: ComponentFixture<NewCathegorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCathegorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCathegorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
