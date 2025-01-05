export type Units = 'metric' | 'imperial';
export type WeatherProvider = 'openweather' | 'weatherapi';

export interface Config {
    apiRefreshRate: number;         // milliseconds
    apiRetryInterval: number;       // milliseconds
    weatherAdapter: WeatherProvider;
    defaultUnits: Units;
    defaultLanguage: string;
}

export const DEFAULT_CONFIG: Config = {
    apiRefreshRate: 60 * 60 * 1000,  // 1 hour
    apiRetryInterval: 5 * 60 * 1000, // 5 minutes
    weatherAdapter: 'openweather',
    defaultUnits: 'metric',
    defaultLanguage: 'en'
}; 