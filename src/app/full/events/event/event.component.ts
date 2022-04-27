import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  items=[];
  cors=[];
  constructor(private title:Title) { 
    this.title.setTitle("University - Events - Event");

  }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/events/e1.jpg',
      },
      {
        img:'assets/events/e2.jpg',
      },
      {
        img:'assets/events/e3.jpg',
      },
      {
        img:'assets/events/e4.jpg',
      },
      {
        img:'assets/events/e5.jpg',
      },
      {
        img:'assets/events/e6.jpg',
      },
    ]
    this.cors=[
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
