import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
items=[];
photos=[];
  constructor(private title:Title) {
    this.title.setTitle("University - Pages - Shop");
  }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/shop/sh1.jpg'
      },
      {
        img:'assets/shop/sh2.jpg'
      },
      {
        img:'assets/shop/sh3.jpg'
      },
      {
        img:'assets/shop/sh4.jpg'
      },
      {
        img:'assets/shop/sh5.jpg'
      },
      {
        img:'assets/shop/sh6.jpg'
      },
      {
        img:'assets/shop/sh7.jpg'
      },
      {
        img:'assets/shop/sh8.jpg'
      },
    ]
    this.photos=[
      {
        img:'assets/photos/1.png',
      },
      {
        img:'assets/photos/2.png',
      },
      {
        img:'assets/photos/3.png',
 
       },
      {
        img:'assets/photos/4.png',
      }, 
      {
        img:'assets/photos/3.png',
      }
    ]
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText : [""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      850:{
        items:4
      }
    },
    nav: false
  }

}
