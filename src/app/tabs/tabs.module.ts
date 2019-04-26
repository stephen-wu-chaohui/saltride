import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'welcome', children: [{ path: '', loadChildren: '../account/welcome.module#WelcomePageModule'}] },
      { path: 'mapview', children: [{ path: '', loadChildren: '../mapview/mapview.module#MapPageModule'}] },
      { path: '', redirectTo: '/home/welcome', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
  exports: [RouterModule]
})
export class TabsPageModule {}
