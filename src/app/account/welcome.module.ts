import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { SignupFinishPage } from './signup-finish/signup-finish.page';

const routes: Routes = [{
    path: 'welcome',
    component: WelcomePage,
  }, {
    path: 'signup',
    component: SignupPage,
  }, {
    path: 'signup-finish',
    component: SignupFinishPage,
  }, {
    path: 'login',
    component: LoginPage,
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
		SignupFinishPage,
    LoginPage,
  ],
  exports: [WelcomePage]
})
export class WelcomePageModule {}
