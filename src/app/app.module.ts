import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import {ApiService} from './shared/services/api.service';
import { DataShareService } from './shared/services/data-share.service';
import { BestDealComponent } from './cart/best-deal/best-deal.component';
import { ModalComponent } from './modal/modal.component';
import { FilterdataPipe } from './shared/pipes/filterdata.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductsComponent,
    BestDealComponent,
    ModalComponent,
    FilterdataPipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService,DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
