<script lang="ts">
  import "../app.css";
  import LoadingScreen from '$lib/components/ui/LoadingScreen.svelte';
  import { settings } from "$lib/stores/settings";
	import { browser } from "$app/environment";

  let isLoading = true;

  $: if ($settings.darkMode != undefined && $settings.darkMode != null && browser) {
    document.documentElement.classList.toggle('dark', $settings.darkMode);
    isLoading = false;
  }
</script>

{#if isLoading}
  <LoadingScreen />
{:else}
  <div class="transition-colors duration-200">
    <slot />
  </div>
{/if}
