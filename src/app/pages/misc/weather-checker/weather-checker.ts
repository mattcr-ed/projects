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
  protected weather!: WeatherInterface;
  protected latBox: any;
  protected longBox: any;
  protected isError = false;


  constructor(private weatherService: WeatherService) {
    //Default with Greenwich coords
    this.getWeather(51.5, 0.1);
  }

  ngOnInit() {
    this.latBox = document.getElementById('user-latitude');
    this.longBox = document.getElementById('user-longitude');
  }

  getWeather(lat: number, long: number) {
    this.weatherService.getWeather(lat, long).subscribe(
      res => {
        this.weather = res;
      }
    );
  }

  userSubmit() {
    let userLat = this.latBox.value;
    let userLong = this.longBox.value;
    console.log("Latitude: " + userLat + ", Longitude: " + userLong);
    if ((userLat >= -90 && userLat <= 90) && 
        (userLong >= -180 && userLong <= 180)) {
      this.isError = false;
      this.getWeather(this.latBox.value, this.longBox.value);
    } else {
      this.isError = true;
    }
  }
}
