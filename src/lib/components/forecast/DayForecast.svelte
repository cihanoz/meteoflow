<script lang="ts">
    import type { DayForecast } from '$lib/types/weather';
    import WeatherAnimation from '../weather/WeatherAnimation.svelte';

    export let day: DayForecast;

    $: formattedDate = day.date.toLocaleDateString([], { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    });
</script>

<div class="p-4 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm flex flex-col items-center gap-2">
    <div class="text-sm opacity-90">{formattedDate}</div>
    <WeatherAnimation condition={day.condition} small />
    <div class="flex gap-4">
        <span class="font-bold">{Math.round(day.dayTemp)}°</span>
        <span class="opacity-70">{Math.round(day.nightTemp)}°</span>
    </div>
</div> 