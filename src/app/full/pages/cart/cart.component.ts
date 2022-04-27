import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  amount:number = 0;
  amoun:number = 0;
  amou:number = 0;
  photos=[];
  constructor(private title:Title) {
    this.title.setTitle("University - Pages - Cart");
   }

  ngOnInit(): void {
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
  addItem() {
    if (this.amount < 5)
      this.amount = this.amount + 1;
    else
      console.log('NOT allowed')
  }

  removeItem() {
    if (this.amount > 0)
      this.amount = this.amount - 1;
    else
      console.log('NOT allwed larger')
  }
  add() {
    if (this.amoun < 5)
      this.amoun = this.amoun + 1;
    else
      console.log('NOT allowed')
  }

  remove() {
    if (this.amoun > 0)
      this.amoun = this.amoun - 1;
    else
      console.log('NOT allwed larger')
  }
  aja() {
    if (this.amou < 5)
      this.amou = this.amou + 1; 
    else
      console.log('NOT allowed')
  }

  rej() {
    if (this.amou > 0)
      this.amou = this.amou - 1;
    else
      console.log('NOT allwed larger')
  }
}
