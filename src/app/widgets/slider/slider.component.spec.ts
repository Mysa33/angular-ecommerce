import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing';

import {ApiService} from '../../shared/services/api.service';
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let httpMock: HttpTestingController;
  let dataService: ApiService;
  let mockData;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SliderComponent, 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        HttpModule,
        HttpClientModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should widgetStatus to be boolean`, async(() => {
    expect(component.widgetStatus).toEqual(jasmine.any(Boolean));
  }));

  it(`should widgetStatus to be false`, async(() => {
    expect(component.widgetStatus).toBe(false);
  }));

  it(`should slideFirstRow to be boolean`, async(() => {
    expect(component.slideFirstRow).toEqual(jasmine.any(Boolean));
  }));

  it(`should slideFirstRow to be false`, async(() => {
    expect(component.slideFirstRow).toBe(false);
  }));

  it(`should slideSecRow to be boolean`, async(() => {
    expect(component.slideSecRow).toEqual(jasmine.any(Boolean));
  }));

  it(`should slideSecRow to be true`, async(() => {
    expect(component.slideSecRow).toBe(true);
  }));

  it(`should setSliderData(true) return true`, async(() => {
    let flag:boolean = component.setSliderData(true)
    expect(flag).toBe(true);
  }));

  it(`should setSliderData(false) return true`, async(() => {
    let flag:boolean = component.setSliderData(false)
    expect(flag).toBe(true);
  }));

});
