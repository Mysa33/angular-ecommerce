import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import { Router, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";

import { MobileNavComponent } from './mobile-nav.component';
import { DataShareService } from '../../shared/services/data-share.service';
import { HeaderComponent } from '../header.component';
import { FilterdataPipe } from '../../shared/pipes/filterdata.pipe';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { HomeComponent } from '../../home/home.component';
import { ProductsComponent } from '../../products/products.component';
import { BlogComponent } from '../../blog/blog.component';
import { ContactComponent } from '../../contact/contact.component'; 
import { ProfileComponent} from '../../profile/profile.component';
import { routes } from '../../app-routing.module';

describe('MobileNavComponent', () => {
  let component: MobileNavComponent;
  let fixture: ComponentFixture<MobileNavComponent>;
  let compiled;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MobileNavComponent,
        HeaderComponent,
        FilterdataPipe,
        AboutUsComponent,
        HomeComponent, 
        ProductsComponent,
        BlogComponent,
        ContactComponent,
        ProfileComponent   
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      providers: [
        DataShareService
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => { 
    router.navigate(['']);
    tick(); 
    expect(location.path()).toBe('/home'); 
  }));

  it('navigate to "shop" takes you to /shop', fakeAsync(() => {
    router.navigate(['shop']);
    tick();
    expect(location.path()).toBe('/shop');
  }));

  it('navigate to "about" takes you to /shop', fakeAsync(() => {
    router.navigate(['about']);
    tick();
    expect(location.path()).toBe('/about');
  }));

  it('navigate to "contact" takes you to /contact', fakeAsync(() => {
    router.navigate(['contact']);
    tick();
    expect(location.path()).toBe('/contact');
  }));

  it('should render div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should not render nav tag', fakeAsync(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('nav')).toBeFalsy();
  }));

  it('should not render ul tag', fakeAsync(() => {
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

  it('should not render li tag', fakeAsync(() => {
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

  it('should not render a tag', fakeAsync(() => {
    expect(compiled.querySelector('a')).toBeTruthy();
  }));

  it('should render 6 li tag', fakeAsync(() => {
    expect(compiled.querySelectorAll('li').length).toEqual(6);
  }));

  it('should render 6 a tag', fakeAsync(() => {
    expect(compiled.querySelectorAll('a').length).toEqual(6);
  }));

  it('should a tag render text', fakeAsync(() => {
    expect(compiled.querySelector('a').textContent).toBeTruthy();
  }));

  it('should a tag text toEqual `Home`', fakeAsync(() => {
    expect(compiled.querySelector('a').textContent).toEqual('Home');
  }));


});
