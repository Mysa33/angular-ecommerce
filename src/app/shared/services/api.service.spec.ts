import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { MockBooks } from '../fixtures/mock-books';
 
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

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('getData() should http GET data', () => {
    const data:MockBooks = mockBooks;
    const url:string = "http://henri-potier.xebia.fr/books";
    dataService.getData(url).subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual("GET");
    req.flush(data);
    httpMock.verify();
  });

  it('getBooks() should http GET books', () => {
    const data:MockBooks = mockBooks;
    dataService.getBooks().subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne("http://henri-potier.xebia.fr/books");
    expect(req.request.method).toEqual("GET");
    req.flush(data);
    httpMock.verify();
  });

  it('getUsers() should http GET users', () => {
    const data:MockBooks = mockBooks;
    dataService.getBooks().subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne("http://henri-potier.xebia.fr/books");
    expect(req.request.method).toEqual("GET");
    req.flush(data);
    httpMock.verify();
  });

});