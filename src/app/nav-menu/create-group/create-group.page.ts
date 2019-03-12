import { Component, OnInit } from '@angular/core';
import { Creating } from 'src/app/services/creating.service';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';
import { Church } from 'src/app/services/church.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {

  cellGroup: Church.CellGroup;

  dollars(v: number) { return v ? `$${v.toFixed(2)}` : ''; }

  get dataReady(): boolean {
    return this.cellGroup
      && this.cellGroup.address
      && this.cellGroup.lantitute !== 0 && this.cellGroup.longitude !== 0
      && this.cellGroup.bays > 0;
  }

  constructor(private creating: Creating,
    private accountService: AccountService,
    public nav: NavController,
    private church: Church.Service
  ) {
    this.cellGroup = creating.cellGroup;
  }

  ngOnInit(): void {
    this.cellGroup.accountId = this.accountService.currentUser.id;
  }

  createCellGroup() {
    if (!this.dataReady) {
      return;
    }
    this.cellGroup.availableBays = this.cellGroup.bays;
    this.church.cellGroups.upsert(this.cellGroup, () => {
      this.nav.navigateRoot('/home');
      this.creating.newCellGroup();
    });
  }
}
