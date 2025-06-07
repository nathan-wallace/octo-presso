<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Step-by-Step Tutorials', text: 'Learn from industry pros.' },
    { icon: '', title: 'Vibrant Colors', text: 'Shades for every mood.' },
    { icon: '', title: 'Cruelty-Free Products', text: 'Beauty with a conscience.' }
  ];
</script>

<Hero title="Makeup & Cosmetics" subtitle="Discover your unique look" image="https://images.unsplash.com/photo-1512499617640-c2f999039374?auto=format&fit=crop&w=1200&q=80" ctaText="Browse Products" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
