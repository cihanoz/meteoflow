import type CurrentWeather from "$lib/components/weather/CurrentWeather.svelte";

export function formatNumber(
    number: number, 
    locale: string, 
    options: Intl.NumberFormatOptions = {}
): string {
    return new Intl.NumberFormat(locale, options).format(number);
}

export function formatTemperature(weather: CurrentWeather, locale: string, unit: 'metric' | 'imperial'): string {
    console.log(weather);
    const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    };
    
    const temp = unit === 'metric' ? weather.temperature_c : weather.temperature_f;
    const formattedTemp = formatNumber(temp, locale, options);
    const symbol = unit === 'metric' ? '°C' : '°F';
    
    // Handle RTL languages
    return locale === 'ar' ? `${symbol}${formattedTemp}` : `${formattedTemp}${symbol}`;
}

export function formatWindSpeed(
    speed: number, 
    locale: string, 
    unit: 'metric' | 'imperial'
): string {
    const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    };
    
    const formattedSpeed = formatNumber(speed, locale, options);
    const unit_symbol = unit === 'metric' ? 'km/h' : 'mph';
    
    return `${formattedSpeed} ${unit_symbol}`;
} 