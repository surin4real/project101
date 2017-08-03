import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

   constructor(meta: Meta, title: Title) { 
    title.setTitle('Refund Policy');

    meta.addTags([ 
      {
        name: 'author', content: 'Refund Policy'
      },
      {
        name: 'keywords', content: 'Refund Policy'
      },
      {
        name: 'description', content: 'Refund Policy'
      },
    ])
  }

  ngOnInit() {
  }

}
