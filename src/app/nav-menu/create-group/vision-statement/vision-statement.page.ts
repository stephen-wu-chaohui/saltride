import { Component, OnInit } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { NavController } from '@ionic/angular';
import { Church } from 'src/app/services/church.service';

@Component({
  selector: 'app-vision-statement',
  templateUrl: './vision-statement.page.html',
  styleUrls: ['./vision-statement.page.scss'],
})
export class VisionStatementPage implements OnInit {
	cellGroup: Church.CellGroup;

  constructor(public creating: Creating, public nav: NavController) {
		this.cellGroup = creating.cellGroup;
	}

  ngOnInit() {
		this.cellGroup = this.creating.cellGroup;
  }

}
