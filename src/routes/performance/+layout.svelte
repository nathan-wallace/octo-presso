<script>
  /** @type {{children: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<header class="bg-gradient-to-r from-green-500 to-emerald-700 text-white p-4 text-center">
  <h1 class="text-xl font-bold">Velocity</h1>
</header>

{@render children()}

<footer class="bg-gray-900 text-gray-400 text-center p-4 mt-8">
  <p>Powered by Velocity</p>
</footer>
