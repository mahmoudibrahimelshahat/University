import { Injectable } from '@angular/core';
import { Course } from '../models/courseone.model';

@Injectable({
  providedIn: 'root'
})
export class CourseoneService {
  courses:Course[];
  constructor() {
    this.courses = [
      {
        img:'assets/cour/cr1.jpg',
        title:"Science",
        smalltitle:"Computer Engineering",
        type: 'SCIENCE'
      },
      {
        img:'assets/cour/cr2.jpg',
        title:"Business",
        smalltitle:"Business Management",
        type: 'BUSINESS_STUDIES'
      },
      {
        img:'assets/cour/cr3.jpg',
        title:"Diploma",
        smalltitle:"Diploma Electrical",
        type: 'HUMANITIES'
      },
      {
        img:'assets/cour/cr4.jpg',
        title:"Science",
        smalltitle:"Civil Engineering",
        type: 'DIPLOMA'
      },
      {
        img:'assets/cour/cr5.jpg',
        title:"Humanities",
        smalltitle:"Bachelor of Arts",
        type: 'SCIENCE'
      },
      {
        img:'assets/cour/cr6.jpg',
        title:"Business",
        smalltitle:"Master of Business A.",
        type: 'BUSINESS_STUDIES'
      },
      {
        img:'assets/cour/cr7.jpg',
        title:"Diploma",
        smalltitle:"Diploma in Computer",
        type: 'HUMANITIES'
      },
      {
        img:'assets/cour/cr8.jpg',
        title:"Humanities",
        smalltitle:"Master of Arts",
        type: 'DIPLOMA'
      },
      {
        img:'assets/cour/cr9.jpg',
        title:"Science",
        smalltitle:"Electronics Engineering",
        type: 'SCIENCE'
      },
       ]
  }
  getCourses() {
    return this.courses;
  }
   }

