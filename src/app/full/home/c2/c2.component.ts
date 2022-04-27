import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  items=[];
    constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/photos/i1.jpg',
        title:"drawing",
        titlesmall:"1 course"
      },
      {
        img:'assets/photos/i2.jpg',
        title:"Humanities",
        titlesmall:"2 course"
      },
      {
        img:'assets/photos/i3.jpg',
        title:"Mathematics",
        titlesmall:"3 course"     
       },
      {
        img:'assets/photos/i4.jpg',
        title:"Programming",
        titlesmall:"4 course"
      }, 
       {
        img:'assets/photos/i5.jpg',
        title:"Science",
        titlesmall:"5 course"
      },
      {
        img:'assets/photos/i6.jpg',
        title:"Behavioral",
        titlesmall:"6 course"
      },
      {
        img:'assets/photos/i7.jpg',
        title:"Biological",
        titlesmall:"7 course"
      },
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
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
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
    },
    nav: true
  }

}
