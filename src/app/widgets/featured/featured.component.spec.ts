import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from '../../shared/services/api.service';
import { FeaturedComponent } from './featured.component';
import { MockBooks } from '../../../fixtures/mock-books';
import { Book } from '../../shared/class/book'; 

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;

  var mockedData = new MockBooks().getMockData(mockedData); 
  var array:any[] = [];
  mockedData.map((value,index)=>{
    let item = new Book().setBook(value);
    array.push(item);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedComponent ],
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
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('data should not to be null', () => {
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

  it('data props should be', () => {    
    array.map((value,index, data)=>{
      expect(data[index].isbn).toEqual(jasmine.any(String));
      expect(data[index].title).toEqual(jasmine.any(String));
      expect(data[index].price).toEqual(jasmine.any(Number));
      expect(data[index].cover).toEqual(jasmine.any(String));
      expect(data[index].synopsis).toEqual(jasmine.any(String));
    });
  });

});
