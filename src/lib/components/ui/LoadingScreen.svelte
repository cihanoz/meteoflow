<script lang="ts">
    import LoadingSpinner from './LoadingSpinner.svelte';
</script>

<div class="fixed inset-0 flex items-center justify-center bg-gray-50 transition-colors duration-200">
    <div class="flex flex-col items-center gap-8">
        <img 
            src="/logo-meteoflow.png" 
            alt="MeteoFlow" 
            class="w-32 h-32"
        />
        <span class="text-gray-900 font-bold text-[1.4rem]">Meteo Flow</span>
        <LoadingSpinner size={40} />
    </div>
</div> 