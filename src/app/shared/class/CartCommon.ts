export class CartCommon{
    
    data;
    cartProdArray:any[];
    cartLength:number;
    cartTotal:number;
    bestDealVisibility:boolean = false;

    constructor(){}

    // Calc total
    doCartTotal():number{
        if(!this.cartLength){
        this.cartTotal = 0;
        }else{
        const add = (a:number, b:number) => a + b;
        let booksArray:Array<any> = this.cartProdArray.sort();
        let itemPriceArray:Array<any> = [];
        for (let _k in booksArray){
            itemPriceArray.push(Number(booksArray[_k].price));
        }
        this.cartTotal = itemPriceArray.reduce(add);
        }  
        return this.cartTotal;
    }
    //Display bestDeal
    displayBestDeal(){
        this.bestDealVisibility = true; 
    }
}