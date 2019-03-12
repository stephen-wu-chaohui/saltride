import { Injectable } from '@angular/core';
import { Church } from './church.service';

@Injectable({
  providedIn: 'root'
})
export class Creating {
	cellGroup = new Church.CellGroup();

  constructor() {}

  newCellGroup() {
    delete this.cellGroup.accountPaid;
    delete this.cellGroup.address;
    delete this.cellGroup.availableBays;
    delete this.cellGroup.bays;
    delete this.cellGroup.hourlyPrice;
    delete this.cellGroup.dailyPrice;
    delete this.cellGroup.lantitute;
    delete this.cellGroup.longitude;
    delete this.cellGroup.operatingHours;
    delete this.cellGroup.name;
    delete this.cellGroup.parkingInstructions;
    delete this.cellGroup.photoIds;
  }
}
