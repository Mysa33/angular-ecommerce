import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ApiService} from '../../shared/services/api.service';
import { ProductsWidgetComponent } from './products-widget.component';

describe('ProductsWidgetComponent', () => {
  let component: ProductsWidgetComponent;
  let fixture: ComponentFixture<ProductsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWidgetComponent ],
      imports: [
        HttpModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
