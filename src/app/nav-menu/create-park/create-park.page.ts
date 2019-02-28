import { Component, OnInit } from '@angular/core';
import { Parkable } from 'src/app/services/parkable.service';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';
import { CarParkService } from 'src/app/services/car-park.service';

@Component({
  selector: 'app-create-park',
  templateUrl: './create-park.page.html',
  styleUrls: ['./create-park.page.scss'],
})
export class CreateParkPage implements OnInit {
  carpark: Parkable.CarPark;

  dollars(v: number) { return v ? `$${v.toFixed(2)}` : ''; }

  get dataReady(): boolean {
    return this.carpark && this.carpark.address && this.carpark.lantitute !== 0 && this.carpark.longitude !== 0
      && this.carpark.hourlyPrice > 0 && this.carpark.dailyPrice > 0 && this.carpark.bays > 0;
  }

  constructor(private carparkService: CarParkService, private accountService: AccountService, public nav: NavController, private parkableService: Parkable.Service) {
    this.carpark = carparkService.carpark;
  }

  ngOnInit(): void {
    this.carpark.accountId = this.accountService.currentUser.id;
  }

  createCarPark() {
    if (!this.dataReady) {
      return;
    }
    this.carpark.availableBays = this.carpark.bays;
    this.parkableService.carParks.upsert(this.carpark, () => {
      this.nav.navigateRoot('/home');
      this.carparkService.newCarPark();
    });
  }
}
