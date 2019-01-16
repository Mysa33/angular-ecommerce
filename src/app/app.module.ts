import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { LocalStorageService } from './shared/services/local-storage.service';
import { ContactFormComponent } from './widgets/contact-form/contact-form.component';
import { NewsComponent } from './widgets/news/news.component';
import { PostsComponent } from './sidebar/posts/posts.component';
import { BannerComponent } from './widgets/banner/banner.component';
import { BreadcrumbComponent } from './widgets/breadcrumb/breadcrumb.component';
import { BlogComponent } from './blog/blog.component';

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
    ProfileComponent,
    ContactFormComponent,
    NewsComponent,
    PostsComponent,
    BannerComponent,
    BreadcrumbComponent,
    BlogComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterTestingModule
    //HttpClientTestingModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ApiService,
    DataShareService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
