import { Component, OnInit } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  constructor(public carparkService: Creating, public nav: NavController) { }

  ngOnInit() {
  }

}
