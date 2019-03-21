import { Component, OnInit, ViewChild } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';
import { Salt } from 'src/app/services/salt.service';

@Component({
  selector: 'app-location-refine',
  templateUrl: './location-refine.page.html',
  styleUrls: ['./location-refine.page.scss'],
})
export class LocationRefinePage implements OnInit {
  @ViewChild('map') mapElement;
  map: google.maps.Map;

  constructor(public creating: Creating, public nav: NavController) {
  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const coords = new google.maps.LatLng(this.creating.cellGroup.latitude, this.creating.cellGroup.longitude);
    const mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      panControl: false,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const marker = new google.maps.Circle({
      map: this.map,
      center: coords,
      clickable: false,
      radius: 3,
      fillColor: 'dodgerblue'
    });

    this.map.addListener('click', $event => {
      this.creating.cellGroup.latitude = $event.latLng.lat();
      this.creating.cellGroup.longitude = $event.latLng.lng();
      marker.setCenter($event.latLng);
    });
  }

}
