import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './full/home/home.component';
import { C1Component } from './full/home/c1/c1.component';
import { C2Component } from './full/home/c2/c2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { C3Component } from './full/home/c3/c3.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { C4Component } from './full/home/c4/c4.component';
import { CountdownModule } from "ng2-countdown-timer";
import { UsersService } from './_api/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { C5Component } from './full/home/c5/c5.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './full/aboutus/aboutus.component';
import { A1Component } from './full/aboutus/a1/a1.component';
import { A2Component } from './full/aboutus/a2/a2.component';
import { A3Component } from './full/aboutus/a3/a3.component';
import { A4Component } from './full/aboutus/a4/a4.component';
import { PagesComponent } from './full/pages/pages.component';
import { TeachersComponent } from './full/pages/teachers/teachers.component';
import {PaginatorModule} from 'primeng/paginator';
import { GallaryComponent } from './full/pages/gallary/gallary.component';
import { ShopComponent } from './full/pages/shop/shop.component';
import { CartComponent } from './full/pages/cart/cart.component';
import { CheckoutComponent } from './full/pages/checkout/checkout.component';
import { CoursesComponent } from './full/courses/courses.component';
import { CoursedetailComponent } from './full/courses/coursedetail/coursedetail.component';
import { CourseoneComponent } from './full/courses/courseone/courseone.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AnotherComponent } from './full/courses/another/another.component';
import {MatChipsModule} from '@angular/material/chips';
import { Owl1Component } from './full/courses/owl1/owl1.component';
import { Owl2Component } from './full/courses/owl2/owl2.component';
import { EventComponent } from './full/events/event/event.component';
import { EventdetailsComponent } from './full/events/eventdetails/eventdetails.component';
import { EventsComponent } from './full/events/events.component';
import { ContanctComponent } from './full/contanct/contanct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    C1Component,
    C2Component,
    NavbarComponent,
    C3Component,
    C4Component,
    C5Component,
    FooterComponent,
    AboutusComponent,
    A1Component,
    A2Component,
    A3Component,
    A4Component,
    PagesComponent,
    TeachersComponent,
    GallaryComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    CoursesComponent,
    CoursedetailComponent,
    CourseoneComponent,
    AnotherComponent,
    Owl1Component,
    Owl2Component,
    EventComponent,
    EventdetailsComponent,
    EventsComponent,
    ContanctComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CountUpModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    CountdownModule,
    HttpClientModule,
    MatButtonModule,
    PaginatorModule,
    MatExpansionModule,
    MatChipsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
