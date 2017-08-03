import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('Glo Tour Terms and conditions of use');

    meta.addTags([ 
      {
        name: 'author', content: 'Glo Tour Terms and conditions of use'
      },
      {
        name: 'keywords', content: 'Glo Tour Terms and conditions of use'
      },
      {
        name: 'description', content: 'Glo Tour Terms and conditions of use'
      },
    ])
  }

  ngOnInit() {
  }

}
