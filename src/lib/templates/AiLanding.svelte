<script>
  export const displayName = 'AI Capabilities';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Artificial Intelligence Solutions',
      subtitle: 'Automate, analyze, and engage at scale.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'See the Power',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Automation', text: 'Streamline workflows with intelligent decision making.' },
      { icon: '', title: 'Insights', text: 'Leverage data-driven predictions to drive marketing.' },
      { icon: '', title: 'Personalization', text: 'Deliver content that adapts to each user in real time.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Elevate campaigns with AI</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Learn More</a>
</section>
