import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ArticuloComponent } from '../articulo/articulo.component';
import { VideoComponent } from '../video/video.component';
import { TarjetaProductoComponent } from '../tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SliderComponent, ArticuloComponent, VideoComponent, TarjetaProductoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
