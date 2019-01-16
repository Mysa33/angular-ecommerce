import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 
 
@Injectable()
export class DataShareService {
    shareDataSubject = new Subject<any>(); 
    
    sendData(data){

      this.shareDataSubject.next(data);
      
    }

}
