import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { MeteoService } from '../meteo.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  constructor(private ms: MeteoService) { }

  cityForecast: Forecast[] = new Array();
  forecastForm: FormGroup;

  ngOnInit() {
    this.forecastForm = new FormGroup(
      {forecastCity: new FormControl('Bandjoun')}
    );
  }

  onSubmit() {
    this.cityForecast.splice(0, this.cityForecast.length);
    this.ms.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe(
      (data) => {
        for (let i = 0; i < data.list.length; i += 8) {
          const temporary = new Forecast(
              data.list[i].dt_txt,
              data.list[i].weather[0].icon,
              data.list[i].main.temp_max,
              data.list[i].main.temp_min);
          this.cityForecast.push(temporary);
        }
      }
    );

  }

}
