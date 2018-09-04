export class Book {
    
    public data;

    setBook(data){
        this.data = data;
        let dataModel = {
            "isbn":data.isbn,
            "title":data.title,
            "price":data.price,
            "cover":data.cover,
            "synopsis":data.synopsis[0]

        }
        return dataModel;
    }
}
