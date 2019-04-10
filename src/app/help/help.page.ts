import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Salt } from 'src/app/services/salt.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public nav: NavController, public churchService: Salt.Service) {
  }

  ngOnInit() {
  }

}
