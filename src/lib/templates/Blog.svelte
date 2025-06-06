<script>
  import Hero from '../Hero.svelte';
  export let data = {
    hero: {
      title: 'Company Blog',
      subtitle: 'Thought leadership and news.',
      image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Read Articles',
      ctaLink: '#'
    },
    posts: [
      { title: 'Our Latest Project', date: 'May 2' },
      { title: 'Industry Trends 2024', date: 'April 18' }
    ]
  };
</script>

<Hero {...data.hero} />
<section class="py-16 max-w-2xl mx-auto">
  <ul class="space-y-6">
    {#each data.posts as p}
      <li>
        <h3 class="text-xl font-semibold">{p.title}</h3>
        <p class="text-gray-500 text-sm">{p.date}</p>
      </li>
    {/each}
  </ul>
</section>
