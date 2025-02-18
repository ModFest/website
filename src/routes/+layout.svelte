<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css'
</script>

<div>
	<div class="flex flex-col gap-4 max-w-4xl m-[auto]">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</div>