import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[] = ([
    "../../assets/photos/winter.jpg",
    "../../assets/photos/night.jpg",
    "../../assets/photos/summer.jpg",
    "../../assets/photos/autumn.jpg"
  ]);
  index: number = 0;

  constructor() {} 
  ngOnInit() {
  }

  slideImg() { 
    this.images.forEach(element => {
    let index = this.images.indexOf(element);
    index++;
    if(index>=this.images.length) {
      index=0;   
    } 

    });  
} 
  
 }

