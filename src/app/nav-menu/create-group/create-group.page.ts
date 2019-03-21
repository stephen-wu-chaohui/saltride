import { Component, OnInit } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';
import { Salt } from 'src/app/services/salt.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {

  get dataReady(): boolean {
    return this.creating.cellGroup
      && this.creating.cellGroup.address
      && this.creating.cellGroup.latitude !== 0 && this.creating.cellGroup.longitude !== 0
      && this.creating.cellGroup.capacity > 0;
  }

  constructor(public creating: Creating,
    public nav: NavController,
    private cellGroups: Salt.CellGroups
  ) {
  }

  ngOnInit(): void {
  }

  createCellGroup() {
    if (!this.dataReady) {
      return;
    }
    this.cellGroups.upsert(this.creating.cellGroup, () => {
      this.nav.navigateRoot('/home');
      this.creating.newCellGroup();
    });
  }
}
