import { Component, OnInit } from '@angular/core';

import { Church as Church } from '../services/church.service';
import { Coordinate, LocationService } from '../services/location.service';
import {  } from 'google-maps';
import { AccountService } from '../services/account.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  center: Coordinate;
  pendingOrder: Church.Parking;

  makerLabel(cellGroup: Church.CellGroup) {
    return cellGroup.availableBays.toString();
  }

  constructor(
    public nav: NavController,
    public accountService: AccountService,
    public church: Church.Service,
    public locationService: LocationService,
  ) {
    this.locationService.relocate();
  }

  ngOnInit() {
    this.accountService.loadCurrentUser().subscribe();
  }

  clickLogo() {
    this.nav.navigateForward('/home/help');
  }
}
