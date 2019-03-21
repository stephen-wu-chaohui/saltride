import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Salt } from 'src/app/services/salt.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent {
  cellGroup: Salt.CellGroup;
  name = '';
  phone = '';
  needRide = false;
  nameErrors = '';
  phoneErrors = '';

  constructor(private users: AccountService,
    public modalController: ModalController,
    private navParams: NavParams
  ) {
  }

  ionViewWillEnter() {
    this.cellGroup = this.navParams.get('cellGroup');
    if (!this.cellGroup) {
      alert('Programming error, please restart the app');
    } else {
      if (this.users.currentUser) {
        this.name = this.users.currentUser.preferName;
        this.phone = this.users.currentUser.phoneNumber;
      }
    }
  }

  async myDismiss() {
    const result: Date = new Date();
    await this.modalController.dismiss(result);
  }

  clearErrors() {
    this.phoneErrors = '';
    this.nameErrors = '';
  }

  ClickOK() {
    this.users.signUp(this.name, this.phone).subscribe(
      user => {
        const participate: Salt.Participate = {
          churchId: this.cellGroup.churchId,
          cellGroupId: this.cellGroup.id,
          deleted: false,
          lastUpdated: 0,
          keywords: '',
          discipleId: user.id,
          title: 'New',
          statement: '',
          from: new Date()
        };
        this.modalController.dismiss(participate);
      }
    );
  }

  getCode() {
    this.users.getCode(this.phone).subscribe();
  }
}
