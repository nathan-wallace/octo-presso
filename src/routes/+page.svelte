<script>
  import { appPages, marketingPages } from '$lib/pages.js';
  import PageList from '$lib/PageList.svelte';
</script>

<h1 class="text-2xl font-bold mb-4">Industry Landing Pages</h1>
<p class="mb-4">Explore our sample pages tailored for different markets.</p>

<PageList pages={[...appPages, ...marketingPages]} />
