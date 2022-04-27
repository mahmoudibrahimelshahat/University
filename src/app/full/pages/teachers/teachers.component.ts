import { Component, OnInit } from '@angular/core';
import { Portofolio } from 'src/app/models/portofolio.model';
import { DataService } from 'src/app/_api/data.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {



  selectedKey = 'ALL';
  portofolios: Portofolio[] = [];
  items=[];
  constructor(private dataService: DataService, private router:Router ,private title:Title) {
    this.title.setTitle("University - Pages - Teachers");
   }

  ngOnInit() {
    this.portofolios = this.dataService.getPortofolios();
    this.items=[
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
