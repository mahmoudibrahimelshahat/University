import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_api/users.service';
import { NgForm } from '@angular/forms';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contanct',
  templateUrl: './contanct.component.html',
  styleUrls: ['./contanct.component.css']
})
export class ContanctComponent implements OnInit {
  isSendData: boolean = false;
  isErrorData: boolean = false;
  items=[];
  constructor(private userService: UsersService , private title:Title) {   this.title.setTitle("University - Contact"); }
 
  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(form.value)
      this.userService.createUser(form.value).subscribe(result => {
        // console.log(result);
        form.reset();
        this.isSendData = true;
        this.isErrorData = false;
      }, error => {
        console.log(error)
        this.isErrorData = true;
        this.isSendData = false;
      })
    }
  }

  ngOnInit(): void {
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
