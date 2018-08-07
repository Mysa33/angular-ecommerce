import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWidgetComponent } from './products-widget.component';

describe('ProductsWidgetComponent', () => {
  let component: ProductsWidgetComponent;
  let fixture: ComponentFixture<ProductsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWidgetComponent ]
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
