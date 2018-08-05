import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
 
 
@Injectable()
export class DataShareService {
 
    shareDataSubject = new Subject<any>(); 

    sendDataToOtherComponent(data){
      this.shareDataSubject.next(data);
    }
}
