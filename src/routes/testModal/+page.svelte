<!-- <script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { progressBar, progress } from './progressBar.js'
  
    // $progress = tweened(0, {
    //   duration: 400,
    //   easing: cubicOut
    // });

    progressBar.set(true)
  
    function close() {
      progressBar.set(false)
    }
  </script>
  
{#if $progressBar}
<div class="fixed flex justify-center z-50 w-full top-1/3">
  <div class="bg-white border border-primary rounded-md shadow-lg w-8/12 md:w-6/12">

    <div class="flex justify-start py-6 border-b border-gray-300 mx-8">
      <h1 class="font-bold text-gray-600 text-xl">Hello</h1>
    </div>

    <p class="mx-8 my-16">This is a test modal</p>

    <p>Progress so far: {$progress}%</p>

    <div class="p-1 w-full border border-black rounded-full">
      <div class="w-{$progress} h-1 bg-red-400 transition-all duration-1000"></div>
    </div>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('0')}>
      0
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('1/6')}>
      1
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('2/6')}>
      2
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('3/6')}>
      3
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('4/6')}>
      4
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('5/6')}>
      5
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set('full')}>
      6
    </button>

    <div class="flex justify-center bg-gray-100 rounded-b-md py-4">
      <button on:click={close} class="py-2 px-6 border border-primary text-primary rounded-md hover:text-white hover:bg-primary">Close</button>
    </div>

  </div>
</div>
{/if} -->










<!-- <script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  function close() {
    console.log('close');
  }
</script>

<div class="fixed flex justify-center z-50 w-full top-1/3">
  <div class="bg-white border border-primary rounded-md shadow-lg w-8/12 md:w-6/12">

    <div class="flex justify-start py-6 border-b border-gray-300 mx-8">
      <h1 class="font-bold text-gray-600 text-xl">Hello</h1>
    </div>

    <p class="mx-8 my-16">This is a test modal</p>

    <p>Progress so far: {$progress * 100}%</p>

    <div class="border">
      <div style="width: {$progress * 100}%; background-color: orange; color: red;">&nbsp;</div>
    </div>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set(0)}>
      0%
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set(0.25)}>
      25%
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set(0.5)}>
      50%
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set(0.75)}>
      75%
    </button>

    <button class="p-4 m-4 bg-red-400" on:click={() => progress.set(1)}>
      100%
    </button>

    <div class="flex justify-center bg-gray-100 rounded-b-md py-4">
      <button on:click={close} class="py-2 px-6 border border-primary text-primary rounded-md hover:text-white hover:bg-primary">Close</button>
    </div>

  </div>
</div>

<style>
  .border {
    width: 100%;
    height: 20px;
    background-color: lightgray;
    overflow: hidden;
  }

  .border div {
    height: 100%;
  }
</style> -->
