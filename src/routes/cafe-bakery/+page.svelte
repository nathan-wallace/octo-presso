<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Fresh Ingredients', text: 'Handcrafted pastries daily.' },
    { icon: '', title: 'Artisan Coffee', text: 'Sourced from premium beans.' },
    { icon: '', title: 'Cozy Ambiance', text: 'Relax in our welcoming space.' }
  ];
</script>

<Hero title="Cafe & Bakery" subtitle="Fresh brews and baked goods" image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80" ctaText="Visit Us" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
