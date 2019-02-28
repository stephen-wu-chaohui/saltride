import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailOrUsername = 'stephen.wu.chaohui@gmail.com';
  password = 'wzhwzh1019';
  loginResult = '';

  constructor(private accountService: AccountService, public nav: NavController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.accountService.login(this.emailOrUsername, this.password).subscribe(ok => {
      if (ok) {
        this.nav.navigateRoot('/home');
      }
    });
  }
}
