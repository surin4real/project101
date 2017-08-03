import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from './../../shared/data.service'; 
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
tours;
  constructor(meta: Meta, title: Title, private dataService: DataService) { 
    title.setTitle('Oops! Can we be of help?');

    meta.addTags([ 
      {
        name: 'author', content: 'Oops! Can we be of help'
      },
      {
        name: 'keywords', content: 'Oops! Can we be of help'
      },
      {
        name: 'description', content: 'Oops! Can we be of help'
      },
    ])

    dataService.getJSON().subscribe(data => this.tours = data, error => console.log(error));
  }

  ngOnInit() {
  }

}
