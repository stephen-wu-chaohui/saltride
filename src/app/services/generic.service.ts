import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AppDataService } from './app-data.service';

namespace AA {
  export interface SigData {
    id: string;
    lastUpdated: number;	// unix time
    deleted: boolean;
  }

  export class SigAction<T extends SigData> {
    verb: 'get'|'post'|'put'|'delete';
    items: T[];
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GlobalBuffer<T extends SigData> {
    data: T[];
    ev: EventEmitter<SigAction<T>>;
    update: () => any;
    isLoading: boolean;
    lastUpdated: number;

    constructor(private httpClient: HttpClient, private appConfig: AppDataService, private ngZone: NgZone) {

    }
  }
}
