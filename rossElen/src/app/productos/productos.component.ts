import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { TarjetaProductoComponent } from '../tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SliderComponent, TarjetaProductoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
