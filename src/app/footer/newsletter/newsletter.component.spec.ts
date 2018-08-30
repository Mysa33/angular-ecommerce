import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { NewsletterComponent } from './newsletter.component';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterComponent ],
      imports: [
        FormGroup,
        FormControl,
        Validators,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeFalsy();
  });
});
