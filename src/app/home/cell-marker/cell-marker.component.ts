import { Component, OnInit, Input } from '@angular/core';
import { Church as Church } from 'src/app/services/church.service';
import { NavController, ModalController } from '@ionic/angular';
import { CellGroupPage } from '../cell-group/cell-group.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-cell-marker',
  templateUrl: './cell-marker.component.html',
  styleUrls: ['./cell-marker.component.scss']
})
export class CellMarkerComponent implements OnInit {
  @Input() map: google.maps.Map;
  @Input() cellGroup: Church.CellGroup;
  @Input() color = 'dodgerblue';
  @Input() scale = 13;
  @Input() fillOpacity = 1;

  constructor(
    public nav: NavController,
    public modalController: ModalController
   ) { }

  ngOnInit() {
    new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(this.cellGroup.lantitute, this.cellGroup.longitude),
      clickable: true,
      label: {text: this.cellGroup.availableBays.toString(), color: 'white'},
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: this.fillOpacity,
        fillColor: this.color,
        strokeOpacity: 1,
        strokeWeight: 1,
        strokeColor: this.color,
        scale: this.scale
      },
    }).addListener('click',   async () => {
      const modal = await this.modalController.create({
        component: CellGroupPage,
        componentProps: { cellGroup: this.cellGroup },
        cssClass: 'modal-css'
      });
      modal.onDidDismiss().then((detail: OverlayEventDetail) => {
         if (detail !== null) {
           console.log('The result:', detail.data);
         }
      });
      return await modal.present();
    });
  }
}
