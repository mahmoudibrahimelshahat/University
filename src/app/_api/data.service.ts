import { Injectable } from '@angular/core';
import { Portofolio } from '../models/portofolio.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  portofolios: Portofolio[];

  constructor() { 
     this.portofolios = [
      {
        image:'assets/teach/sc1.jpg',
        name:"Md. Abdur Rahid",
        job:"science",
        type: 'SCIENCE',
      },
      {
        image:'assets/teach/bi1.jpg',
        name:"Mahabub Alam",
        job:"Business Studies",
        type: 'BUSINESS STUDIES',
      },
      {
        image:'assets/teach/art1.jpg',
        name:"Jesika Helan",
        job:"Arts",
        type: 'ARTS',
      },
      {
        image:'assets/teach/di1.jpg',
        name:"Deluar Khan",
        job:"Diploma",
        type: 'DIPLOMA',
      },
      // 
      {
        image:'assets/teach/sc2.jpg',
        name:"Alex Hilfisher",
        job:"Science",
        type: 'SCIENCE',
      },
      {
        image:'assets/teach/bi2.jpg',
        name:"Naila Naime",
        job:"Business Studies",
        type: 'BUSINESS STUDIES',
      },
      {
        image:'assets/teach/art2.jpg',
        name:"Shoykot Hassan",
        job:"Arts",
        type: 'ARTS',
      },
      {
        image:'assets/teach/di2.jpg',
        name:"Eyamin Hossain",
        job:"Diploma",
        type: 'DIPLOMA',
      },
      // 
      {
        image:'assets/teach/sc3.jpg',
        name:"Nuhan Freddy",
        job:"Science",
        type: 'SCIENCE',
      },
      {
        image:'assets/teach/bi3.jpg',
        name:"Istiak Hossain",
        job:"Business Studies",
        type: 'BUSINESS STUDIES',
      },
      {
        image:'assets/teach/art3.jpg',
        name:"Rhusda D’suza",
        job:"Arts",
        type: 'ARTS',
      },
      {
        image:'assets/teach/di3.jpg',
        name:"Masud Rana",
        job:"Diploma",
        type: 'DIPLOMA',
      },      
       ]
  }
  getPortofolios() {
    return this.portofolios;
  }
}
