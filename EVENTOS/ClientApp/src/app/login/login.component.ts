import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};

  constructor(private accountService: AccountService, private router: Router) { }

  login() {
    this.accountService.login(this.user).subscribe(
      response => {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/events']);
      },
      error => {
        console.log('Login failed', error);
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
