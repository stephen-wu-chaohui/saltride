import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import {  } from 'google-maps';
import { Coordinate, LocationService } from 'src/app/services/location.service';
import { Salt } from 'src/app/services/salt.service';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.page.html',
  styleUrls: ['./location-input.page.scss'],
})
export class LocationInputPage implements OnInit {
  center: Coordinate;
  public searchControl: FormControl;
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(public creating: Creating, public nav: NavController, location: LocationService, private ngZone: NgZone) {
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
              this.creating.cellGroup.address = place.formatted_address;
              this.creating.cellGroup.latitude = place.geometry.location.lat();
              this.creating.cellGroup.longitude = place.geometry.location.lng();
          } else {
            this.creating.cellGroup.address = '';
          }
        });
      });
  }

}
