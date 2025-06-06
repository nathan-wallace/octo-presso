<script>
  export const displayName = 'Denver City Guide';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Discover Denver',
      subtitle: 'A modern city at the base of the Rockies.',
      image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Plan Your Trip',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Mountain Views', text: 'See the majestic Rockies from every corner.' },
      { icon: '', title: 'Craft Breweries', text: 'Taste world-class beers from local brewers.' },
      { icon: '', title: 'Outdoor Adventures', text: 'Hiking, biking and skiing just minutes away.' }
    ],
    attractions: [
      { name: 'Red Rocks Amphitheatre', desc: 'Natural outdoor venue for concerts and events.' },
      { name: 'Denver Art Museum', desc: 'Renowned collection spanning centuries.' },
      { name: 'Union Station', desc: 'Historic hub filled with shops and dining.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />

<section class="py-16 max-w-4xl mx-auto">
  <h2 class="text-2xl font-bold mb-6 text-center">Top Attractions</h2>
  <div class="grid md:grid-cols-3 gap-8">
    {#each data.attractions as a}
      <div class="text-center">
        <h3 class="text-xl font-semibold mb-2">{a.name}</h3>
        <p class="text-gray-600">{a.desc}</p>
      </div>
    {/each}
  </div>
</section>

<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Ready to explore?</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Start Planning</a>
</section>
