import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParkingInstructionsPage } from './parking-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingInstructionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParkingInstructionsPage]
})
export class ParkingInstructionsPageModule {}
