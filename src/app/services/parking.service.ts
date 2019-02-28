import { Injectable } from '@angular/core';
import { Parkable } from './parkable.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  pending: Parkable.Parking;

  get carpark() {
    if (!this.pending) {
      return null;
    }
    return this.carparks.data.find(p => p.id === this.pending.carParkId);
  }

  constructor(private carparks: Parkable.CarParkService, parkings: Parkable.ParkingService) {
    carparks.runAfterLoading(() => parkings.runAfterLoading(() => {
        this.pending = parkings.data.find(v =>
          (v.state === 'Ordered' || v.state === 'Confirmed') && carparks.data.find(p => p.id === v.carParkId) != null
        );
      }));
  }
}
