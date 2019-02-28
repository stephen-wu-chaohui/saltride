import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup-finish',
  templateUrl: './signup-finish.page.html',
  styleUrls: ['./signup-finish.page.scss'],
})
export class SignupFinishPage implements OnInit {
  account: Account;

  firstNameErrors = '';
  lastNameErrors = '';
  phoneNumberErrors = '';

  constructor(private accountService: AccountService, private nav: NavController) {
    this.account = accountService.accountForSignup;
  }

  ngOnInit() {
  }

  clearErrors() {
    this.firstNameErrors = '';
    this.lastNameErrors = '';
    this.phoneNumberErrors = '';
  }

  onSubmit() {
    if (this.account.firstName.length === 0) {
      this.firstNameErrors = 'First name is required';
    } else if (this.account.lastName.length === 0) {
        this.lastNameErrors = 'Last name is required';
    } else {
      this.accountService.signUp().subscribe(result => {
        if (result === 'OK') {
          this.nav.navigateRoot('/home');
        }
      });
    }
  }
}
