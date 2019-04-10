import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuModule } from './nav-menu/nav-menu.module';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    NavMenuModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
