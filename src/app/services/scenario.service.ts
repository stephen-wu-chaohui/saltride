import { Injectable } from '@angular/core';
import { Parkable } from './parkable.service';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {
  carpark: Parkable.CarPark = null;
  order: Parkable.Parking = null;

  constructor() { }
}
