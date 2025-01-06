<script lang="ts">
  import { onMount } from 'svelte';

  export let fileName: string;
  console.log(fileName);
  let container: HTMLElement;

onMount(() => {
    if (typeof window.lottie !== 'undefined') {
        window.lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: `/lottie/${fileName}.json`
        });
    }
})
</script>

<div bind:this={container}></div>