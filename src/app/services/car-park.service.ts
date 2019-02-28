import { Injectable } from '@angular/core';
import { Parkable } from './parkable.service';

@Injectable({
  providedIn: 'root'
})
export class CarParkService {
  carpark = new Parkable.CarPark();
  constructor() {
  }

  newCarPark(): any {
    delete this.carpark.accountPaid;
    delete this.carpark.address;
    delete this.carpark.availableBays;
    delete this.carpark.bays;
    delete this.carpark.hourlyPrice;
    delete this.carpark.dailyPrice;
    delete this.carpark.lantitute;
    delete this.carpark.longitude;
    delete this.carpark.operatingHours;
    delete this.carpark.name;
    delete this.carpark.parkingInstructions;
    delete this.carpark.photoIds;
  }
}
