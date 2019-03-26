import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LocalStorageService } from '../../shared/services/local-storage.service';
import { NewsletterComponent } from './newsletter.component';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;
  let compiled:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        LocalStorageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.newsletterArray).toBe("newsletterFormArray");
  });

  it('should render input tag', async(() => {
    expect(compiled.querySelector('input')).toBeTruthy();
  }));

  it('should render btn tag', async(() => {
    expect(compiled.querySelector('button')).toBeTruthy();
  }));

});
