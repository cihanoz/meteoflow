import type { City, CurrentWeather, DayForecast, WeatherError } from '$lib/types/weather';
import { WeatherCondition } from '$lib/types/weather';
import weatherConditionMap from '$lib/mapping/weatherApi';
import { PUBLIC_WEATHER_API_KEY } from '$env/static/public';

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface WeatherCache {
    timestamp: number;
    current: CurrentWeather;
    forecast: DayForecast[];
}

export interface CitySearchResult {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
}

export class WeatherService {
    private static async fetchFromAPI(endpoint: string): Promise<any> {
        try {
            const response = await fetch(
                `${API_BASE_URL}${endpoint}&key=${PUBLIC_WEATHER_API_KEY}`
            );
            
            if (!response.ok) {
                console.log(response.statusText);
                throw new Error(`API Error: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            const weatherError: WeatherError = {
                message: error instanceof Error ? error.message : 'Unknown error occurred',
                code: 'API_ERROR',
                isNetworkError: error instanceof TypeError && error.message === 'Failed to fetch'
            };
            throw weatherError;
        }
    }

    static async getWeatherData(currentCity: CitySearchResult): Promise<{ current: CurrentWeather; forecast: DayForecast[] }> {
        console.log('Getting weather data for:', currentCity.name);
        
        const cityKey =  currentCity.name.split(' ').join('_');
        // Check local storage first
        const cachedData = localStorage.getItem(`weather_${cityKey}`);
        if (cachedData) {
            console.log('Found cached data');
            const parsed: WeatherCache = JSON.parse(cachedData);
            if (Date.now() - parsed.timestamp < CACHE_DURATION) {
                console.log('Using cached data');
                return {
                    current: {
                        ...parsed.current,
                        lastUpdated: new Date(parsed.current.lastUpdated)
                    },
                    forecast: parsed.forecast.map(day => ({
                        ...day,
                        date: new Date(day.date)
                    }))
                };
            }
        }

        // Fetch fresh data
        console.log('Fetching fresh data from API');
        const data = await this.fetchFromAPI(
            `/forecast.json?q=${encodeURIComponent(currentCity.name)}&days=3&aqi=no`
        );
        console.log('API response:', data);

        // Transform current weather
        const current: CurrentWeather = {
            temperature_c: data.current.temp_c,
            temperature_f: data.current.temp_f,
            condition: weatherConditionMap[data.current.condition.code as keyof typeof weatherConditionMap] || WeatherCondition.CLEAR,
            lastUpdated: new Date(data.current.last_updated)
        };

        // Transform forecast
        const forecast: DayForecast[] = data.forecast.forecastday.map((day: any) => ({
            date: new Date(day.date),
            dayTemp_c: day.day.maxtemp_c,
            dayTemp_f: day.day.maxtemp_f,
            nightTemp_c: day.day.mintemp_c,
            nightTemp_f: day.day.mintemp_f,
            condition: weatherConditionMap[day.day.condition.code as keyof typeof weatherConditionMap] || WeatherCondition.CLEAR
        }));

        // Cache the data
        const cacheData: WeatherCache = {
            timestamp: Date.now(),
            current,
            forecast
        };
        localStorage.setItem(`weather_${cityKey}`, JSON.stringify(cacheData));

        return { current, forecast };
    }

    static async searchCities(query: string): Promise<CitySearchResult[]> {
        if (!query.trim()) {
            return [];
        }

        try {
            const data = await this.fetchFromAPI(
                `/search.json?q=${encodeURIComponent(query)}`
            );
            return data as CitySearchResult[];
        } catch (error) {
            console.error('Error searching cities:', error);
            return [];
        }
    }
} 