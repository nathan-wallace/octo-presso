<script>
  export const displayName = 'Product Overview';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Product Overview',
      subtitle: 'Technical highlights and specs.',
      image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Get Started',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Speed', text: 'Benchmarks that impress.' },
      { icon: '', title: 'Security', text: 'Enterprise-grade protection.' },
      { icon: '', title: 'Integrations', text: 'Connect to your favorite tools.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
