import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.page).toEqual("about");
  });

  it('should render at least one div.container', async(() => {
    expect(compiled.querySelectorAll('div.container').length).toBeGreaterThanOrEqual(1);
  }));

  it('should render div.ecom-about-container', async(() => {
    expect(compiled.querySelectorAll('div.ecom-about-container')).toBeTruthy();
  }));

  it('should render only one div.row', async(() => {
    expect(compiled.querySelectorAll('div.row').length).toBeGreaterThanOrEqual(1);
  }));

  it('should render h4', async(() => {
    expect(compiled.querySelectorAll('h4.ecom-p-title')).toBeTruthy();
  }));

  it('should render img tag', async(() => {
    expect(compiled.querySelector('img')).toBeTruthy();
  }));
});
