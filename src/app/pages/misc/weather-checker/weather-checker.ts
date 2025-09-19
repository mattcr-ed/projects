import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherInterface } from './weather.interface';

@Component({
  selector: 'app-weather-checker',
  imports: [],
  templateUrl: './weather-checker.html',
  styleUrl: './weather-checker.css'
})
export class WeatherChecker {
  weather!: WeatherInterface;

  constructor(private weatherService: WeatherService) {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      res => {
        this.weather = res;
      }
    );
  }
}
