<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Personalized Workouts', text: 'Programs tailored to you.' },
    { icon: '', title: 'Nutrition Coaching', text: 'Healthy eating made simple.' },
    { icon: '', title: 'Mindfulness Practices', text: 'Tools for a calmer mind.' }
  ];
</script>

<Hero title="Health & Wellness" subtitle="Achieve balance and vitality" image="https://images.unsplash.com/photo-1554284110-c19e96c83f0e?auto=format&fit=crop&w=1200&q=80" ctaText="Start Today" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
