<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    { icon: '', title: 'Expert Advisors', text: 'Decades of industry experience.' },
    { icon: '', title: 'Secure Services', text: 'Protecting your information.' },
    { icon: '', title: 'Compliance Guidance', text: 'Stay on the right side of the law.' }
  ];
</script>

<Hero title="Finance & Law" subtitle="Professional guidance you can trust" image="https://images.unsplash.com/photo-1556742049-908b5a18553b?auto=format&fit=crop&w=1200&q=80" ctaText="Get Advice" ctaLink="#" />
<Features {features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Learn more today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Contact Us</a>
</section>
