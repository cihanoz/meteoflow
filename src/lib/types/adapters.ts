import type { CurrentWeather, DayForecast } from './weather';

export interface WeatherAdapter {
    getCurrentWeather(cityId: string): Promise<CurrentWeather>;
    getForecast(cityId: string): Promise<DayForecast[]>;
} 