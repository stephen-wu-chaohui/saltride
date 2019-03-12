import { Component, OnInit } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.page.html',
  styleUrls: ['./capacity.page.scss'],
})
export class CapacityPage implements OnInit {

  constructor(public creating: Creating, public nav: NavController) { }

  ngOnInit() {
  }

}
