<script lang="ts">
  import "../app.css";
  import LoadingScreen from '$lib/components/ui/LoadingScreen.svelte';
  import { settings } from "$lib/stores/settings";
	import { browser } from "$app/environment";
	import { isLoading } from "$lib/stores/loading";

    $: if ($settings.darkMode != undefined && browser) {
        document.documentElement.classList.toggle('dark', $settings.darkMode);
    }
</script>

<div class="transition-colors duration-200">
    {#if $isLoading}
        <LoadingScreen />
    {/if}
    <slot />
</div>
