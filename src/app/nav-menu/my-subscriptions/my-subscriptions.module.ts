import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MySubscriptionsPage } from './my-subscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: MySubscriptionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MySubscriptionsPage]
})
export class MySubscriptionsPageModule {}
