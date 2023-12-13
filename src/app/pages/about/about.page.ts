import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  
  officeImages: string[] = [
    'assets/images/about4.jpg',
    'assets/images/about3.jpg',
    'assets/images/about2.jpg',
    'assets/images/about1.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }
}
