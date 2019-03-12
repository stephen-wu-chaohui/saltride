import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigDataService, SigData } from './sig-data.service';
import { AppDataService } from './app-data.service';
import { PushingService } from './pushing.service';

export namespace Church {
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

  export class Church implements SigData {
    id: string;
    lastUpdated: number;
    deleted: boolean;

    name: string;
    address: string;
    latitude: number;
    longitude: number;
    avatar?: string;

    missionStatement: string[];
    photoIds?: string[];
  }

  export class CellGroup implements SigData {
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

  @Injectable({
    providedIn: 'root'
  })
  export class CellGroups extends SigDataService<CellGroup> {
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
    church = {
      id: '1',
      lastUpdated: 0,
      deleted: false,

      name: 'Abundant Life Church',
      address: '182 The Runway, Wigram, Christchurch 8042 New Zealand',
      latitude: -43.549917,
      longitude: 172.562886,

      missionStatement: [
        'to bring people to Jesus and membership in his family,',
        'develop them Christlike maturity, and equip them for their ministry in the church',
        'and life mission in the world, in order to magnify God’s name'
      ]
    };

    constructor(public cellGroups: CellGroups) {
      cellGroups.start();
    }
  }
}
