import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-best-deal',
  templateUrl: './best-deal.component.html',
  styleUrls: ['./best-deal.component.scss']
})
export class BestDealComponent implements OnInit {
  
  @Input () data;
  @Input () cartTotalBd;
  //Best deal
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

  constructor(private _http:HttpClient) {}

  ngOnInit() {
    this.doBestDeal();
  }

  doBestDeal(){
    this.getBestdealData(); 
  } 
  //get Best deal data
  getBestdealData(){
    this.dataBestdeal = this.data.products;
    //Get isbn from array
    this.isbnArray = this.dataBestdeal.map(data => data.isbn).sort()
    .filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });

    this.doSetbestdealUrl();
    this.getCommercialOffers(this.commercialOffersUrl);
    //this.calcBestdeal(this.dataOffers);
  }
  //
  doSetbestdealUrl():any{
    for(let _o in this.isbnArray){
      this.commercialOffersUrl += this.isbnArray[_o] + "," ;
    }
    this.commercialOffersUrl = "http://henri-potier.xebia.fr/books/"+this.commercialOffersUrl+"/commercialOffers";
  }
  // Get commercial offers //Todo : use service
  getCommercialOffers(commercialOffersUrl):any{
    this.commercialOffersUrl = commercialOffersUrl;
    if(this.commercialOffersUrl == ""){
      return
    }else{
      this._http.get(this.commercialOffersUrl).subscribe(
        data => { 
          this.dataOffers = data;
          this.dataOffers = this.dataOffers.offers; 
          console.log("this.dataOffers",this.dataOffers);
          this.calcBestdeal(this.dataOffers);//Todo

          return this.dataOffers;//Todo
        },
        err => {
          console.error("Erro : ",err);
          throw err;
        },
        () => console.log('done loading offers')
      );
    
    }
    
  } 
  // Calc best deal 
  calcBestdeal(dataOffers):void{
    this.dataOffers = dataOffers;
    console.log("this.dataOffers offer",this.dataOffers);
    this.price = this.data.totalCart;
    console.log("this.price",this.price);
    let percent = !this.dataOffers[0] ?  0: this.dataOffers[0].value;
    let minus =  !this.dataOffers[1] ? 0 : this.dataOffers[1].value;
    let slice = !this.dataOffers[2] ? 0 : this.dataOffers[2].value;
    let sliceValue = !this.dataOffers[0] ? 0 : this.dataOffers[0].sliceValue;
    //pricePercent
    let pricePercent = Math.floor(this.price - ((this.price/100)*percent));  
    //priceMinus
    let priceMinus = pricePercent - minus;
    //priceBestdeal
    if(priceMinus<sliceValue){
      this.priceBestdeal = priceMinus;
    }else{
      this.priceBestdeal = priceMinus - slice;
    }
    //Set besdeal txt  
    this.offerPercentTxt = "Remise de : " + percent + " % ";
    this.offerMinusTxt = "Réduction immédiate en caisse d'un montant de " + minus + " Euro";
    this.offerSliceTxt = "Réduction d'un montant de "+ slice + " Euro";
    //Set visbility //Todo : finir
    this.percentVis = !this.dataOffers[0] ?  false : true;
    this.minusVis =  !this.dataOffers[1] ? false : true;
    this.sliceVis = !this.dataOffers[2] ? false : true;
  }
  
  
}
