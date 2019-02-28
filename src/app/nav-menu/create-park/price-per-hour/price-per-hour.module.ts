import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PricePerHourPage } from './price-per-hour.page';

const routes: Routes = [
  {
    path: '',
    component: PricePerHourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PricePerHourPage]
})
export class PricePerHourPageModule {}
