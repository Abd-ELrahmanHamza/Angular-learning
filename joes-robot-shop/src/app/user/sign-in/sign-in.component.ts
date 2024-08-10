import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;
  constructor(private userSvc: UserService, private router: Router) {}
  signIn() {
    this.signInError = false;
    this.userSvc.signIn(this.credentials).subscribe({
      next: (response) => {
        this.router.navigate(['/catalog', '']);
        console.log('User signed in', response);
      },
      error: (err) => {
        this.signInError = true;
        console.error('Error signing in', err);
      },
    });
  }
}
