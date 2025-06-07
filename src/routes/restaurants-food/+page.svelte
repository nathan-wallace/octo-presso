<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Culinary Delights', text: 'Menus crafted by top chefs.' },
    { icon: '', title: 'Online Reservations', text: 'Secure your spot easily.' },
    { icon: '', title: 'Local Favorites', text: 'Discover nearby gems.' }
  ];
</script>

<Hero title="Restaurants & Food" subtitle="Taste the best in town" image="https://images.unsplash.com/photo-1555992336-03a23cda5f6b?auto=format&fit=crop&w=1200&q=80" ctaText="Book a Table" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
