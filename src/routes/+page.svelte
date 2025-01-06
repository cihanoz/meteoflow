<script lang="ts">
    import { onMount } from 'svelte';
    import { WeatherService } from '$lib/services/weather';
    import type { CurrentWeather, DayForecast, City } from '$lib/types/weather';
    import CurrentWeatherCard from '$lib/components/weather/CurrentWeather.svelte';
    import ForecastList from '$lib/components/forecast/ForecastList.svelte';
    import StatusIndicator from '$lib/components/ui/StatusIndicator.svelte';
    import { Settings } from 'lucide-svelte';
    import { goto } from '$app/navigation';
    import { isLoading } from '$lib/stores/loading';
	import { browser } from '$app/environment';
    
    let currentCity: City = {
        id: '1',
        name: 'London',
        country: 'UK'
    };

    let currentWeather: CurrentWeather;
    let forecast: DayForecast[] = [];
    let isOffline = browser && !navigator.onLine;
    let error: string | null = null;

    onMount(async () => {
        // Listen for online/offline events
        window.addEventListener('online', () => isOffline = false);
        window.addEventListener('offline', () => isOffline = true);

        try {
            isLoading.set(true);  // Set loading at start of fetch
            console.log('Fetching weather data...');
            const { current, forecast: forecastData } = await WeatherService.getWeatherData(currentCity);
            console.log('Weather data received:', current);
            currentWeather = current;
            forecast = forecastData;
        } catch (err) {
            error = err instanceof Error ? err.message : 'Failed to load weather data';
            console.error('Error:', error);
        } finally {
            isLoading.set(false);
        }
    });

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
            {#if error}
                <div class="p-4 bg-red-100 dark:bg-red-900 rounded-lg text-red-700 dark:text-red-100">
                    {error}
                </div>
            {/if}

            <CurrentWeatherCard 
                city={currentCity}
                weather={currentWeather}
            />

            <ForecastList {forecast} />
        </main>
    </div>
</div>

