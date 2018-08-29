import { LocalStorageService } from '../services/local-storage.service';
export class ContactData {
  
    constructor(
        private _contactDataService:LocalStorageService,
        data:any,
        arrayName:any
    ){}

    getLocalData(data,arrayName):any{
        let dataArray = this._contactDataService.getLocalstorage(data,arrayName);
        return dataArray;
    }
}
