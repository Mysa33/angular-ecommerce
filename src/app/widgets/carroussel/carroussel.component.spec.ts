import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from '../../shared/services/api.service';
import { CarrousselComponent } from './carroussel.component';

describe('CarrousselComponent', () => {
  let component: CarrousselComponent;
  let fixture: ComponentFixture<CarrousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrousselComponent ],
      imports: [
        HttpModule,
        HttpClientModule
      ],
      providers: [
        ApiService
      ]
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

  it('data should not be', () => {

    expect(component.getProductsData()).not.toBeNull();
   
  });
});
