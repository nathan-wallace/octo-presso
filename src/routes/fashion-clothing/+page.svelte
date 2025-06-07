<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Seasonal Collections', text: 'Discover the newest trends.' },
    { icon: '', title: 'Sustainable Materials', text: 'Eco-friendly fashion choices.' },
    { icon: '', title: 'Easy Online Shopping', text: 'Seamless checkout experience.' }
  ];
</script>

<Hero title="Fashion & Clothing" subtitle="Styles for every occasion" image="https://images.unsplash.com/photo-1521335629791-ce4aec67dd7d?auto=format&fit=crop&w=1200&q=80" ctaText="Shop Now" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
