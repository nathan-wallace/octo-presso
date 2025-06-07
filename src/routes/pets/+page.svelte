<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Healthy Foods', text: 'Nutritious options for all pets.' },
    { icon: '', title: 'Training Advice', text: 'Tips from expert trainers.' },
    { icon: '', title: 'Vet Network', text: 'Find trusted veterinarians.' }
  ];
</script>

<Hero title="Pets" subtitle="Everything for your furry friends" image="https://images.unsplash.com/photo-1558944351-cbfb49d098af?auto=format&fit=crop&w=1200&q=80" ctaText="See More" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
