export interface WeatherInterface {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_units:         CurrentUnits;
    current:               Current;
}

export interface Current {
    time:                 string;
    interval:             number;
    temperature_2m:       number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    rain:                 number;
    wind_speed_10m:       number;
    wind_direction_10m:   number;
}

export interface CurrentUnits {
    time:                 string;
    interval:             string;
    temperature_2m:       string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    rain:                 string;
    wind_speed_10m:       string;
    wind_direction_10m:   string;
}