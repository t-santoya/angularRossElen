import { Component } from '@angular/core';
import { InformacionCardService } from '../servicios/informacion-card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  constructor (private informacionCardService:InformacionCardService){

  }
  get data(){
    return this.informacionCardService.getInformacionCard()
  }
}
