import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component implements OnInit {
  items=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/photos/p1.jpg',
        title:"ABD Rashid Khan",
        titlesmall:"Vice Chancellor"
      },
      {
        img:'assets/photos/p2.jpg',
        title:"Mahabub Alam",
        titlesmall:"Professor"
      },
      {
        img:'assets/photos/p3.jpg',
        title:"John Doe",
        titlesmall:"Web Developer"     
       },
      {
        img:'assets/photos/p4.jpg',
        title:"Aden Hezard",
        titlesmall:"Ast. Professior"
      }, 
       {
        img:'assets/photos/p5.jpg',
        title:"Jordan Lukako",
        titlesmall:"Professior"
      },
      {
        img:'assets/photos/p6.jpg',
        title:"Luis Figo",
        titlesmall:"Instructor"
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
