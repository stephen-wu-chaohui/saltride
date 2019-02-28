import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import {  } from 'google-maps';
import { Coordinate, LocationService } from 'src/app/services/location.service';
import { Parkable } from 'src/app/services/parkable.service';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.page.html',
  styleUrls: ['./location-input.page.scss'],
})
export class LocationInputPage implements OnInit {
  carpark: Parkable.CarPark;
  center: Coordinate;
  public searchControl: FormControl;
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(carparkService: CarParkService, public nav: NavController, location: LocationService,
    private ngZone: NgZone) {
      this.carpark = carparkService.carpark;
      this.center = location.currentLocation;
    }

  ngOnInit() {
    this.searchControl = new FormControl();

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, { types: ['address'] });
      const geolocation = new google.maps.LatLng(this.center.latitude, this.center.longitude);
      autocomplete.setBounds(new google.maps.Circle({	center: geolocation, radius: 100000 }).getBounds());
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place = autocomplete.getPlace();
          console.log(place);
          // verify result
          if (place.geometry) {
              this.carpark.address = place.formatted_address;
              this.carpark.lantitute = place.geometry.location.lat();
              this.carpark.longitude = place.geometry.location.lng();
          } else {
            this.carpark.address = '';
          }
        });
      });
  }

}
