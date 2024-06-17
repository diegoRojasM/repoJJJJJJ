import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) { }

  register() {
    this.accountService.register(this.user).subscribe(
      response => {
        console.log('Registration successful');
        this.router.navigate(['/']);
      },
      error => {
        console.log('Registration failed', error);
        this.errorMessage = error.error.message || 'Registration failed';
      }
    );
  }
}
