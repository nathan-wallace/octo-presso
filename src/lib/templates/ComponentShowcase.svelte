<script>
  export const displayName = 'Component Library Showcase';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'Component Library Showcase',
      subtitle: 'Reusable pieces for rapid development.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Browse Components',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Buttons', text: 'Various styles and sizes.' },
      { icon: '', title: 'Layouts', text: 'Responsive and flexible.' },
      { icon: '', title: 'Forms', text: 'Accessible inputs and controls.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
