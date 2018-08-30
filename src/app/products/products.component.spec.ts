import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FilterdataPipe } from '../shared/pipes/filterdata.pipe';
import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {

  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductsComponent,
        FilterdataPipe 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        HttpModule,
        HttpClientModule,
        FormsModule
      ],
        providers: [
        DataShareService,
        LocalStorageService,
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should have page title', () => {

    expect(component.page).toEqual("Shop");

  });

  it('should have default value', () => {

    expect(component.page).toEqual("Shop");
    expect(component.localData).toEqual("cartCleared");
    expect(component.booksCartLength).toEqual(0);
    expect(component.bookModal).toEqual({});
    expect(component.booksCart).toEqual([]);
   
  });

  it('data should not be', () => {

    expect(component.getProductsData()).not.toBeNull();

    let data = component.getProductsData();
   
  });

});
