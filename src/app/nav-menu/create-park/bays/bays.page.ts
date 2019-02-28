import { Component, OnInit } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bays',
  templateUrl: './bays.page.html',
  styleUrls: ['./bays.page.scss'],
})
export class BaysPage implements OnInit {

	constructor(public carparkService: CarParkService, public nav: NavController) { }

  ngOnInit() {
  }

}
