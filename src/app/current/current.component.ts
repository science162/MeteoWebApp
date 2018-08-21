import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';
import { CurrentWeather } from '../current-weather';
import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  maMeteo: CurrentWeather;
  tempMax: Number;
  tempMin: Number;
  temp: Number;

  constructor(private meteoService: MeteoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {maMeteo: CurrentWeather}) => {
        this.maMeteo = data.maMeteo;
        this.tempMax = parseFloat(this.maMeteo.tempMax) - 32;
        this.tempMin = parseFloat(this.maMeteo.tempMin) - 32;
        this.temp = parseFloat(this.maMeteo.temp) - 32;
        // console.log(' fgkhkdvs', data.maMeteo);
      }
    );
  }
  onSubmit(weatherForm: NgForm) {
    this.meteoService.annotherCityWeather(weatherForm.value.city).subscribe(
      (data) => {
        this.maMeteo = new CurrentWeather(data.name,
                                          data.main.temp,
                                          data.weather[0].icon,
                                          data.weather[0].description,
                                          data.main.temp_max,
                                          data.main.temp_min);
        console.log('DATAAA', data);
      }
    );
console.log(weatherForm);
}

}
