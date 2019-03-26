import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { MockBooks } from '../../../fixtures/mock-books';
 
describe('ApiService', () => {

  let httpMock: HttpTestingController;
  let dataService: ApiService;
  let mockBooks:MockBooks;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ApiService]
    });
    dataService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
    mockBooks = new MockBooks().getMockData(mockBooks)
  }));

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('getData() should GET data', fakeAsync(() => {
    const data:MockBooks = mockBooks;
    const url:string = "http://henri-potier.xebia.fr/books";
    dataService.getData(url).subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual("GET");
    req.flush(data);
    tick(); 
  }));

  it('getUsers() should GET users', fakeAsync(() => {
    const data:MockBooks = mockBooks;
    const url:string = "https://randomuser.me/api/?results=4";
    dataService.getData(url).subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual("GET");
    req.flush(data);
    tick();
  }));

});