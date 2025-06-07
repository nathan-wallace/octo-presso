<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Destination Highlights', text: 'Top sights around the globe.' },
    { icon: '', title: 'Booking Tools', text: 'Flights, hotels, and more.' },
    { icon: '', title: 'Insider Tips', text: 'Advice from seasoned travelers.' }
  ];
</script>

<Hero title="Travel & Tourism" subtitle="Plan your next adventure" image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" ctaText="Start Exploring" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
