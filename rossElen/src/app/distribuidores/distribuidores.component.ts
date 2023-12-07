import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ArticuloComponent } from '../articulo/articulo.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { TarjetaProductoComponent } from '../tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-distribuidores',
  standalone: true,
  imports: [BannerComponent, ArticuloComponent, FormularioComponent, TarjetaProductoComponent],
  templateUrl: './distribuidores.component.html',
  styleUrl: './distribuidores.component.css'
})
export class DistribuidoresComponent {

}
