import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.html',
  styleUrls: ['./nav-menu.scss'],
})
export class NavMenu implements OnInit {
  menuGroups = [];

  constructor() { }

  ngOnInit() {
  }

}
