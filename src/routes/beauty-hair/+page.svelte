<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Trendy Styles', text: 'Stay updated with the latest looks.' },
    { icon: '', title: 'Salon Finder', text: 'Locate top-rated stylists near you.' },
    { icon: '', title: 'Product Tips', text: 'Reviews and recommendations.' }
  ];
</script>

<Hero title="Beauty & Hair" subtitle="Look your best every day" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80" ctaText="Explore Styles" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
