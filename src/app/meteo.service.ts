import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-spacing
import  '../../node_modules/rxjs/add/operator/map';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class MeteoService  {

currentWeater: CurrentWeather;
location;

constructor(private http: Http) { }

meteoLocal() {

      return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      // tslint:disable-next-line:max-line-length
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20f324b831eda160155fb027bd993a70&units=imperial`).map((response: Response) =>
      response.json()).toPromise().then(
        (data) => {
          this.currentWeater = new CurrentWeather(data.name,
                                                  data.main.temp,
                                                  data.weather[0].icon,
                                                  data.weather[0].description,
                                                  data.main.temp_max,
                                                  data.main.temp_min);
            res(this.currentWeater);
            // console.log('hierrr', this.currentWeater);
         }
        );
      });
    });
  }

annotherCityWeather(city: string) {
 return this.http
.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20f324b831eda160155fb027bd993a70&units=imperial`)
.map((response: Response) => response.json());
}

fiveDayForecast(city: string) {
// tslint:disable-next-line:max-line-length
return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=20f324b831eda160155fb027bd993a70&units=imperial`).map((response: Response) => response.json());

}

mapyourforecast() {
  // tslint:disable-next-line:max-line-length
return this.http.get(`https://tile.openweathermap.org/map/temp_new/5/10/10.png?appid=20f324b831eda160155fb027bd993a70&units=imperial`).map((response: Response) => response.json());

}

}
