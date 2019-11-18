import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  items: any[];

  constructor(private router:Router) {

   }

  ngOnInit() {
    this.items = [
      {},{},{},{},{}
    ]
  }
 

}
