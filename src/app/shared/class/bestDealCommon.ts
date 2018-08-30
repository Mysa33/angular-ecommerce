export class BestdealCommon{
    
    isbnArray:Array<any>
    commercialOffersUrl:string;
    dataOffers;
    dataBestdeal;
    price:number;
    priceBestdeal:number = 0;
    offerSliceTxt:string;
    offerPercentTxt:string;
    offerMinusTxt:string;
    bestDealPercentTxt: string;
    bestDealMinusTxt: string;
    bestDealSliceTxt: string;
    bestDealPriceTxt: string;
    percentVis:boolean = false;
    minusVis:boolean = false;
    sliceVis:boolean = false;
    dataArray;

    constructor(){}

    //doSetbestdealUrl
    doSetbestdealUrl():void{
        for(let _o in this.isbnArray){
        this.commercialOffersUrl += this.isbnArray[_o] + "," ;
        }
        this.commercialOffersUrl = "http://henri-potier.xebia.fr/books/"+this.commercialOffersUrl+"/commercialOffers";
    }
    
}