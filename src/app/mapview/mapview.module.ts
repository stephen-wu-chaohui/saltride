import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MapViewPage } from './mapview.page';
import { MapComponent } from './map/map.component';
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
      { path: '', component: MapViewPage },
    ]),
  ],
  declarations: [
    MapViewPage,
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
export class MapPageModule {}
