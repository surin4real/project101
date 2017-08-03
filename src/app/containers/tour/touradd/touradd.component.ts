import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './../../../shared/data.service';
@Component({
  selector: 'app-touradd',
  templateUrl: './touradd.component.html',
  styleUrls: ['./touradd.component.css']
})
export class TouraddComponent implements OnInit {
id:any;
tours: any;
tour: any;
  constructor(private meta: Meta, private title: Title,  private router: Router, private route: ActivatedRoute, private dataService: DataService) {
   

    
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params['id'];
       
        
        this.dataService.getJSON2().subscribe(data => {
         this.tour = data.filter(function(node) {
                return node.t_id === params['id'];
          });
           this.tour = this.tour[0]; 
            this.title.setTitle(this.tour["t_name"]);
            
            this.meta.addTags([ 
            {
              name: 'author', content: this.tour["t_name"]
            },
            {
              name: 'keywords', content: this.tour["t_name"]
            },
            {
              name: 'description', content: this.tour["t_desc"]
            },
          ]);
        });
      
        
    });
  }
}