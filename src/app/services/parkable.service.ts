import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigDataService, SigData } from './sig-data.service';
import { AppDataService } from './app-data.service';
import { PushingService } from './pushing.service';

export namespace Parkable {
  export class TimeWindow {
    open: number; // minutes from midnight
    close: number; // minutes from midnight, 0-0 means unavailable, 0-60*24 means fullday
  }

  export class AccountPaid {
    firstName: string;
    lastName: string;
    dateOfBirth: string;	// ISO 8601
    address: string;
    postCode: string;
    bankAccount: string;
  }

  export class CarPark implements SigData {
    id: string;
    lastUpdated: number;
    deleted: boolean;

    accountId: number;
    name: string;
    address: string;
    lantitute: number;
    longitude: number;
    avatar: string;
    bays: number;

    operatingHours: TimeWindow[];		// null means 24*7, or should have 7 days from Sunday to Saturday
    hourlyPrice: number;	// in NZD
    dailyPrice: number;		// in NZD
    parkingInstructions: string;
    availableBays: number;
    photoIds: string[];

    accountPaid?: AccountPaid;
  }

  export class Parking implements SigData {
    id?: string;
    lastUpdated: number;
    deleted: boolean;

    carParkId: string;
    accountId: number;
    plateNumber: string;
    customerComment?: string;
    startTime: number;
    endTime?: number;
    total: number;

    state: ''|'Ordered'|'Confirmed'|'Cancelled'|'Done';
  }

  export class ParkingCount implements SigData {
    id?: string;
    lastUpdated: number;
    deleted: boolean;

    occupied: number;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CarParkService extends SigDataService<CarPark> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'CarParks', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ParkingService extends SigDataService<Parking> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'Parkings', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class Service {
    constructor(public carParks: CarParkService, public parkings: ParkingService) {
    }
  }
}
