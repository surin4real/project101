import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 constructor(meta: Meta, title: Title) { 
    title.setTitle('Contact Us');

    meta.addTags([ 
      {
        name: 'author', content: 'Contact Us'
      },
      {
        name: 'keywords', content: 'Contact Us'
      },
      {
        name: 'description', content: 'Contact Us'
      },
    ])
  }
  ngOnInit() {
  }

}
