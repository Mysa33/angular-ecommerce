import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import {ApiService} from './shared/services/api.service';
import { DataShareService } from './shared/services/data-share.service';
import { BestDealComponent } from './cart/best-deal/best-deal.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { FilterdataPipe } from './shared/pipes/filterdata.pipe';
import { CommentsComponent } from './widgets/comments/comments.component';
import { SocialComponent } from './widgets/social/social.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './widgets/team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsWidgetComponent } from './widgets/products-widget/products-widget.component';
import { NewsletterComponent } from './footer/newsletter/newsletter.component';
import { InfosComponent } from './footer/infos/infos.component';
import { CarrousselComponent } from './widgets/carroussel/carroussel.component';
import { MobileNavComponent } from './header/mobile-nav/mobile-nav.component';
import { MarketingComponent } from './widgets/marketing/marketing.component';
import { FeaturedComponent } from './widgets/featured/featured.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './widgets/slider/slider.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes  = [
  {path :'', redirectTo : 'home', pathMatch:'full'},
  {path :'home', component: HomeComponent},
  {path :'shop', component: ProductsComponent},
  {path : 'about', component : AboutUsComponent},
  {path : 'contact', component : ContactComponent},
  {path :'profil', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductsComponent,
    BestDealComponent,
    ModalComponent,
    FilterdataPipe,
    CommentsComponent,
    SocialComponent,
    AboutUsComponent,
    TeamComponent,
    ContactComponent,
    SidebarComponent,
    ProductsWidgetComponent,
    NewsletterComponent,
    InfosComponent,
    CarrousselComponent,
    MobileNavComponent,
    MarketingComponent,
    FeaturedComponent,
    HomeComponent,
    SliderComponent,
    ProfileComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ApiService,DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
