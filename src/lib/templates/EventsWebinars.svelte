<script>
  import Hero from '../Hero.svelte';
  export let data = {
    hero: {
      title: 'Events & Webinars',
      subtitle: 'Join us for upcoming sessions.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Register Now',
      ctaLink: '#'
    },
    events: [
      { name: 'Launch Webinar', date: 'June 15' },
      { name: 'Workshop', date: 'July 12' }
    ]
  };
</script>

<Hero {...data.hero} />
<section class="py-16 max-w-2xl mx-auto">
  <ul class="space-y-4">
    {#each data.events as e}
      <li class="flex justify-between border-b pb-2">
        <span>{e.name}</span>
        <span class="font-semibold">{e.date}</span>
      </li>
    {/each}
  </ul>
</section>
