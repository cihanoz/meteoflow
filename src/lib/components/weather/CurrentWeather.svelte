<script lang="ts">
	import type { CurrentWeather, City } from '$lib/types/weather';
	import { formatTemperature, formatWindSpeed } from '$lib/utils/numberFormat';
	import { locale } from '$lib/i18n';
	import { settings } from '$lib/stores/settings';
	import LottiePlayer from '../ui/LottiePlayer.svelte';

	export let city: City;
	export let weather: CurrentWeather | undefined;
</script>

{#if weather}
	<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex justify-center items-center">
		<div class="flex justify-between items-start">
			<div class="flex flex-col items-center">
				<h2 class="text-2xl font-bold">{city.name}</h2>
				<p class="text-gray-500 dark:text-gray-400">{city.country}</p>
				<LottiePlayer fileName={weather.condition} />
				<p class="text-4xl font-bold mt-4">
					{formatTemperature(weather, $locale, $settings.units)}
				</p>
				<p class="text-gray-600 dark:text-gray-300 mt-2">
					{weather.condition}
				</p>
			</div>
		</div>
	</div>
{/if}
