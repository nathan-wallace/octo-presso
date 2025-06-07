<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Latest Gadgets', text: 'Reviews of cutting-edge tech.' },
    { icon: '', title: 'Innovative Apps', text: 'Tools to boost productivity.' },
    { icon: '', title: 'How-To Guides', text: 'Step-by-step tech tutorials.' }
  ];
</script>

<Hero title="Technology & Apps" subtitle="Stay ahead with innovation" image="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80" ctaText="Download Now" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
