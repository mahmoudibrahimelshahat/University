import { Component, OnInit } from '@angular/core';
import {  Course } from 'src/app/models/courseone.model';
import {  CourseoneService } from 'src/app/_api/courseone.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-courseone',
  templateUrl: './courseone.component.html',
  styleUrls: ['./courseone.component.css']
})
export class CourseoneComponent implements OnInit {
  selectedKey="ALL";
  courses: Course[];
  items=[];
  constructor(private dataService: CourseoneService, private router:Router , private title:Title) {    
     this.title.setTitle("University - Courses - Course One");
}
  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
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
