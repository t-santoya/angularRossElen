import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { DatosContactoComponent } from '../datos-contacto/datos-contacto.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [BannerComponent, DatosContactoComponent, FormularioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
