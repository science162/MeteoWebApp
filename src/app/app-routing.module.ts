import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CurrentComponent } from './current/current.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ResolveLocationService } from './resolve-location.service';


const METEO_ROUTER: Routes = [
  {path: '', component: CurrentComponent, resolve: {maMeteo: ResolveLocationService}},
  {path: 'meteo', component: MeteoComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(METEO_ROUTER)
],
exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor() {
 const meteoRouting: ModuleWithProviders = RouterModule.forRoot(METEO_ROUTER);
}

 }
