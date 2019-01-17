import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {

  let mockBook:any[];
  let books;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [ApiService]
    });

  });

  it('should be created', inject([ApiService], (service: ApiService) => {

    expect(service).toBeTruthy();

  }));


});
