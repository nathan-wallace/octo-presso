<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18M9 3v18m6-18v18M3 21h18" /></svg>`,
      title: 'Responsive Layouts',
      text: 'Looks stunning on phones, tablets and desktops.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M10.5 19.5L3 12l7.5-7.5" /></svg>`,
      title: 'Intuitive Controls',
      text: 'Simple, familiar interface designed for productivity.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6h15m-15 6h15m-15 6h15" /></svg>`,
      title: 'Accessible',
      text: 'Built with best practices for every user in mind.'
    }
  ];
</script>

<Hero
  title="Crafted User Interfaces"
  subtitle="Beautiful components that simply work."
  image="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
  ctaText="See Components"
  ctaLink="#"
/>

<Features {features} />

<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Build amazing apps today</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Get Started</a>
</section>
