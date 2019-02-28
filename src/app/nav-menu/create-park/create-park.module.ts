import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateParkPage } from './create-park.page';

const routes: Routes = [
  { path: '', component: CreateParkPage },
  { path: 'location-input', loadChildren: './location-input/location-input.module#LocationInputPageModule' },
  { path: 'price-per-hour', loadChildren: './price-per-hour/price-per-hour.module#PricePerHourPageModule' },
  { path: 'price-per-day', loadChildren: './price-per-day/price-per-day.module#PricePerDayPageModule' },
  { path: 'bays', loadChildren: './bays/bays.module#BaysPageModule' },
  { path: 'operating-hours', loadChildren: './operating-hours/operating-hours.module#OperatingHoursPageModule' },
  { path: 'photos', loadChildren: './photos/photos.module#PhotosPageModule' },
  { path: 'parking-instructions', loadChildren: './parking-instructions/parking-instructions.module#ParkingInstructionsPageModule' },
  { path: 'account-paid', loadChildren: './account-paid/account-paid.module#AccountPaidPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CreateParkPage,
  ]
})
export class CreateParkPageModule {}
