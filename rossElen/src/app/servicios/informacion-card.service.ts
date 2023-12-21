import { Injectable } from '@angular/core';
import { TARJETAS } from '../../assets/json/informacion.card';

@Injectable({
  providedIn: 'root'
})
export class InformacionCardService {
  getInformacionCard() {
    return TARJETAS
  }
  constructor() { }
}
