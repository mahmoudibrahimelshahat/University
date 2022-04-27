import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './full/home/home.component';
import { AboutusComponent } from './full/aboutus/aboutus.component';
import { TeachersComponent } from './full/pages/teachers/teachers.component';
import { PagesComponent } from './full/pages/pages.component';
import { GallaryComponent } from './full/pages/gallary/gallary.component';
import { ShopComponent } from './full/pages/shop/shop.component';
import { CartComponent } from './full/pages/cart/cart.component';
import { CheckoutComponent } from './full/pages/checkout/checkout.component';
import { CoursesComponent } from './full/courses/courses.component';
import { CourseoneComponent } from './full/courses/courseone/courseone.component';
import { CoursedetailComponent } from './full/courses/coursedetail/coursedetail.component';
import { EventsComponent } from './full/events/events.component';
import { EventComponent } from './full/events/event/event.component';
import { EventdetailsComponent } from './full/events/eventdetails/eventdetails.component';
import { ContanctComponent } from './full/contanct/contanct.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "aboutus",
    component: AboutusComponent
  },
  {
    path: "pages",
    children: [
      {
        path: "teachers",
        component: TeachersComponent
      },
      {
        path: "gallary",
        component: GallaryComponent
      },
      {
        path: "shop",
        component: ShopComponent
      },
      {
        path: "cart",
        component: CartComponent
      },
      {
        path: "checkout",
        component: CheckoutComponent
      },
      {
        path: '',
        component: PagesComponent
      }
    ]
  },
  {
    path: "courses",
    children: [
      {
        path: "courseone",
        component: CourseoneComponent
      },
      {
        path: "coursedetail",
        component: CoursedetailComponent
      },
      {
        path: '',
        component: CoursesComponent
      }
    ]
  },
  {
    path: "events",
    children: [
      {
        path: "event",
        component: EventComponent
      },
      {
        path: "eventdetails",
        component: EventdetailsComponent
      },
      {
        path: '',
        component: EventsComponent
      }
    ]
  },
  {
    path: "contact",
    component: ContanctComponent
  },
  {
    path: "**",
    redirectTo: "/"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
