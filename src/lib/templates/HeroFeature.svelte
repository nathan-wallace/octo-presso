<script>
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Product Landing',
      subtitle: 'Catchy tagline here.',
      image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Learn More',
      ctaLink: '#'
    },
    features: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18M6 5v14m12-14v14" /></svg>`,
        title: 'Fast',
        text: 'Optimized performance out of the box.'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" /></svg>`,
        title: 'Scalable',
        text: 'Grow without limits.'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" /></svg>`,
        title: 'Reliable',
        text: 'Built with best practices.'
      }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
