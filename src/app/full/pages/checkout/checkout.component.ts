import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckService } from 'src/app/_api/check.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  photos=[];
  constructor(private CheckService: CheckService , private title:Title) { 
    this.title.setTitle("University - Pages - Check Out");

  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(form.value)
      this.CheckService.createUser(form.value).subscribe(result => {
        // console.log(result);
        form.reset();
      }, error => {
        console.log(error)

      })
    }
  }

  ngOnInit(): void {
    this.photos=[
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
