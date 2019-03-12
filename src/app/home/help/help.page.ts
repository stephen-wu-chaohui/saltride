import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Church } from 'src/app/services/church.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public nav: NavController, public churchService: Church.Service) {
  }

  ngOnInit() {
  }

}
