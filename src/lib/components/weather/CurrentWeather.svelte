<script lang="ts">
    import type { City, CurrentWeather } from '$lib/types/weather';
    import LoadingSpinner from '../ui/LoadingSpinner.svelte';
    import WeatherAnimation from './WeatherAnimation.svelte';
    import { isLoading } from '$lib/stores/loading';
	import DisplayTemp from '../ui/DisplayTemp.svelte';

    export let city: City;
    export let weather: CurrentWeather;

    $: formattedTime = weather?.lastUpdated?.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
</script>

<div class="relative min-h-[200px] p-8 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg">
    {#if $isLoading}
        <LoadingSpinner />
    {:else if weather}
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold m-0">{city.name}</h1>
            <p class="text-gray-600 dark:text-gray-400">{city.country}</p>
        </div>

        <div class="flex justify-center items-center gap-8">
            <WeatherAnimation condition={weather.condition} />
            <div class="text-6xl font-bold">
                <DisplayTemp tempC={weather.temperature_c} tempF={weather.temperature_f} />
            </div>
        </div>

        <div class="absolute bottom-4 right-4 text-sm opacity-70">
            Last updated: {formattedTime}
        </div>
    {/if}
</div> 