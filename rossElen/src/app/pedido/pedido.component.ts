import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { TablaProductoComponent } from '../tabla-producto/tabla-producto.component';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [BannerComponent, TablaProductoComponent],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

}
