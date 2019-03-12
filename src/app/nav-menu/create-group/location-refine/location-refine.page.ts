import { Component, OnInit, ViewChild } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';
import { Church } from 'src/app/services/church.service';

@Component({
  selector: 'app-location-refine',
  templateUrl: './location-refine.page.html',
  styleUrls: ['./location-refine.page.scss'],
})
export class LocationRefinePage implements OnInit {
  @ViewChild('map') mapElement;
	map: google.maps.Map;
	carpark: Church.CellGroup;

  constructor(public carparkService: Creating, public nav: NavController) {
		this.carpark = carparkService.cellGroup;
	}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const coords = new google.maps.LatLng(this.carparkService.cellGroup.lantitute, this.carparkService.cellGroup.longitude);
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
      this.carparkService.cellGroup.lantitute = $event.latLng.lat();
      this.carparkService.cellGroup.longitude = $event.latLng.lng();
      marker.setCenter($event.latLng);
    });
  }

}
