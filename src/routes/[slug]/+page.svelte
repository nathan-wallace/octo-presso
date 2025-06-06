<script>
  export let data;
</script>

<svelte:head>
  <title>{data.slug}</title>
</svelte:head>

<div class="prose mx-auto p-4">
  {@html data.html}
</div>
