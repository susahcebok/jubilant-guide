<script>
	export let name;
</script>

<main>
	<h1>PFP {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main { 
                width: 600px;
                margin: 5em auto;
                padding: 3em;
                background-color: #fdfdff;
                border-radius: 0.5em;
                box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
        }

	p {
                line-height: 1.6;
        }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
