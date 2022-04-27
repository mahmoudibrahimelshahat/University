import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl1',
  templateUrl: './owl1.component.html',
  styleUrls: ['./owl1.component.css']
})
export class Owl1Component implements OnInit {
  items=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/cour/luis.jpg',
      },
      {
        img:'assets/cour/luis1.jpg',
      },
      {
        img:'assets/cour/luis2.jpg',
 
       },
      {
        img:'assets/cour/luis3.jpg',
      }, 
      {
        img:'assets/cour/luis4.jpg',
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
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      // 740: {
      //   items: 3
      // },
      // 850:{
      //   items:4
      // }
    },
    nav: true
  }
}
