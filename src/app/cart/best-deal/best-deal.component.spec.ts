import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { BestDealComponent } from './best-deal.component';

describe('BestDealComponent', () => {
  let component: BestDealComponent;
  let fixture: ComponentFixture<BestDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestDealComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
