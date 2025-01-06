export enum WeatherCondition {
    CLEAR = 'clear',
    CLOUDY = 'cloudy',
    FOG = 'fog',
    PARTLYCLOUDY = 'partly-cloudy',
    RAIN = 'rain',
    SNOW = 'snow',
    THUNDERRAIN = 'thunder-rain',
    THUNDER = 'thunder',
    DRIZZLE = 'drizzle',
    MIST = 'mist'
}

export interface City {
    id: string;
    name: string;
    country: string;
}

export interface CurrentWeather {
    temperature_c: number;
    temperature_f: number;
    condition: WeatherCondition;
    lastUpdated: Date;
}

export interface DayForecast {
    date: Date;
    dayTemp: number;
    nightTemp: number;
    condition: WeatherCondition;
}

export interface WeatherError {
    message: string;
    code: string;
    isNetworkError: boolean;
} 