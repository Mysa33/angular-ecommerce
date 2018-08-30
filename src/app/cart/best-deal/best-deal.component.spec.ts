import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from '../../shared/services/api.service';
import { BestDealComponent } from './best-deal.component';

describe('BestDealComponent', () => {

  let component: BestDealComponent;
  let fixture: ComponentFixture<BestDealComponent>;
  let comOffUrl:string = "";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestDealComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        HttpModule,
        HttpClientModule,
      ],
      providers: [
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set component properties', () => {
    expect(comOffUrl).toEqual("");
  });
});
