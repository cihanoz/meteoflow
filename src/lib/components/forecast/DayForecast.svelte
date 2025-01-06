<script lang="ts">
	import { settings } from '$lib/stores/settings';
    import type { DayForecast } from '$lib/types/weather';
	import DisplayTemp from '../ui/DisplayTemp.svelte';
    import WeatherAnimation from '../weather/WeatherAnimation.svelte';

    export let day: DayForecast;

    console.log(day);

    $: formattedDate = day.date.toLocaleDateString([], { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    });
</script>

<div class="p-4 rounded-lg bg-white/10 dark:bg-gray-300/10 backdrop-blur-sm flex flex-col items-center gap-2 shadow-lg">
    <div class="text-sm opacity-90">{formattedDate}</div>
    <WeatherAnimation condition={day.condition} small />
    <div class="flex gap-4">
        <span class="font-bold"><DisplayTemp tempC={day.dayTemp_c} tempF={day.dayTemp_f} /></span>
        <span><DisplayTemp tempC={day.nightTemp_c} tempF={day.nightTemp_f} /></span>
    </div>
</div> 