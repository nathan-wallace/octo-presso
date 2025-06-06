<script>
  export let title;
  export let subtitle = '';
  export let image = '';
  export let ctaText = '';
  export let ctaLink = '#';
</script>

<section class="bg-gray-900 text-white">
  <div class="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-8">
    <div class="md:w-1/2 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">{title}</h1>
      {#if subtitle}
        <p class="text-xl mb-8 opacity-80">{subtitle}</p>
      {/if}
      {#if ctaText}
        <a href={ctaLink} class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">
          {ctaText}
        </a>
      {/if}
    </div>
    {#if image}
      <div class="md:w-1/2">
        <img class="rounded-xl shadow-xl w-full" src={image} alt={title} />
      </div>
    {/if}
  </div>
</section>
