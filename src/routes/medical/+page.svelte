<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Experienced Doctors', text: 'Skilled professionals ready to help.' },
    { icon: '', title: 'Modern Equipment', text: 'State-of-the-art facilities.' },
    { icon: '', title: 'Compassionate Care', text: 'Focused on your well-being.' }
  ];
</script>

<Hero title="Medical" subtitle="Quality care for every patient" image="https://images.unsplash.com/photo-1580281657520-1950d1857e4a?auto=format&fit=crop&w=1200&q=80" ctaText="Find Care" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
