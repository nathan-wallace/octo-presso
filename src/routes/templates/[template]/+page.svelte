<script>
  import { templates } from '$lib/templates';
  export let data;
  const entry = templates.find((t) => t.id === data.template);
  const Component = entry ? entry.component : null;
</script>

{#if Component}
  <svelte:component this={Component} />
{:else}
  <p class="text-red-600">Template not found.</p>
{/if}
