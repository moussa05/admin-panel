import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaterComponent } from './sub-heater.component';

describe('SubHeaterComponent', () => {
  let component: SubHeaterComponent;
  let fixture: ComponentFixture<SubHeaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
