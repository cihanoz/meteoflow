<script lang="ts">
    import type { WeatherCondition } from '$lib/types/weather';

    export let condition: WeatherCondition;
    export let small = false;
</script>

<div class="weather-icon" class:small>
    <!-- Placeholder for weather icon/animation -->
    {condition}
</div>

<style>
    .weather-icon {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
    }

    .small {
        width: 50px;
        height: 50px;
        font-size: 0.8rem;
    }
</style> 