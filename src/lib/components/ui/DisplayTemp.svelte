<script lang="ts">
	import { settings } from "$lib/stores/settings";

    export let tempC: number;   
    export let tempF: number;

    console.log(tempC, tempF);
</script>

{#if $settings.units == "metric"}
    <span class="font-bold">{Math.round(tempC)}°</span>
{:else}
    <span class="font-bold">{Math.round(tempF)}°</span>
{/if}