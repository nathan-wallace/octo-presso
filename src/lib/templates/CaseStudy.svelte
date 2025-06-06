<script>
  export const displayName = 'Case Study';
  import Hero from '../Hero.svelte';
  export let data = {
    hero: {
      title: 'Success Story',
      subtitle: 'How we delivered amazing results.',
      image: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Read More',
      ctaLink: '#'
    },
    quote: '"This campaign exceeded all expectations."',
    attribution: 'Happy Client'
  };
</script>

<Hero {...data.hero} />
<section class="py-16 bg-gray-100 text-center">
  <blockquote class="text-xl italic mb-4">{data.quote}</blockquote>
  <p class="font-semibold">{data.attribution}</p>
</section>
