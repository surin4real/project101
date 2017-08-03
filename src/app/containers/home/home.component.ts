import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DataService } from './../../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

tours: any;
toursOthers: {};

 searchThis;
  searchForm : FormGroup;
  private myForm: FormGroup;
  constructor(meta: Meta, title: Title, private formBuilder: FormBuilder, 
    private dataService: DataService, private router: Router, private fb: FormBuilder) { 
    title.setTitle('Glo Tour Thailand');

    meta.addTags([ 
      {
        name: 'author', content: 'Welcome To Glo Tour Guider'
      },
      {
        name: 'keywords', content: 'Welcome To Glo Tour Guider'
      },
      {
        name: 'description', content: 'Welcome To Glo Tour Guider'
      },
    ]);

     dataService.getJSON().subscribe(data => this.tours = data, error => console.log(error));
     dataService.getJSON2().subscribe(data => this.toursOthers = data, error => console.log(error));
  }

  ngOnInit() {
     this.searchForm = this.fb.group({
      'search_term': [null,  Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      //'start_date': [null,  Validators.required],
      //'end_date': [null,  Validators.required]
    });
  }
  

    search(search){
     // console.log(search.search_term);
     this.router.navigate([`/tour/${search.search_term}`]);
  }
     
}
