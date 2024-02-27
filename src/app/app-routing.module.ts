import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'acceso',
    loadChildren: () => import('./pages/acceso/acceso.module').then( m => m.AccesoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'vinculacion',
    loadChildren: () => import('./pages/vinculacion/vinculacion.module').then( m => m.VinculacionPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./pages/dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'calificar',
    loadChildren: () => import('./pages/calificar/calificar.module').then( m => m.CalificarPageModule)
  },
  {
    path: 'dispositivo/:dispositivo',
    loadChildren: () => import('./pages/dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'desincronizados',
    loadChildren: () => import('./pages/desincronizados/desincronizados.module').then( m => m.DesincronizadosPageModule)
  },
  {
    path: 'ocultos',
    loadChildren: () => import('./pages/ocultos/ocultos.module').then( m => m.OcultosPageModule)
  },
  {
    path: 'estadisticas/:dispositivo',
    loadChildren: () => import('./pages/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./pages/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
