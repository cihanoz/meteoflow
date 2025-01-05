<script lang="ts">
    import type { DayForecast } from '$lib/types/weather';
    import DayForecastCard from './DayForecast.svelte';

    export let forecast: DayForecast[];
</script>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
    {#each forecast as day}
        <DayForecastCard {day} />
    {/each}
</div> 