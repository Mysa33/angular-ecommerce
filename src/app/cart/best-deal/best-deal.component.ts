import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-best-deal',
  template:`
  <div class="col-lg-12 alert alert-success" *ngIf="percentVis">
    {{offerPercentTxt}}
  </div>
  <div class="col-lg-12 alert alert-success" *ngIf="minusVis">
    {{offerMinusTxt}}
  </div>
  <div class="col-lg-12 alert alert-success" *ngIf="sliceVis">
    {{offerSliceTxt}}
  </div>
  <div class="col-sm-12 ecom-cart-best-deal-col">
    <h2>
        Pix BestDeal : 
    </h2>
    <h3>
        {{priceBestdeal}} &euro;
    </h3>
  </div>
  `,
  styleUrls: ['./best-deal.component.scss']
})
export class BestDealComponent implements OnInit {
  
  @Input () data;
  @Input () cartTotalBd;
  isbnArray:Array<any>
  commercialOffersUrl:string;
  dataOffers;
  bestDealData:any;
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
  
  constructor(private _offersService: ApiService) {}

  ngOnInit() {
    this.doBestDeal();
  }

  doBestDeal(){
    this.getBestdealData(); 
  } 
  //get Bestdeal data
  getBestdealData(){
    this.bestDealData = this.data.products;
    this.isbnArray = this.bestDealData.map(data => data.isbn).sort()
    .filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });
    this.doSetbestdealUrl();
    this.getCommercialOffers(this.commercialOffersUrl);
  }
  // Get commercial offers
  getCommercialOffers(commercialOffersUrl){
    this.commercialOffersUrl = commercialOffersUrl;
    if(this.commercialOffersUrl == ""){
      return;
    }else{
      this._offersService.getoffers(this.commercialOffersUrl).subscribe(
        data => { 
          this.dataArray = data;
          this.dataArray = this.dataArray.offers;
          this.calcBestdeal(this.dataArray);
          return this.dataArray;
        },
        err => console.error(err),
        () => console.log('done loading offers')
      );
    }
  }
  //doSetbestdealUrl
  doSetbestdealUrl():void{
    for(let o in this.isbnArray){
        this.commercialOffersUrl += this.isbnArray[o] + "," ;
    }
    this.commercialOffersUrl = "http://henri-potier.xebia.fr/books/"+this.commercialOffersUrl+"/commercialOffers";
  }
  // Calc best deal 
  calcBestdeal(dataOffers):void{
    this.dataOffers = dataOffers;
    this.price = this.data.totalCart;
    let percent = !this.dataOffers[0] ?  0: this.dataOffers[0].value;
    let minus =  !this.dataOffers[1] ? 0 : this.dataOffers[1].value;
    let slice = !this.dataOffers[2] ? 0 : this.dataOffers[2].value;
    let sliceValue = !this.dataOffers[0] ? 0 : this.dataOffers[0].sliceValue;
    let pricePercent = Math.floor(this.price - ((this.price/100)*percent));  
    let priceMinus = pricePercent - minus;
    if(priceMinus<sliceValue){
      this.priceBestdeal = priceMinus;
    }else{
      this.priceBestdeal = priceMinus - slice;
    }
    //Set besdeal txt  
    this.offerPercentTxt = "Remise de : " + percent + " % ";
    this.offerMinusTxt = "Réduction immédiate en caisse d'un montant de " + minus + " Euro";
    this.offerSliceTxt = "Réduction d'un montant de "+ slice + " Euro";
    //Set visbility
    this.percentVis = !this.dataOffers[0] ?  false : true;
    this.minusVis =  !this.dataOffers[1] ? false : true;
    this.sliceVis = !this.dataOffers[2] ? false : true;
  }
}
