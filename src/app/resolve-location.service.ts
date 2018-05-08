import { Injectable } from '@angular/core';
import { MeteoService } from './meteo.service';
import { Resolve } from '@angular/router';

@Injectable()
export class ResolveLocationService implements Resolve<any> {

  constructor(private ms: MeteoService) { }

  resolve() {
   // console.log('TOPOOOO', this.ms.meteoLocal());
    return this.ms.meteoLocal();
  }


}
