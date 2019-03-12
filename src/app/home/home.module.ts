import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MapComponent } from './map/map.component';
import { HelpPage } from './help/help.page';
import { CellMarkerComponent } from './cell-marker/cell-marker.component';
import { CellGroupPage } from './cell-group/cell-group.page';
import { JoinGroupComponent } from './cell-group/join-group/join-group.component';
import { ChurchMarkerComponent } from './church-marker/church-marker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage },
      { path: 'help', component: HelpPage },
    ]),
  ],
  declarations: [
    HomePage,
    HelpPage,
    MapComponent,
    CellMarkerComponent,
    ChurchMarkerComponent,
    CellGroupPage,
    JoinGroupComponent,
  ],
  entryComponents: [
    CellGroupPage,
    JoinGroupComponent,
  ]
})
export class HomePageModule {}
