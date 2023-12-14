import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { VideoComponent } from './video/video.component';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';
import { ProductosComponent } from './productos/productos.component';
import { MarcasPropiasComponent } from './marcas-propias/marcas-propias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidoComponent } from './pedido/pedido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, InicioComponent, NosotrosComponent, DistribuidoresComponent, FooterComponent, ProductosComponent, MarcasPropiasComponent, ContactoComponent, PedidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rossElen';
}
