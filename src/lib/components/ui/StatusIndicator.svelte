<script lang="ts">
    export let isOffline: boolean;
</script>

{#if isOffline}
    <div class="px-4 py-2 rounded-full text-sm bg-red-500/20 text-red-500 dark:text-red-400">
        Offline
    </div>
{/if} 