import { Component } from '@angular/core';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ArticuloComponent,],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
