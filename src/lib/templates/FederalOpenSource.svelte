<script>
  export const displayName = 'Federal Open Source Solutions';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Open Source for Federal Agencies',
      subtitle: 'Modern, secure solutions tailored for government missions.',
      image: 'https://images.unsplash.com/photo-1581093588401-22c1d34b014d?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Explore Services',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Compliance-Ready', text: 'Built to meet federal standards from FISMA to FedRAMP.' },
      { icon: '', title: 'Open Source Experts', text: 'Leverage community-driven innovation without vendor lock-in.' },
      { icon: '', title: 'Agile Delivery', text: 'Rapid iterations ensure your mission stays on schedule.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Ready to modernize your agency?</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
