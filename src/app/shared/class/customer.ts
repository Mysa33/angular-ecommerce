export class Customer {
    public data:any;
    public _i:number;

    setCustomer(data,_i):any{
        this.data = data;
        let dataArray = {
            "email":this.data[_i].data.inputEmail,
            "date":this.data[_i].postDate,
            "name":this.data[_i].data.inputName,
            "address":this.data[_i].data.inputAddress,
            "address2":this.data[_i].data.inputAddress2,
            "city":this.data[_i].data.inputCity,
            "zip":this.data[_i].data.inputZip,
            "title":this.data[_i].data.inputTitle,
            "message":this.data[_i].data.inputTxt
        }
        return dataArray;
    }
}
