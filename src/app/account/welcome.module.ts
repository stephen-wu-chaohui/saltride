import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import { SignupPage } from './signup/signup.page';

const routes: Routes = [{
    path: 'welcome',
    component: WelcomePage,
  }, {
    path: 'signup',
    component: SignupPage,
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WelcomePage,
    SignupPage,
  ],
  exports: [WelcomePage]
})
export class WelcomePageModule {}
