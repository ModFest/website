<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../styles/app.css';
</script>

<div class="container">
	<Header />
	<div class="contents">
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	.container {
	}

	:global(.contents) {
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
	}

	@media only screen and (max-width: 832px) {
		.contents {
			margin: 1rem;
		}
	}
</style>
