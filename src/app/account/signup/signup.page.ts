import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string;
  phoneNumber: string;
  nameErrors = '';
  phoneNumberErrors = '';
  smsErrors = '';

  constructor(private accountService: AccountService, public nav: NavController) {
  }

  ngOnInit() {
  }

  clearErrors() {
    this.nameErrors = '';
    this.phoneNumberErrors = '';
  }

  onSubmit() {
    if (!this.name) {
      this.nameErrors = 'Name is required';
    } else if (!this.phoneNumber) {
        this.phoneNumberErrors = 'Phone number is required';
    } else {
      this.accountService.signUp(this.name, this.phoneNumber).subscribe(result => {
        this.nav.navigateRoot('/home');
      });
    }
  }

  onVerify() {
    this.accountService.getCode(this.phoneNumber).subscribe(result => {
    });
  }

}
