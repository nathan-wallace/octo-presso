<script>
  export const displayName = 'HHS Landing';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'HHS Digital Transformation',
      subtitle: 'Modernize public health platforms with open source technology.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee5a?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Start Your Project',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Interoperable Systems', text: 'Streamline data exchange across agencies.' },
      { icon: '', title: 'Compliance Ready', text: 'Security standards for HIPAA and federal mandates.' },
      { icon: '', title: 'Scalable Architecture', text: 'Cloud-native deployments for nationwide reach.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">See how open source accelerates health services.</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
