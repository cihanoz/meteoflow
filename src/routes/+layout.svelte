<script lang="ts">
  import { locale } from '$lib/i18n';
  import { isRTL } from '$lib/utils/rtl';
  import "../app.css";
  import "../lib/styles/rtl.css";
  import LoadingScreen from '$lib/components/ui/LoadingScreen.svelte';
  import { settings } from "$lib/stores/settings";
	import { browser } from "$app/environment";
	import { isLoading } from "$lib/stores/loading";

  // Update HTML lang attribute when locale changes
  $: if (browser) {
    document.documentElement.lang = $locale;
  }

  $: if ($settings.darkMode != undefined && browser) {
        document.documentElement.classList.toggle('dark', $settings.darkMode);
    }
</script>

<div 
  dir={isRTL($locale) ? 'rtl' : 'ltr'} 
  class="min-h-screen transition-colors duration-200"
>
    {#if $isLoading}
        <LoadingScreen />
    {/if}
    <slot />
</div>

<style>
    :global([dir="rtl"]) {
        /* Base RTL styles */
        text-align: right;
    }

    :global([dir="rtl"] .icon) {
        transform: scaleX(-1);
    }
</style>
