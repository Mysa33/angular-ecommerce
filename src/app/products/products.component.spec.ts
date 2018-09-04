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
import { MockBooks } from '../shared/fixtures/mock-books';
import { Book } from '../shared/class/book'; 

describe('ProductsComponent', () => {

  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  var mockedData = new MockBooks().getMockData(mockedData); 
  var array:any[] = [];
  mockedData.map((value,index)=>{
    let item = new Book().setBook(value);
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

  it('should have title', () => {
    expect(component.page).not.toBeNull();
  });

  it('should title be shop', () => {
    expect(component.page).toEqual("shop");
  });

  it('should have default value', () => {
    expect(component.page).toEqual("shop");
    expect(component.localData).toEqual("cartCleared");
    expect(component.booksCartLength).toEqual(0);
    expect(component.bookModal).toEqual({});
    expect(component.booksCart).toEqual([]); 
  });

  it('data should not be null', () => {
    expect(array).not.toBeNull();
    array.map((value,index, data)=>{
      expect(data).not.toBeNull();
      expect(data[index].isbn).not.toBeNull();
      expect(data[index].title).not.toBeNull();
      expect(data[index].price).not.toBeNull();
      expect(data[index].cover).not.toBeNull();
      expect(data[index].synopsis).not.toBeNull();
    });
  });

  it('data props should not be', () => {    
    array.map((value,index, data)=>{
      expect(data[index].isbn).toEqual(jasmine.any(String));
      expect(data[index].title).toEqual(jasmine.any(String));
      expect(data[index].price).toEqual(jasmine.any(Number));
      expect(data[index].cover).toEqual(jasmine.any(String));
      expect(data[index].synopsis).toEqual(jasmine.any(String));
    });
  });

});
