<script lang="ts">
	import { onMount } from 'svelte';

	let events: any[] = [];

	onMount(async () => {
		const request = await fetch('https://platform.modfest.net/events');
		events = await request.json();
	});
</script>

<div class="page">
	{#if events.length === 0}
		<h2>Loading ModFest events...</h2>
	{:else}
		<h2>Ongoing:</h2>
		{#each events as event}
			{#if event.published && !event.archived}
				<a href="/{event.id}" class="card clickable" style="background-color: {event.background_color}">
					<img
						class="cover-image"
						src="/assets/event/{event.id}/cover.png"
						alt="{event.name} cover image"
						aria-hidden="true"
					/>
				</a>
			{/if}
		{/each}
		<h2>Past events:</h2>
		{#each events as event}
			{#if event.published && event.archived}
				<a href="/{event.id}" class="card clickable" style="background-color: {event.background_color}">
					<img
						class="cover-image"
						src="/event/{event.id}/cover.png"
						alt="{event.name} cover image"
						aria-hidden="true"
					/>
				</a>
			{/if}
		{/each}
	{/if}
</div>
