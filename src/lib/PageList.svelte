<script>
  /** @type {{slug: string, name: string}[]} */
  export let pages = [];
  import { base } from '$app/paths';
</script>

<ul class="page-list">
  {#each pages as p}
    <li><a href={`${base}/${p.slug}`}>{p.name}</a></li>
  {/each}
</ul>

<style>
  .page-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  a {
    text-decoration: none;
    color: var(--color-theme-1);
  }
</style>
