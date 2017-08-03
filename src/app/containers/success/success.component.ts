import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from './../../shared/data.service'; 
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit {
tours;
  constructor(meta: Meta, title: Title, private dataService: DataService) { 
    title.setTitle('Success! Thanks for booking with us');

    meta.addTags([ 
      {
        name: 'author', content: 'Success! Thanks for booking with us'
      },
      {
        name: 'keywords', content: 'Success! Thanks for booking with us'
      },
      {
        name: 'description', content: 'Success! Thanks for booking with us'
      },
    ])

    dataService.getJSON().subscribe(data => this.tours = data, error => console.log(error));
  }
  ngOnInit() {
  }

}
