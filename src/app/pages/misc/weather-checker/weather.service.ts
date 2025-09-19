import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherInterface } from './weather.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

  getWeather(): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>('https://api.open-meteo.com/v1/forecast?latitude=51.947&longitude=0.283&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,wind_speed_10m,wind_direction_10m');
  }
}
