<script>
  /** @type {{icon: string, title: string, text: string}[]} */
  export let features = [];
</script>

<section class="py-16 bg-gray-100">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid gap-10 md:grid-cols-3">
      {#each features as feat}
        <div class="text-center">
          <div class="mx-auto mb-4 text-5xl" style="color: var(--color-theme-1)">
            {@html feat.icon}
          </div>
          <h3 class="text-xl font-semibold mb-2">{feat.title}</h3>
          <p class="text-gray-600">{feat.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
