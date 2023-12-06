import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ArticuloComponent } from '../articulo/articulo.component';
import { TarjetaProductoComponent } from '../tarjeta-producto/tarjeta-producto.component';
import { ColeccionComponent } from '../coleccion/coleccion.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [BannerComponent, ArticuloComponent, ColeccionComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
