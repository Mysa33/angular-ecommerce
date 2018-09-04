import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ApiService} from '../../shared/services/api.service';
import { NewsComponent } from './news.component';
import { MockNews } from '../../shared/fixtures/mock-news'; 
import { Slide } from '../../shared/class/slide';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  var mockedData = new MockNews().getMockData(mockedData); 
  let flag:number;
  var firstRowData:any[];
  var secRowData:any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    flag = component.flag;
    firstRowData = new Slide().setFirstRow(mockedData,firstRowData,flag)
    secRowData = new Slide().setSecondRow(mockedData,secRowData,flag)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not to be undifined', () => {
    expect(flag).not.toBeUndefined();
    expect(mockedData).not.toBeUndefined();
    mockedData.map((value,index, data)=>{
      expect(data[index].img).not.toBeUndefined();
      expect(data[index].title).not.toBeUndefined();
      expect(data[index].date).not.toBeUndefined();
      expect(data[index].txt).not.toBeUndefined();
    });
    expect(firstRowData).not.toBeUndefined();
    firstRowData.map((value,index, data)=>{
      expect(data[index].img).not.toBeUndefined();
      expect(data[index].title).not.toBeUndefined();
      expect(data[index].date).not.toBeUndefined();
      expect(data[index].txt).not.toBeUndefined();
    });
    expect(secRowData).not.toBeUndefined();
    secRowData.map((value,index, data)=>{
      expect(data[index].img).not.toBeUndefined();
      expect(data[index].title).not.toBeUndefined();
      expect(data[index].date).not.toBeUndefined();
      expect(data[index].txt).not.toBeUndefined();
    });
  });

  it('should be not null', ()=>{
    expect(mockedData).not.toBeNull();
    expect(component.flag).not.toBeNull();
    mockedData.map((value,index, data)=>{
      expect(data[index].img).not.toBeNull();
      expect(data[index].title).not.toBeNull();
      expect(data[index].date).not.toBeNull();
      expect(data[index].txt).not.toBeNull();
    });
    expect(firstRowData).not.toBeNull();
    expect(secRowData).not.toBeNull();
  });

  it('should to equal', () => {
    expect(flag).toEqual(3);
  });

  it('should to be', () => { 
    expect(flag).toEqual(jasmine.any(Number));   
    mockedData.map((value,index, data)=>{
      expect(data[index].img).toEqual(jasmine.any(String));
      expect(data[index].title).toEqual(jasmine.any(String));
      expect(data[index].date).toEqual(jasmine.any(String));
      expect(data[index].txt).toEqual(jasmine.any(String));
    });
    firstRowData.map((value,index, data)=>{
      expect(data[index].img).toEqual(jasmine.any(String));
      expect(data[index].title).toEqual(jasmine.any(String));
      expect(data[index].date).toEqual(jasmine.any(String));
      expect(data[index].txt).toEqual(jasmine.any(String));
    });
    secRowData.map((value,index, data)=>{
      expect(data[index].img).toEqual(jasmine.any(String));
      expect(data[index].title).toEqual(jasmine.any(String));
      expect(data[index].date).toEqual(jasmine.any(String));
      expect(data[index].txt).toEqual(jasmine.any(String));
    });
  });


});
