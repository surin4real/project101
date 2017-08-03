import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isGrayTheme: boolean = true;

  constructor(private auth: AuthService) { 
  
  }

  logout() {
    this.auth.signOut();
  }
}
