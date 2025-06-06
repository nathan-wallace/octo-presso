<script>
  export const displayName = 'Associations Landing';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Association Technology Partners',
      subtitle: 'Streamline member services with flexible open source tools.',
      image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Enhance Engagement',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Custom Portals', text: 'Tailored member experiences across devices.' },
      { icon: '', title: 'Event Management', text: 'Integrated solutions for conferences and webinars.' },
      { icon: '', title: 'Data Insights', text: 'Analytics to help grow and retain membership.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Elevate your association with open source.</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Learn More</a>
</section>
