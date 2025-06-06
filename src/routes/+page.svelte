<script>
  import { appPages, marketingPages } from '$lib/pages.js';
  import PageList from '$lib/PageList.svelte';
</script>

<h1 class="text-2xl font-bold mb-4">Welcome</h1>

<h2 class="text-xl mt-4">Site Pages</h2>
<PageList pages={[...appPages, ...marketingPages]} />

