<script>
  import Hero from '$lib/Hero.svelte';
  import Features from '$lib/Features.svelte';

  const features = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M9 18V5l12-2v13" /></svg>`,
      title: 'Hi‑Fi Sound',
      text: 'Crystal clear audio engineered for true music lovers.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-2M9 12l10.5-2M9 15l7.125-1.357" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 9v12.75a.75.75 0 01-1.06.697l-4.5-2.25A.75.75 0 013 19.75V7.913a.75.75 0 01.44-.685L8 5.158a.75.75 0 011 .685V9z" /></svg>`,
      title: 'Offline Playback',
      text: 'Download your favorites and listen anywhere.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 15.75v2.25A2.25 2.25 0 0012 20.25h0a2.25 2.25 0 002.25-2.25v-2.25M12 13.5v6m0 0h3.164c.597 0 1.079-.463 1.079-1.033a10.5 10.5 0 00-8.486 0c0 .57.482 1.033 1.08 1.033H12z" /><circle cx="12" cy="7" r="4.5" /></svg>`,
      title: 'Curated Playlists',
      text: 'Fresh tracks handpicked every single day.'
    }
  ];
</script>

<Hero
  title="Experience Music Like Never Before"
  subtitle="Stream millions of songs ad‑free."
  image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
  ctaText="Start Listening"
  ctaLink="#"
/>

<Features {features} />

<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Ready to tune in?</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Join Now</a>
</section>
