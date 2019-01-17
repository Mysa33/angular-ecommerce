import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {Router} from "@angular/router";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import {routes} from "../app-routing.module";
import { FilterdataPipe } from '../shared/pipes/filterdata.pipe';
import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ProductsComponent } from './products.component';
import { MockBooks } from '../shared/fixtures/mock-books';
import { Book } from '../shared/class/book'; 

describe('ProductsComponent', () => {

  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let router;
  let location;
  var mockedData:Array<MockBooks> = new MockBooks().getMockData(mockedData); 
  var array:any[] = [];

  mockedData.map((value)=>{
    let item = new Book().setBook(value);//rework
    array.push(item);
  });
  
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
        RouterTestingModule,
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

  it('should page have title', () => {
    expect(component.page).not.toBeNull();
    //check html
  });

  it('should title be shop', () => {
    expect(component.page).toEqual("shop");
  });

  //Default values
  it('should page have default value', () => {
    expect(component.page).toEqual("shop");
  });

  it('should cartLength have default value', () => {
    expect(component.cartLength).toEqual(0);
  });

  it('should modalItem have default value', () => {
    expect(component.modalItem).toEqual({});
  });

  it('should cart have default value', () => {
    expect(component.cart).toEqual([]); 
  });

  //Mock data
  it('should array not be null', () => {
    expect(array).not.toBeNull();
  });

  it('should data not be null', () => {
    expect(array).not.toBeNull();
    for(let i in array ){
      expect(array[i].isbn).not.toBeNull();
      expect(array[i].title).not.toBeNull();
      expect(array[i].price).not.toBeNull();
      expect(array[i].cover).not.toBeNull();
      expect(array[i].synopsis).not.toBeNull();
    }
  });

  it('should be', () => {    
    for(let i in array){
      expect(array[i].isbn).toEqual(jasmine.any(String));
      expect(array[i].title).toEqual(jasmine.any(String));
      expect(array[i].price).toEqual(jasmine.any(Number));
      expect(array[i].cover).toEqual(jasmine.any(String));
      expect(array[i].synopsis).toEqual(jasmine.any(String));
    };
  });
  
});
