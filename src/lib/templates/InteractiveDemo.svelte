<script>
  import Hero from '../Hero.svelte';
  import { onMount } from 'svelte';
  /** @type {HTMLCanvasElement} */
  let canvas;
  /** @type {CanvasRenderingContext2D} */
  let ctx;
  onMount(() => {
    canvas.width = 400;
    canvas.height = 200;
    ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d'));
    ctx.fillStyle = 'var(--color-theme-1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });
  export let data = {
    hero: {
      title: 'Interactive Demo',
      subtitle: 'Engage visitors with live experiences.',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Try It',
      ctaLink: '#'
    }
  };
</script>

<Hero {...data.hero} />
<section class="py-16 text-center">
  <canvas bind:this={canvas} class="mx-auto rounded shadow"></canvas>
</section>
