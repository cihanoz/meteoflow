<script lang="ts">
	import { ArrowLeft, Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { settings } from '$lib/stores/settings';
	import languages from '$lib/data/weatherapi/languages.json';
	import { t, locale, translations } from '$lib/i18n';
	import { WeatherService } from '$lib/services/weather';
	import type { CitySearchResult } from '$lib/services/weather';

	// Subscribe to settings store
	let units: string;
	let language: string;
	let darkMode: boolean;

	settings.subscribe((value) => {
		units = value.units;
		language = value.language;
		darkMode = value.darkMode;
	});

	// Get language name in current language and English
	function getLanguageLabel(lang: { name: string; iso: string }) {
		const currentTranslation = translations[language]?.languages?.[lang.iso];
		const englishTranslation = translations['en']?.languages?.[lang.iso];
		return currentTranslation || englishTranslation || lang.name;
	}

	function updateUnits(value: 'metric' | 'imperial') {
		settings.setUnits(value);
	}

	function updateLanguage(value: string) {
		settings.setLanguage(value);
		locale.set(value); // Update the locale when language changes
	}

	function updateDarkMode(value: boolean) {
		settings.setDarkMode(value);
	}

	function goBack() {
		goto('/');
	}

	let searchQuery = '';
	let searchResults: CitySearchResult[] = [];
	let isSearching = false;
  let isFetchingWeather = false;

	async function setCurrentCity(city: CitySearchResult) {
		settings.setCurrentCity(city);
		isFetchingWeather = true;
		try {
			await WeatherService.getWeatherData({
				id: city.id.toString(),
				name: city.name,
				country: city.country
			});
		} catch (error) {
			console.error('Error fetching weather data:', error);
		} finally {
			isFetchingWeather = false;
		}
		searchResults = [];
		searchQuery = '';
	}

	async function searchCities(query: string) {
		if (query.length < 3) {
			return;
		}
		isSearching = true;
		try {
			searchResults = await WeatherService.searchCities(query);
		} finally {
			isSearching = false;
		}
	}
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
	<div class="max-w-2xl mx-auto p-4">
		<!-- Header -->
		<div class="flex items-center mb-6">
			<button
				on:click={goBack}
				class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
			>
				<ArrowLeft class="w-6 h-6 dark:text-white transition-colors duration-200" />
			</button>
			<h1 class="text-2xl font-bold ml-2 dark:text-white transition-colors duration-200">
				{$t.settings.title}
			</h1>
		</div>

		<!-- Settings Sections -->
		<div class="space-y-6">
			<!-- Cities -->
			<div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
				<h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">
					{$t.settings.cities.label}
				</h2>
				<div class="flex gap-4">
          <div class="relative w-full">
            <input
              type="text"
              bind:value={searchQuery}
              on:input={() => searchCities(searchQuery)}
              placeholder="Search for a city..."
              class="w-full p-2 pl-2 pr-10 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search class="w-5 h-5 text-gray-400" />
            </div>
          </div>
				</div>
        <div class="mt-4">
          {#if isFetchingWeather}
            <p class="text-gray-500 dark:text-white transition-colors duration-200">Fetching weather data...</p>
          {:else if searchResults.length > 0}
						<ul>
							{#each searchResults as city}
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<li
									on:click={() => setCurrentCity(city)}
									class="cursor-pointer text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 transition-colors duration-200"
								>
									{city.name} ({city.country})
								</li>
							{/each}
						</ul>
					{/if}
        </div>
        <h2 class="mt-4 text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">
					{$t.settings.currentCity.label}
				</h2>
        <div class="text-gray-500 dark:text-white transition-colors duration-200">
          {#if $settings.currentCity}
            <p>{$settings.currentCity.name} ({$settings.currentCity.country})</p>
          {/if}
        </div>
			</div>

			<!-- Units -->
			<div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
				<h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">
					{$t.settings.units.label}
				</h2>
				<div class="flex gap-4">
					<label class="flex items-center">
						<input
							type="radio"
							name="units"
							value="metric"
							checked={units === 'metric'}
							on:change={() => updateUnits('metric')}
							class="mr-2"
						/>
						<span class="dark:text-gray-200 transition-colors duration-200"
							>{$t.settings.units.metric}</span
						>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="units"
							value="imperial"
							checked={units === 'imperial'}
							on:change={() => updateUnits('imperial')}
							class="mr-2"
						/>
						<span class="dark:text-gray-200 transition-colors duration-200"
							>{$t.settings.units.imperial}</span
						>
					</label>
				</div>
			</div>

			<!-- Language -->
			<div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
				<h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">
					{$t.settings.language}
				</h2>
				<select
					value={language}
					on:change={(e) => updateLanguage(e.currentTarget.value)}
					class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
				>
					{#each languages as lang}
						<option value={lang.iso}>{getLanguageLabel(lang)}</option>
					{/each}
				</select>
			</div>

			<!-- Theme -->
			<div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
				<h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">
					{$t.settings.theme.label}
				</h2>
				<label class="flex items-center">
					<input
						type="checkbox"
						checked={darkMode}
						on:change={(e) => updateDarkMode(e.currentTarget.checked)}
						class="mr-2"
					/>
					<span class="dark:text-gray-200 transition-colors duration-200"
						>{$t.settings.theme.darkMode}</span
					>
				</label>
			</div>

			<!-- Version Info -->
			<div
				class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 transition-colors duration-200"
			>
				{$t.settings.version}
			</div>
		</div>
	</div>
</div>
