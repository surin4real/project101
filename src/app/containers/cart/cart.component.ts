import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(meta: Meta, title: Title) { 
    title.setTitle('Your Shopping cart!');

    meta.addTags([ 
      {
        name: 'keywords', content: 'Your Shopping cart!'
      },
      {
        name: 'description', content: 'Your Shopping cart!'
      },
    ])
  }
  ngOnInit() {
  }

}
