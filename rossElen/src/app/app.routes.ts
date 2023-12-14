import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';
import { MarcasPropiasComponent } from './marcas-propias/marcas-propias.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidoComponent } from './pedido/pedido.component';

export const routes: Routes = [
{
    path: "index",
    component: InicioComponent
},
{
    path: "nosotros",
    component: NosotrosComponent
},
{
    path: "distribuidores",
    component: DistribuidoresComponent
},
{
    path: "marcas-propias",
    component: MarcasPropiasComponent
},
{
    path: "productos",
    component: ProductosComponent 
},
{
    path: "contacto",
    component: ContactoComponent
},
{
    path: "pedido",
    component: PedidoComponent
},
{
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
}

];
