export enum WeatherCondition {
    CLEAR = 'clear',
    CLOUDS = 'clouds',
    RAIN = 'rain',
    SNOW = 'snow',
    THUNDERSTORM = 'thunderstorm',
    DRIZZLE = 'drizzle',
    MIST = 'mist'
}

export interface City {
    id: string;
    name: string;
    country: string;
}

export interface CurrentWeather {
    temperature: number;
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