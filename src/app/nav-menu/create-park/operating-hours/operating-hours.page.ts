import { Component, OnInit } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';
import { NavController } from '@ionic/angular';
import { Parkable } from 'src/app/services/parkable.service';

@Component({
  selector: 'app-operating-hours',
  templateUrl: './operating-hours.page.html',
  styleUrls: ['./operating-hours.page.scss'],
})
export class OperatingHoursPage implements OnInit {
	carpark: Parkable.CarPark;
	twentyfourSeven = true;

  constructor(public carparkService: CarParkService, public nav: NavController) {
		this.carpark = carparkService.carpark;
	}

  ngOnInit() {
  }

}
