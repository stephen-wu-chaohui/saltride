import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyHostedParksPage } from './my-hosted-parks.page';

const routes: Routes = [
  {
    path: '',
    component: MyHostedParksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyHostedParksPage]
})
export class MyHostedParksPageModule {}
