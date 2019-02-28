import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  constructor(public accountService: AccountService, private nav: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.nav.navigateRoot('/account/welcome');
    this.accountService.logout();
  }
}
