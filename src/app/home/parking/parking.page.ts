import { Component, OnInit } from '@angular/core';
import { Parkable } from 'src/app/services/parkable.service';
import { Account, AccountService } from 'src/app/services/account.service';
import { ScenarioService } from 'src/app/services/scenario.service';
import * as moment from 'moment';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {
  host: Parkable.CarPark;
  order: Parkable.Parking;
  currentUser: Account;

  days = [];
  hourlyPrice = '';
  dailyPrice = '';

  expandAvailibility = false;
  startParkingTime: number;  // unix
  endParkingTime: number;
  timeElapsed = '';
  reservationCountdown: any;
  parkingCounter: any;
  countParkingMunites = 0;

  constructor(
    private scenario: ScenarioService,
    private parkableService: Parkable.Service,
    private accountService: AccountService,
    public alertController: AlertController,
    public nav: NavController
  ) {
    this.host = scenario.carpark;
    if (this.host) {
      parkableService.parkings.runAfterLoading(() => {
        this.order = parkableService.parkings.data.find(
          r => r.carParkId === this.host.id && r.accountId == accountService.currentUser.id && ['Ordered', 'Confirmed'].includes(r.state));
      });
    } else {
      this.order = <Parkable.Parking>scenario.order;
      parkableService.carParks.runAfterLoading(() => {
        this.host = parkableService.carParks.data.find(p => p.id === this.order.carParkId);
      });
    }

    const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const retArray =  dayNames.map((name, i) => ({ name, range: this.rangeOf(this.getTimeWindow(i))}));
    const sunday = retArray.pop();
    retArray.push(sunday);
    this.days = retArray;

    this.hourlyPrice = `$${this.host.hourlyPrice.toFixed(2)} NZD`;
    this.dailyPrice = `$${this.host.dailyPrice.toFixed(2)} NZD`;

    this.currentUser = this.accountService.currentUser;

  }

  get currentRange() {
    const today = moment().day();
    return this.rangeOf(this.getTimeWindow(today));
  }

  get parkingCharged() {

    const hrs = Math.floor((this.countParkingMunites + 45) / 60);
    let days = Math.floor(hrs / 24);
    let hrsInDay = hrs % 24;

    if (hrsInDay * this.host.hourlyPrice > this.host.dailyPrice) {
      days ++;
      hrsInDay = 0;
    }

    const total = days * this.host.dailyPrice + hrsInDay * this.host.hourlyPrice;

    return total;
  }

  get sessionStarted() {
    return !this.startParkingTime ? '' : moment(this.startParkingTime * 1000).format('DD/MM/YYYY hh.mma');
  }

  get sessionEnded() {
    return !this.endParkingTime ? 'Active' : moment(this.endParkingTime * 1000).format('DD/MM/YYYY hh.mma');
  }

  private startReservation() {
    this.prepareOrder('Ordered').then(ok => {
      if (ok) {
        const secElipsed = moment().unix() - this.order.lastUpdated;
        let minElipsed = Math.round(60 - secElipsed / 60);

        this.timeElapsed = `${minElipsed}mins Remaining`;
        this.reservationCountdown = setInterval(() => {
          minElipsed --;
          if (minElipsed === 0) {
            this.cancelReservation();
          }
          this.timeElapsed = `${minElipsed}mins Remaining`;
        }, 1000 * 60);
      }
    });
  }

  private async cancelReservation() {
    const alert = await this.alertController.create({
      header: 'End Reservation',
      subHeader: 'Subtitle',
      message: 'Please confirm that you would like to end your reservation',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            clearInterval(this.reservationCountdown);
            this.order.state = 'Cancelled';
            this.order.lastUpdated = moment().unix();
            this.parkableService.parkings.upsert(this.order);
          }
        }
      ]
    });
    await alert.present();
  }

  private haveProblem() {
    // chat window
  }

  private prepareOrder(newState: 'Ordered'|'Confirmed'): Promise<boolean> {
    if (this.order) {
      if (this.order.state === 'Ordered') {
        this.order.state = newState;
      }
      return Promise.resolve(this.order.state === newState);
    }

    const order = <Parkable.Parking>{
      id: this.order ? this.order.id : null,
      lastUpdated: moment().unix(),
      deleted: false,
      accountId: this.currentUser.id,

      carParkId: this.host.id,
      plateNumber: this.currentUser.plateNumbers,
      startTime: moment().unix(),
      state: newState,
    };
    this.parkableService.parkings.upsert(order, () => {
      this.order = order;
      this.scenario.order = order;
      return true;
    });
  }


  private startParking() {
    this.prepareOrder('Confirmed').then(ok => {
      if (ok) {
        clearInterval(this.reservationCountdown);
        this.startParkingTime = this.order.lastUpdated;

        const secElipsed = moment().unix() - this.startParkingTime;
        this.countParkingMunites = Math.round(secElipsed / 60);

        const setTimeElapsed = () => {
          const days = Math.floor(this.countParkingMunites / 60 / 24);
          const hrs = Math.floor(this.countParkingMunites / 60) % 24;
          const mins = Math.floor(this.countParkingMunites % 60);
          this.timeElapsed = (days > 0) ? `${days} Days ${hrs} Hours ${mins} mins Parking` : (hrs > 0) ?
             `${hrs} Hours ${mins} mins Parking` : `${mins} mins Parking`;
        };

        setTimeElapsed();
        this.parkingCounter = setInterval(() => {
          this.countParkingMunites ++;
          setTimeElapsed();
        }, 1000 * 60);
      }
    });
  }

  public async stopParking() {
    const alert = await this.alertController.create({
      header: 'End Parking',
      subHeader: 'Subtitle',
      message: 'Please confirm that you are to leave the park',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            clearInterval(this.parkingCounter);
            this.order.state = 'Done';
            this.order.lastUpdated = moment().unix();
            this.order.endTime = this.order.lastUpdated;
            this.order.total = this.parkingCharged;
            this.order.accountId = this.currentUser.id;
            this.parkableService.parkings.upsert(this.order);
            this.endParkingTime = this.order.lastUpdated;
          }
        }
      ]
    });
    await alert.present();

  }

  private getTimeWindow(weekday: number) {
    const availibility = this.host.operatingHours;
    const tw = (!availibility) ? null :
      (weekday >= availibility.length || !availibility[weekday]) ? { open: 0, close: 0} :
      availibility[weekday];
    return tw;
  }

  private rangeOf = function(tw: Parkable.TimeWindow) {
    const hrmin = function(minutes: number) {
      const hr = Math.floor(minutes / 60);
      const min = Math.floor(minutes % 60);
      return hr.toString() + ':' + min.toString().padStart(2, '0');
    };
    if (!tw) {
      return 'Open 24/7';
    } else if (tw.open === 0 && tw.close === 0) {
      return 'Not Available';
    } else if (tw.open === 0 && tw.close === 24 * 60) {
      return 'Available all day';
    } else {
      return `${hrmin(tw.open)} - ${hrmin(tw.close)}`;
    }
  };

  ngOnInit() {
    if (!this.order) {
      return;
    }
    if (this.order.state === 'Ordered') {
      this.startReservation();
    } else if (this.order.state === 'Confirmed') {
      this.startParking();
    }
  }

  closeDialog() {
    this.nav.back();
  }

  async openParkingConfirmation() {
    if (!this.order && this.host.availableBays <= 0) {
      return;
    }
    const alert = await this.alertController.create({
      header: 'Start Parking',
      subHeader: 'Subtitle',
      message: 'Are you sure to start parking?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.startParking();
          }
        }
      ]
    });
    await alert.present();
  }

  async openReservingConfirmation() {
    if (!this.order && this.host.availableBays <= 0) {
      return;
    }

    if (!this.order && this.host.availableBays <= 0) {
      return;
    }
    const alert = await this.alertController.create({
      header: 'Start Reservation',
      subHeader: 'Subtitle',
      message: 'Are you sure to start reservation?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.startReservation();
          }
        }
      ]
    });
    await alert.present();
  }
}
