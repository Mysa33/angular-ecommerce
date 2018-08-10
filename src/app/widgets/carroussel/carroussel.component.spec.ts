import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousselComponent } from './carroussel.component';

describe('CarrousselComponent', () => {
  let component: CarrousselComponent;
  let fixture: ComponentFixture<CarrousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
