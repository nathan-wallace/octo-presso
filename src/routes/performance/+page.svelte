<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18l-1.5 2.25L21 7.5H3L4.5 5.25 3 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5h18v11.25A1.5 1.5 0 0119.5 20.25h-15A1.5 1.5 0 013 18.75V7.5z" /></svg>`,
      title: 'Blazing Fast',
      text: 'Built with rigorous benchmarks to ensure top performance.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18M6 5v14m12-14v14" /></svg>`,
      title: 'Horizontally Scalable',
      text: 'Deploy across clusters without configuration headaches.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="9" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l3 3" /></svg>`,
      title: 'Real-time Updates',
      text: 'Streams changes instantly to every connected client.'
    }
  ];
</script>

<Hero
  title="Performance That Delights"
  subtitle="Speed and efficiency for your modern apps."
  image="https://images.unsplash.com/photo-1523113555484-94d9e2786a6a?auto=format&fit=crop&w=1200&q=80"
  ctaText="Learn More"
  ctaLink="#"
/>

<Features {features} />

<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Supercharge your workflow</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Try it free</a>
</section>
