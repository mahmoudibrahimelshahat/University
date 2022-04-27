import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  items=[];
  photos=[];
  constructor(private title:Title) { 
    this.title.setTitle("University - Pages - Gallary");
  }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/gal/g1.jpg'
      },
      {
        img:'assets/gal/g2.jpg'
      },
      {
        img:'assets/gal/g3.jpg'
      },
      {
        img:'assets/gal/g4.jpg'
      },
      {
        img:'assets/gal/g5.jpg'
      },
      {
        img:'assets/gal/g6.jpg'
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
