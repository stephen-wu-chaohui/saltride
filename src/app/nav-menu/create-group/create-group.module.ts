import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateGroupPage } from './create-group.page';

const routes: Routes = [
  { path: '', component: CreateGroupPage },
  { path: 'location-input', loadChildren: './location-input/location-input.module#LocationInputPageModule' },
  { path: 'capacity', loadChildren: './capacity/capacity.module#CapacityPageModule' },
  { path: 'photos', loadChildren: './photos/photos.module#PhotosPageModule' },
  { path: 'vision-statement', loadChildren: './vision-statement/vision-statement.module#VisionStatementPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateGroupPage]
})
export class CreateGroupPageModule {}
