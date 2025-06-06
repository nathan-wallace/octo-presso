<script>
  export const displayName = 'NIH Landing';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'NIH Open Source Innovations',
      subtitle: 'Accelerate medical breakthroughs with secure, agile software.',
      image: 'https://images.unsplash.com/photo-1581092919545-6ac1c88686a9?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Schedule a Consultation',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Research-Focused', text: 'Solutions built for biomedical data and collaboration.' },
      { icon: '', title: 'Security & Compliance', text: 'HIPAA and FISMA-ready architectures.' },
      { icon: '', title: 'Collaborative Expertise', text: 'Open source communities working with NIH scientists.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Ready to modernize your research?</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Get Started</a>
</section>
