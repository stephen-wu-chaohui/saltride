import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarParkService } from 'src/app/services/car-park.service';

@Component({
  selector: 'app-price-per-hour',
  templateUrl: './price-per-hour.page.html',
  styleUrls: ['./price-per-hour.page.scss'],
})
export class PricePerHourPage implements OnInit {
  prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  dollars(v: number) { return v ? `$${v.toFixed(2)}` : ''; }

  constructor(public carparkService: CarParkService, public nav: NavController) { }

  ngOnInit() {
  }

  onClick(price) {
    this.carparkService.carpark.hourlyPrice = price;
  }

}
