import { Component, OnInit } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';
import { Salt } from 'src/app/services/salt.service';

@Component({
  selector: 'app-vision-statement',
  templateUrl: './vision-statement.page.html',
  styleUrls: ['./vision-statement.page.scss'],
})
export class VisionStatementPage implements OnInit {
	cellGroup: Salt.CellGroup;

  constructor(public creating: Creating, public nav: NavController) {
		this.cellGroup = creating.cellGroup;
	}

  ngOnInit() {
		this.cellGroup = this.creating.cellGroup;
  }

}
