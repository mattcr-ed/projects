import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-checker',
  imports: [],
  templateUrl: './weather-checker.html',
  styleUrl: './weather-checker.css'
})
export class WeatherChecker {
  temp = 0;
  constructor(private weatherservice: WeatherService) { }

  callAPI() {
    this.getWeather();
    console.log(this.temp);
  }

  getWeather() {
    let res;
    this.weatherservice.getWeather().subscribe({
      next: (data) => {
        console.log(data);
        this.temp = data.current.temperature_2m;
      },
    });
  }
}
