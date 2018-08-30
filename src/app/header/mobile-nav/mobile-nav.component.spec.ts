import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { MobileNavComponent } from './mobile-nav.component';

describe('MobileNavComponent', () => {
  let component: MobileNavComponent;
  let fixture: ComponentFixture<MobileNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
