<script>
  /** @type {{children: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<header class="bg-indigo-600 text-white p-4 flex justify-between">
  <h1 class="font-bold">SoundWave</h1>
  <a href="#" class="underline">Sign Up</a>
</header>

{@render children()}

<footer class="bg-indigo-700 text-white text-center p-4 mt-8">
  <p>&copy; 2025 SoundWave</p>
</footer>
