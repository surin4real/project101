import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private title: Title, private meta: Meta) { 

    title.setTitle("displayName Prolfile");
    meta.addTags([
         {
            name: 'keywords', content: 'displayName'
          },
          {
            name: 'description', content: 'displayName Glo tour account.'
          }
    ]);


  }

  ngOnInit() {
    if(this.auth.authenticated){
        console.log('ffjfj');
    }
  }

  logout() {
    this.auth.signOut();
  }

}
