import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/_api/users.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  items=[];
  isSendData: boolean = false;
  isErrorData: boolean = false;
  constructor(private userService: UsersService) { }

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
// text:any = {
//     Year: '2019',
//     Month: '6',
//     Weeks: "2",
//     Days: "3",
//     Hours: "33",
//     Minutes: "20",
//     Seconds: "50",
//   };
text:any = {
  Weeks: "Weeks",
  Days: "Days",
  Hours: "Hours",
  Minutes: "Minutes",
  Seconds: "Seconds",
  MilliSeconds: "MilliSeconds"
};
}
