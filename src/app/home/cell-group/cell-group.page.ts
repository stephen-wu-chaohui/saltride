import { Component, OnInit } from '@angular/core';
import { Church as Church } from 'src/app/services/church.service';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core';
import { JoinGroupComponent } from './join-group/join-group.component';

@Component({
  selector: 'app-cell-group',
  templateUrl: './cell-group.page.html',
  styleUrls: ['./cell-group.page.scss'],
})
export class CellGroupPage implements OnInit {
  private cellGroup: Church.CellGroup;
  public expanding = false;

  constructor(
    public nav: NavController,
    public modalController: ModalController,
    private navParams: NavParams,
  ) {}

  ngOnInit() {
    this.cellGroup = this.navParams.get('cellGroup');
    if (!this.cellGroup) {
      this.nav.navigateRoot('/home');
    } else if (!this.cellGroup.name || !this.cellGroup.name.length) {
      this.cellGroup.name = 'New Group';
    }
  }

  async joinGroup() {
    const modal = await this.modalController.create({
      component: JoinGroupComponent,
      componentProps: { cellGroup: this.cellGroup }
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
         console.log('The result:', detail.data);
       }
    });

    return await modal.present();
  }
}
