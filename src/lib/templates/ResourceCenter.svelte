<script>
  import Hero from '../Hero.svelte';
  export let data = {
    hero: {
      title: 'Download Center',
      subtitle: 'White papers, toolkits and more.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Browse Resources',
      ctaLink: '#'
    },
    resources: [
      { name: 'Style Guide', link: '#' },
      { name: 'Brand Toolkit', link: '#' },
      { name: 'Research Report', link: '#' }
    ]
  };
</script>

<Hero {...data.hero} />
<section class="py-16 max-w-4xl mx-auto">
  <ul class="list-disc pl-5">
    {#each data.resources as r}
      <li><a class="text-blue-600 underline" href={r.link}>{r.name}</a></li>
    {/each}
  </ul>
</section>
