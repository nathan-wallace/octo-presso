<script>
  import { templates } from '$lib/templates';
  import { base } from '$app/paths';
</script>

<h1 class="text-2xl font-bold mb-4">Page Templates</h1>
<ul class="space-y-2">
  {#each templates as t}
    <li>
      <a class="text-blue-600 underline" href={`${base}/templates/${t.id}`}>{t.name}</a>
    </li>
  {/each}
</ul>
