import { Component, OnInit, ViewChild } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';
import { NavController } from '@ionic/angular';
import { Parkable } from 'src/app/services/parkable.service';

@Component({
  selector: 'app-location-refine',
  templateUrl: './location-refine.page.html',
  styleUrls: ['./location-refine.page.scss'],
})
export class LocationRefinePage implements OnInit {
  @ViewChild('map') mapElement;
	map: google.maps.Map;
	carpark: Parkable.CarPark;

  constructor(public carparkService: CarParkService, public nav: NavController) {
		this.carpark = carparkService.carpark;
	}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const coords = new google.maps.LatLng(this.carparkService.carpark.lantitute, this.carparkService.carpark.longitude);
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
      this.carparkService.carpark.lantitute = $event.latLng.lat();
      this.carparkService.carpark.longitude = $event.latLng.lng();
      marker.setCenter($event.latLng);
    });
  }

}
