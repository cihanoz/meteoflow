<script lang="ts">
    import { WeatherCondition } from '$lib/types/weather';
    import type { CurrentWeather, DayForecast, City } from '$lib/types/weather';
    import CurrentWeatherCard from '$lib/components/weather/CurrentWeather.svelte';
    import ForecastList from '$lib/components/forecast/ForecastList.svelte';
    import StatusIndicator from '$lib/components/ui/StatusIndicator.svelte';
    import { Settings } from 'lucide-svelte';
    import { goto } from '$app/navigation';
    
    // Dummy data
    const currentCity: City = {
        id: '1',
        name: 'London',
        country: 'UK'
    };

    const currentWeather: CurrentWeather = {
        temperature: 18,
        condition: WeatherCondition.CLEAR,
        lastUpdated: new Date()
    };

    const forecast: DayForecast[] = [
        {
            date: new Date(),
            dayTemp: 20,
            nightTemp: 12,
            condition: WeatherCondition.THUNDERRAIN
        },
        {
            date: new Date(Date.now() + 86400000),
            dayTemp: 22,
            nightTemp: 14,
            condition: WeatherCondition.CLOUDY
        },
        {
            date: new Date(Date.now() + 172800000),
            dayTemp: 19,
            nightTemp: 11,
            condition: WeatherCondition.RAIN
        }
    ];

    const isOffline = false;
    const isLoading = false;

    function goToSettings() {
        goto('/settings');
    }
</script>

<div class="min-h-screen p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <div class="container max-w-2xl mx-auto">
        <header class="flex justify-end items-center gap-4 py-4">
            <StatusIndicator {isOffline} />
            <button
                on:click={goToSettings}
                class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Settings"
            >
                <Settings size={24} class="text-gray-700 dark:text-gray-300" />
            </button>
        </header>

        <main class="flex flex-col gap-8">
            <CurrentWeatherCard 
                city={currentCity}
                weather={currentWeather}
                {isLoading}
            />

            <ForecastList forecast={forecast} />
        </main>
    </div>
</div>

