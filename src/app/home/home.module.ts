import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MapComponent } from './map/map.component';
import { MarkerComponent } from './marker/marker.component';
import { HelpPage } from './help/help.page';
import { ParkingPage } from './parking/parking.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage },
      { path: 'help', component: HelpPage },
      { path: 'parking', component: ParkingPage },
    ]),
  ],
  declarations: [
    HomePage,
    HelpPage,
    ParkingPage,
    MapComponent,
    MarkerComponent
  ]
})
export class HomePageModule {}
