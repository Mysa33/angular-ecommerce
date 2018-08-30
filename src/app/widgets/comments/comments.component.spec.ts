import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from '../../shared/services/api.service';
import { DataShareService } from '../../shared/services/data-share.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent ],
      imports: [
        HttpModule,
        HttpClientModule
      ],
        providers: [
        DataShareService,
        LocalStorageService,
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default value', () => {

    expect(component.defaultCommentsWidgetId).toBeUndefined();
    expect(component.widgetStyleId).toEqual(0);

  });

  it('data should not be', () => {

    expect(component.getUsers()).not.toBeNull();
    let data = component.getUsers();
    data.map((value, index)=>{
      expect(value.toBeUndefined());
    })
   
  });

});
