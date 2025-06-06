<script>
  export const displayName = 'Customizable Demo';
  import Hero from '../Hero.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  /** @type {HTMLCanvasElement} */
  let canvas;
  /** @type {CanvasRenderingContext2D} */
  let ctx;
  const color = writable('#ff0000');
  const size = writable(50);

  onMount(() => {
    canvas.width = 400;
    canvas.height = 200;
    ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d'));
    draw();
  });

  $: draw();

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = $color;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, $size, 0, Math.PI * 2);
    ctx.fill();
  }

  export let data = {
    hero: {
      title: 'Customizable Demo',
      subtitle: 'Adjust color and size interactively.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Play',
      ctaLink: '#'
    }
  };
</script>

<Hero {...data.hero} />
<section class="py-16 text-center">
  <div class="space-y-4">
    <canvas bind:this={canvas} class="mx-auto border rounded shadow"></canvas>
    <div class="flex justify-center items-center gap-4">
      <label class="flex items-center gap-2">
        <span>Color:</span>
        <input type="color" bind:value={$color} />
      </label>
      <label class="flex items-center gap-2">
        <span>Size:</span>
        <input type="range" min="10" max="100" bind:value={$size} />
      </label>
    </div>
  </div>
</section>
