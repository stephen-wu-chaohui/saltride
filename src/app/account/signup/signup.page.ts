import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  account: Account;

  retypedPassword = '';
  emailErrors = '';
  passwordErrors = '';
  retypedPasswordErrors = '';

  constructor(accountService: AccountService, public nav: NavController) {
    this.account = accountService.accountForSignup;
  }

  ngOnInit() {
  }

  clearErrors() {
    this.emailErrors = '';
    this.passwordErrors = '';
    this.retypedPasswordErrors = '';
  }

  onSubmit() {
    const re = /[^@]+@[^\.]+\..+/g;
    if (this.account.email.length === 0) {
      this.emailErrors = 'Email is required';
    } else if (!re.test(String(this.account.email).toLowerCase())) {
      this.emailErrors = 'Email format is not valid';
    } else if (this.account.password.length === 0) {
        this.passwordErrors = 'Password is required';
    } else if (this.account.password !== this.retypedPassword) {
      this.passwordErrors = 'Passwords do not match';
      this.retypedPasswordErrors = 'Passwords do not match';
    } else {
      this.nav.navigateForward('/account/signup-finish');
    }
  }

}
