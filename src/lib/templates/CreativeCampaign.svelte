<script>
  import Hero from '../Hero.svelte';
  export let data = {
    hero: {
      title: 'Creative Campaign',
      subtitle: 'Showcase your best work with media-rich content.',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'View Campaign',
      ctaLink: '#'
    },
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  };
</script>

<Hero {...data.hero} />
<section class="py-16 text-center">
  <video class="mx-auto rounded-lg shadow-lg" src={data.video} controls width="640"></video>
</section>
