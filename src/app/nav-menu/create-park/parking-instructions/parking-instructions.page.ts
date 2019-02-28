import { Component, OnInit } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parking-instructions',
  templateUrl: './parking-instructions.page.html',
  styleUrls: ['./parking-instructions.page.scss'],
})
export class ParkingInstructionsPage implements OnInit {

  constructor(public carparkService: CarParkService, public nav: NavController) { }

  ngOnInit() {
  }

}
