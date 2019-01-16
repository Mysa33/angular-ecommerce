export class Customer {
    
    public data:any;
    public i:number;

    setCustomer(data,i):any{
        this.data = data;
        let dataArray = {
            "email":this.data[i].data.inputEmail,
            "date":this.data[i].postDate,
            "name":this.data[i].data.inputName,
            "address":this.data[i].data.inputAddress,
            "address2":this.data[i].data.inputAddress2,
            "city":this.data[i].data.inputCity,
            "zip":this.data[i].data.inputZip,
            "title":this.data[i].data.inputTitle,
            "message":this.data[i].data.inputTxt
        }
        return dataArray;
    }
}
