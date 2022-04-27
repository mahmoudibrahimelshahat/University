import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  val: number;
  items=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/photos/c1.jpg',
        pimg:'assets/photos/p1.jpg',
        title:"Music",
        titlesmall:"Music Course",
        numm:"30",
        sale:"45$"
      },
      {
        img:'assets/photos/c2.jpg',
        pimg:'assets/photos/p2.jpg',
        title:"Programming",
        titlesmall:"Visual Studio Online Course",
        numm:"80",
        sale:"250$"
      },
      {
        img:'assets/photos/c3.jpg',
        pimg:'assets/photos/p3.jpg',
        title:"Programming",
        titlesmall:"Java Online Course",
        numm:"30",
        sale:"400$"
       },
      {
        img:'assets/photos/c4.jpg',
        pimg:'assets/photos/p4.jpg',
        title:"Web Development",
        titlesmall:"XML Online Course",
        numm:"30",
        sale:"100$"
      }, 
       {
        img:'assets/photos/c5.jpg',
        pimg:'assets/photos/p5.jpg',
        title:"Science",
        titlesmall:"Electrical Engineering",
        numm:"60",
        sale:"800$"
      },
      {
        img:'assets/photos/c6.jpg',
        pimg:'assets/photos/p6.jpg',
        title:"Science",
        titlesmall:"Electrical Engineering",
        numm:"120",
        sale:"750$"
      },
    ]
  }

}
