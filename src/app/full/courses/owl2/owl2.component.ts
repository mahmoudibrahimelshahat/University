import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl2',
  templateUrl: './owl2.component.html',
  styleUrls: ['./owl2.component.css']
})
export class Owl2Component implements OnInit {
  courses=[]
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        img:'assets/cour/cr1.jpg',
        title:"Science",
        smalltitle:"Computer Engineering",
      },
      {
        img:'assets/cour/cr2.jpg',
        title:"Business",
        smalltitle:"Business Management",
      },
      {
        img:'assets/cour/cr3.jpg',
        title:"Diploma",
        smalltitle:"Diploma Electrical",
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
    navText : [],
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
    //   850:{
    //     items:4
    //   }
     },
    nav: false
  }

}
