import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 
 
@Injectable()
export class DataShareService {
    shareDataSubject = new Subject<any>(); 
    
    sendDataToOtherComponent(data){
      this.shareDataSubject.next(data);
    }
}
