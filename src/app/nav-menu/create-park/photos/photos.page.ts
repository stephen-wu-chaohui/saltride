import { Component, OnInit } from '@angular/core';
import { CarParkService } from 'src/app/services/car-park.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  constructor(public carparkService: CarParkService, public nav: NavController) { }

  ngOnInit() {
  }

}
