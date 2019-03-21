import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/map.module#MapPageModule' },
  { path: 'account', loadChildren: './account/welcome.module#WelcomePageModule' },
  { path: 'account-settings', loadChildren: './nav-menu/account-settings/account-settings.module#AccountSettingsPageModule' },
  { path: 'map-filter', loadChildren: './nav-menu/map-filter/map-filter.module#MapFilterPageModule' },
  { path: 'my-subscriptions', loadChildren: './nav-menu/my-subscriptions/my-subscriptions.module#MySubscriptionsPageModule' },
  { path: 'messages', loadChildren: './nav-menu/messages/messages.module#MessagesPageModule' },
  { path: 'my-profile', loadChildren: './nav-menu/my-profile/my-profile.module#MyProfilePageModule' },
  { path: 'info', loadChildren: './nav-menu/info/info.module#InfoPageModule' },
  { path: 'sermons', loadChildren: './nav-menu/sermons/sermons.module#SermonsPageModule' },
  { path: 'our-family', loadChildren: './nav-menu/our-family/our-family.module#OurFamilyPageModule' },
  { path: 'create-group', loadChildren: './nav-menu/create-group/create-group.module#CreateGroupPageModule' },
  { path: 'capacity', loadChildren: './nav-menu/create-group/capacity/capacity.module#CapacityPageModule' },
  { path: 'photos', loadChildren: './nav-menu/create-group/photos/photos.module#PhotosPageModule' },
  { path: 'vision-statement', loadChildren: './nav-menu/create-group/vision-statement/vision-statement.module#VisionStatementPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
