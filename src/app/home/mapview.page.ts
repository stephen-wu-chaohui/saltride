import { Component, OnInit } from '@angular/core';

import { Salt } from '../services/salt.service';
import { Coordinate, LocationService } from '../services/location.service';
import {  } from 'google-maps';
import { AccountService } from '../services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-map-page',
  templateUrl: 'mapview.page.html',
  styleUrls: ['mapview.page.scss'],
})


export class MapViewPage {
  center: Coordinate;

  makerLabel(cellGroup: Salt.CellGroup) {
    return cellGroup.capacity.toString();
  }

  constructor(
    public nav: NavController,
    public accountService: AccountService,
    public church: Salt.Service,
    public locationService: LocationService,
  ) {
    this.locationService.relocate();
  }

  clickLogo() {
    this.nav.navigateForward('/home/help');
  }
}
