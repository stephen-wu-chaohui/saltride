import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OperatingHoursPage } from './operating-hours.page';

const routes: Routes = [
  {
    path: '',
    component: OperatingHoursPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OperatingHoursPage]
})
export class OperatingHoursPageModule {}
