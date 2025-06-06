<script>
  export const displayName = 'USDA Landing';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'USDA Open Source Services',
      subtitle: 'Empowering agriculture with secure, modern software.',
      image: 'https://images.unsplash.com/photo-1561473808-699bb252c79b?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Transform Operations',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Data-Driven Agriculture', text: 'Harness analytics to improve crop yields and food safety.' },
      { icon: '', title: 'Rural Connectivity', text: 'Solutions optimized for field work and remote teams.' },
      { icon: '', title: 'Sustainable Solutions', text: 'Technology that supports conservation and efficiency.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Grow your mission with open source.</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Get in Touch</a>
</section>
