<script>
import Header from './Header.svelte';
import { page } from '$app/stores';
import '../app.css';

/** @type {{children: import('svelte').Snippet}} */
let { children } = $props();
</script>

<div class="app">
       {#if !$page.data.hideChrome}
               <Header />
       {/if}

       <main>
               {@render children()}
       </main>

       {#if !$page.data.hideChrome}
               <footer>
                       <p>
                               visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
                       </p>
               </footer>
       {/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
