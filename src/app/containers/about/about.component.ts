import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('About us');

    meta.addTags([ 
      {
        name: 'author', content: 'AngularClass/Angular Team'
      },
      {
        name: 'keywords', content: 'About Angular Courses'
      },
      {
        name: 'description', content: 'About Angular Courses'
      },
    ])
  }

  ngOnInit() {
  }

}
