import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.html',
  styleUrls: ['./nav-menu.scss'],
})
export class NavMenu implements OnInit {
  menuGroups = [{
    label: 'Settings:',
    menuItems: [{
      label: 'Account settings',
      url: '/account-settings',
      icon: 'flask'
    }, {
      label: 'Map filter',
      url: '/map-filter',
      disabled: true,
      icon: 'wifi'
    }]
  }, {
    label: 'Parking:',
    menuItems: [{
      label: 'Parking history',
      url: '/parking-history',
      icon: 'paper-plane'
    }, {
      label: 'My subscriptions',
      url: '/my-subscriptions',
      disabled: true,
      icon: 'boat'
    }, {
      label: 'Messages',
      url: '/messages',
      disabled: true,
      icon: 'bluetooth'
    }, {
      label: 'Voucher codes',
      url: '/vocher-codes',
      disabled: true,
      icon: 'football'
    }]
  }, {
    label: 'Hosting:',
    menuItems: [{
      label: 'My hosted parks',
      url: '/my-hosted-parks',
      icon: 'beer'
    }, {
      label: 'Create park',
      url: '/create-park',
      icon: 'build'
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
