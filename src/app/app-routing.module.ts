import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'account', loadChildren: './account/welcome.module#WelcomePageModule' },
  { path: 'account-settings', loadChildren: './nav-menu/account-settings/account-settings.module#AccountSettingsPageModule' },
  { path: 'map-filter', loadChildren: './nav-menu/map-filter/map-filter.module#MapFilterPageModule' },
  { path: 'parking-history', loadChildren: './nav-menu/parking-history/parking-history.module#ParkingHistoryPageModule' },
  { path: 'my-subscriptions', loadChildren: './nav-menu/my-subscriptions/my-subscriptions.module#MySubscriptionsPageModule' },
  { path: 'messages', loadChildren: './nav-menu/messages/messages.module#MessagesPageModule' },
  { path: 'vocher-codes', loadChildren: './nav-menu/vocher-codes/vocher-codes.module#VocherCodesPageModule' },
  { path: 'my-hosted-parks', loadChildren: './nav-menu/my-hosted-parks/my-hosted-parks.module#MyHostedParksPageModule' },
  { path: 'create-park', loadChildren: './nav-menu/create-park/create-park.module#CreateParkPageModule' },
  { path: 'confirm-parking', loadChildren: './home/parking/confirm-parking/confirm-parking.module#ConfirmParkingPageModule' },
  { path: 'confirm-reservation', loadChildren: './home/parking/confirm-reservation/confirm-reservation.module#ConfirmReservationPageModule' },
  { path: 'pricing-model', loadChildren: './home/parking/pricing-model/pricing-model.module#PricingModelPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
