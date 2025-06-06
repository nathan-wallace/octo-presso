<script>
  export const displayName = 'Svelte Capabilities';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Svelte for Modern Web Apps',
      subtitle: 'Ship faster with a truly reactive framework.',
      image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Learn Svelte',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'No Virtual DOM', text: 'Compile-time optimizations for unbeatable performance.' },
      { icon: '', title: 'Concise Components', text: 'Write less code and achieve more with built-in reactivity.' },
      { icon: '', title: 'Great Developer Experience', text: 'Enjoy first-class tooling with hot module reloading.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Ready to build with Svelte?</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Start Coding</a>
</section>
