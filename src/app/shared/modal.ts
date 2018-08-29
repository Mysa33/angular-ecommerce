export class Modal {
    
    public data:any;
    public _i:number;

    setBookModal(data,_i):any{
        this.data = data;
        let dataArray = {
            "isbn" : this.data[_i].isbn,
            "title": this.data[_i].title,
            "price": this.data[_i].price,
            "cover": this.data[_i].cover,
            "synopsis":this.data[_i].synopsis[0]
        }
        return dataArray;
    }
}
