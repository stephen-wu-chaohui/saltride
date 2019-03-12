import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
