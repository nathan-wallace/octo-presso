<script>
  import Hero from '../Hero.svelte';
  export let data = {
    hero: {
      title: 'Pricing Plans',
      subtitle: 'Find a package that fits your needs.',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Sign Up',
      ctaLink: '#'
    },
    plans: [
      { name: 'Basic', price: '$9/mo' },
      { name: 'Pro', price: '$29/mo' },
      { name: 'Enterprise', price: 'Contact Us' }
    ]
  };
</script>

<Hero {...data.hero} />
<section class="py-16 text-center">
  <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    {#each data.plans as p}
      <div class="border rounded-lg p-6 shadow">
        <h3 class="text-xl font-semibold mb-2">{p.name}</h3>
        <p class="text-2xl font-bold">{p.price}</p>
      </div>
    {/each}
  </div>
</section>
