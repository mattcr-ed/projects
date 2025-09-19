import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherInterface } from './weather.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,rain,wind_speed_10m,wind_direction_10m';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>(this.url);
  }
}
