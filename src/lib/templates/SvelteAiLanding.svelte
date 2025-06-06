<script>
  export const displayName = 'Svelte + AI Landing';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Svelte & AI',
      subtitle: 'Build reactive apps supercharged with artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1538899411-528f4176c095?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Discover More',
      ctaLink: '#'
    },
    features: [
      {
        icon: '',
        title: 'Reactive Framework',
        text: 'Svelte offers a lightning-fast developer experience with minimal overhead.'
      },
      {
        icon: '',
        title: 'AI Integrations',
        text: 'Connect intelligent models to automate workflows and personalize content.'
      },
      {
        icon: '',
        title: 'Marketing Agility',
        text: 'Deploy campaigns quickly using flexible, component-based templates.'
      }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Explore templates built with SvelteKit</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Get Started</a>
</section>
