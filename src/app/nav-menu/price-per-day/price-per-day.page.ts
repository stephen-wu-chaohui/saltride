import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Creating } from 'src/app/services/creating.service';

@Component({
  selector: 'app-price-per-day',
  templateUrl: './price-per-day.page.html',
  styleUrls: ['./price-per-day.page.scss'],
})
export class PricePerDayPage implements OnInit {
  prices = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  dollars(v: number) { return v ? `$${v.toFixed(2)}` : ''; }

  constructor(public carparkService: Creating, public nav: NavController) { }

  ngOnInit() {
  }

  onClick(price) {
    this.carparkService.cellGroup.dailyPrice = price;
  }

}
