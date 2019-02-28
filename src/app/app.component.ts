import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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
