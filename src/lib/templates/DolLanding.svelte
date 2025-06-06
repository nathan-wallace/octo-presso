<script>
  export const displayName = 'DOL Landing';
  import Hero from '../Hero.svelte';
  import Features from '../Features.svelte';
  export let data = {
    hero: {
      title: 'DOL Workforce Solutions',
      subtitle: 'Robust platforms for labor programs and compliance.',
      image: 'https://images.unsplash.com/photo-1581511635482-b24b84af2451?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Advance Technology',
      ctaLink: '#'
    },
    features: [
      { icon: '', title: 'Accessible Web Apps', text: 'Section 508 compliant solutions for all workers.' },
      { icon: '', title: 'Case Management', text: 'Streamlined workflows for program administration.' },
      { icon: '', title: 'Secure Cloud Deployment', text: 'FedRAMP-ready infrastructure for sensitive data.' }
    ]
  };
</script>

<Hero {...data.hero} />
<Features features={data.features} />
<section class="bg-gray-900 text-white py-16 text-center">
  <h2 class="text-3xl font-bold mb-4">Empower the workforce with modern tools.</h2>
  <a href="#" class="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow">Talk to Experts</a>
</section>
