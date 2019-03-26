import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form.component';
import { LocalStorageService } from '../../shared/services/local-storage.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [
        /*FormGroup, 
        FormControl, 
        Validators,
        FormsModule, */
        ReactiveFormsModule
      ],
        providers: [
        LocalStorageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.contactForm.controls['inputEmail'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue("test");
    expect(errors['required']).toBeTruthy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.contactForm.controls['inputName'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('address field validity', () => {
    let errors = {};
    let address = component.contactForm.controls['inputAddress'];
    errors = address.errors || {};
    expect(errors['required']).toBeTruthy();
  });

});
