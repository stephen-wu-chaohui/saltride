import { Component } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { Church } from 'src/app/services/church.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent {
  cellGroup: Church.CellGroup;
  nameErrors = '';
  name = '';
  phoneErrors = '';
  phone = '';
  needRide = false;

  constructor(users: AccountService,
    private modalController: ModalController,
    private navParams: NavParams,
    public nav: NavController
  ) {
    if (users.currentUser) {
      this.name = users.currentUser.firstName;
      this.phone = users.currentUser.phoneNumber;
    }
  }

  ionViewWillEnter() {
    this.cellGroup = this.navParams.get('cellGroup');
  }

  async myDismiss() {
    const result: Date = new Date();
    await this.modalController.dismiss(result);
  }

  clearErrors() {
    this.phoneErrors = '';
    this.nameErrors = '';
  }
}
