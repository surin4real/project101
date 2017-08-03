import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from './../../shared/auth/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(meta: Meta, title: Title, public auth: AuthService, private router: Router) { 
    title.setTitle('Sign Up to Glothaitour');

    meta.addTags([ 
      {
        name: 'keywords', content: 'Sign Up to Glothaitour'
      },
      {
        name: 'description', content: 'Sign Up to Glothaitour'
      },
    ])
  }
  ngOnInit() {
  }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/']);
  }
 

  signInWithGithub(): void {
    this.auth.githubLogin()
    .then(() => this.afterSignIn());
  }

  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }
}
