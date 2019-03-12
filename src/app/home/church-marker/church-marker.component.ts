import { Component, OnInit, Input } from '@angular/core';
import { Church } from 'src/app/services/church.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-church-marker',
  templateUrl: './church-marker.component.html',
  styleUrls: ['./church-marker.component.scss']
})
export class ChurchMarkerComponent implements OnInit {
  @Input() map: google.maps.Map;
  @Input() church: Church.Church;
  @Input() color = 'purple';
  @Input() scale = 15;
  @Input() fillOpacity = 0.75;

  constructor(public nav: NavController) { }

  ngOnInit() {
    new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(this.church.latitude, this.church.longitude),
      clickable: true,
      label: {text: 'C', color: 'white'},
      icon:
      {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: this.fillOpacity,
        fillColor: this.color,
        strokeOpacity: 1,
        strokeWeight: 1,
        strokeColor: this.color,
        scale: this.scale
      },
    }).addListener('click', () => {
      this.nav.navigateForward('/home/help');
    });
  }

}
