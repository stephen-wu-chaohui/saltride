import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.html',
  styleUrls: ['./nav-menu.scss'],
})
export class NavMenu implements OnInit {
  menuGroups = [{
    label: 'Involving',
    menuItems: [{
      label: 'My Profile',
      url: '/account-settings',
      icon: 'flask'
    }, {
      label: 'My subscriptions',
      url: '/my-subscriptions',
      disabled: true,
      icon: 'wifi'
    }]
  }, {
    label: 'About Church',
    menuItems: [{
      label: 'Info',
      url: '/info',
      disabled: true,
      icon: 'paper-plane'
    }, {
      label: 'Sermons',
      url: '/sermons',
      disabled: true,
      icon: 'boat'
    }, {
      label: 'Messages',
      url: '/messages',
      disabled: true,
      icon: 'bluetooth'
    }]
  }, {
    label: 'Cell groups',
    menuItems: [{
      label: 'Our family',
      url: '/our-family',
      disabled: true,
      icon: 'beer'
    }, {
      label: 'Create group',
      url: '/create-group',
      icon: 'build'
    }]
  }];

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

}
