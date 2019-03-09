import { Component, OnInit } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';

import { Parkable } from '../services/parkable.service';
import { Coordinate, LocationService } from '../services/location.service';
import {  } from 'google-maps';
import { AccountService } from '../services/account.service';
import { NavController } from '@ionic/angular';
import { ScenarioService } from '../services/scenario.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  center: Coordinate;
  pendingOrder: Parkable.Parking;

  makerLabel(carPark: Parkable.CarPark) {
    return carPark.availableBays.toString();
  }

  constructor(
    public nav: NavController,
    public accountService: AccountService,
    public parkableService: Parkable.Service,
    public locationService: LocationService,
    public scenario: ScenarioService
  ) {
    this.locationService.relocate();
    const updatePendingParking = () => {
      this.pendingOrder = !accountService.currentUser ? null
       : parkableService.parkings.data.find(p => p.state === 'Confirmed' && p.accountId == accountService.currentUser.id);
    };
    updatePendingParking();
    setInterval(updatePendingParking, 5000);
  }

  ngOnInit() {
    this.accountService.loadCurrentUser().subscribe(v => {
      if (!this.accountService.currentUser) {
        this.nav.navigateRoot('/account/welcome');
      }
    });
  }

  openPending() {
    this.scenario.order = this.pendingOrder;
    this.nav.navigateForward('/home/parking');
  }

  clickLogo() {
    this.nav.navigateForward('/home/help');
  }
}
