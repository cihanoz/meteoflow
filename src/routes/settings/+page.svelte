<script lang="ts">
  import { ArrowLeft } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { settings } from '$lib/stores/settings';

  // Subscribe to settings store
  let units: string;
  let language: string;
  let darkMode: boolean;

  settings.subscribe(value => {
    units = value.units;
    language = value.language;
    darkMode = value.darkMode;
  });

  function updateUnits(value: 'metric' | 'imperial') {
    settings.setUnits(value);
  }

  function updateLanguage(value: string) {
    settings.setLanguage(value);
  }

  function updateDarkMode(value: boolean) {
    settings.setDarkMode(value);
  }

  function goBack() {
    goto('/');
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
      <h1 class="text-2xl font-bold ml-2 dark:text-white transition-colors duration-200">Settings</h1>
    </div>

    <!-- Settings Sections -->
    <div class="space-y-6">
      <!-- Units -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
        <h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">Units</h2>
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
            <span class="dark:text-gray-200 transition-colors duration-200">Metric (°C)</span>
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
            <span class="dark:text-gray-200 transition-colors duration-200">Imperial (°F)</span>
          </label>
        </div>
      </div>

      <!-- Language -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
        <h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">Language</h2>
        <select
          value={language}
          on:change={(e) => updateLanguage(e.currentTarget.value)}
          class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      <!-- Theme -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow transition-colors duration-200">
        <h2 class="text-lg font-semibold mb-3 dark:text-white transition-colors duration-200">Theme</h2>
        <label class="flex items-center">
          <input
            type="checkbox"
            checked={darkMode}
            on:change={(e) => updateDarkMode(e.currentTarget.checked)}
            class="mr-2"
          />
          <span class="dark:text-gray-200 transition-colors duration-200">Dark Mode</span>
        </label>
      </div>

      <!-- Version Info -->
      <div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 transition-colors duration-200">
        MeteoFlow v0.0.1
      </div>
    </div>
  </div>
</div> 