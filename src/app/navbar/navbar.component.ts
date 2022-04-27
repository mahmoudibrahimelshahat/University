import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class NavbarComponent implements OnInit {
  scrollTop: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  updateHeader(evt) {
    if (window.pageYOffset >= 65) {
      this.scrollTop = true
    } else {
      this.scrollTop = false;
    }
  }
}
