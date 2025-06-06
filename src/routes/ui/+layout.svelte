<script>
  /** @type {{children: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<header class="bg-gray-800 text-white p-4 text-center">
  <h1 class="font-bold text-lg">DesignKit</h1>
</header>

{@render children()}

<footer class="bg-gray-900 text-gray-400 text-center p-4 mt-8">
  <p>Crafted with SvelteKit</p>
</footer>
