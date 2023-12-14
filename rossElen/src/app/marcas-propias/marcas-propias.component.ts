import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ColeccionComponent } from '../coleccion/coleccion.component';

@Component({
  selector: 'app-marcas-propias',
  standalone: true,
  imports: [BannerComponent, ColeccionComponent],
  templateUrl: './marcas-propias.component.html',
  styleUrl: './marcas-propias.component.css'
})
export class MarcasPropiasComponent {

}
