import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ScenarioService } from 'src/app/services/scenario.service';
import { Parkable } from 'src/app/services/parkable.service';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {
  @Input() map: google.maps.Map;
  @Input() carpark: Parkable.CarPark;

  constructor(public nav: NavController, public scenario: ScenarioService) { }

  ngOnInit() {
    new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(this.carpark.lantitute, this.carpark.longitude),
      clickable: true,
      label: {text: this.carpark.availableBays.toString(), color: 'white'},
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        fillColor: 'dodgerblue',
        strokeOpacity: 1,
        strokeWeight: 1,
        strokeColor: 'dodgerblue',
        scale: 13
      },
    }).addListener('click', () => {
      this.scenario.carpark = this.carpark;
      this.nav.navigateForward('/home/parking');
    });
  }
}
