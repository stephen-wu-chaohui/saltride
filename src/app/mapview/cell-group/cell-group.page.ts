import { Component, OnInit } from '@angular/core';
import { Salt } from 'src/app/services/salt.service';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { JoinGroupComponent } from './join-group/join-group.component';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-cell-group',
  templateUrl: './cell-group.page.html',
  styleUrls: ['./cell-group.page.scss'],
})
export class CellGroupPage implements OnInit {
  public cellGroup: Salt.CellGroup;
  public participate: Salt.Participate;
  public expanding = false;

  constructor(
    private users: AccountService,
    public nav: NavController,
    public modalController: ModalController,
    private navParams: NavParams,
    public participates: Salt.Participates
  ) {}

  ngOnInit() {
    this.cellGroup = this.navParams.get('cellGroup');
    if (!this.cellGroup) {
      this.nav.navigateRoot('/home');
    } else {
      if (!this.cellGroup.name) {
        this.cellGroup.name = 'New Group';
      }
      const currentUser = this.users.currentUser;
      if (currentUser) {
        this.participate = this.participates.data.find(p => p.discipleId === currentUser.id && p.cellGroupId === this.cellGroup.id);
      }
    }
  }

  async joinGroup() {
    const modal = await this.modalController.create({
      component: JoinGroupComponent,
      componentProps: { cellGroup: this.cellGroup, participate: this.participate }
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail && detail.data) {
         this.participate = detail.data;
         this.participates.upsert(this.participate);
       }
    });

    return await modal.present();
  }
}
