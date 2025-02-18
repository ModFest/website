<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	export let { events } = data;

	export let earliestEvent = events ? events.slice().reverse()[0] : null;
	export let origin = Math.floor(earliestEvent ? asUnix(new Date('2019-01-01T00:00:00.000Z')) : 0);

	export let years = [
		new Date('2019-01-01T00:00:00.000Z'),
		new Date('2020-01-01T00:00:00.000Z'),
		new Date('2021-01-01T00:00:00.000Z'),
		new Date('2022-01-01T00:00:00.000Z'),
		new Date('2023-01-01T00:00:00.000Z'),
		new Date('2024-01-01T00:00:00.000Z')
	];

	export function asUnix(date: Date): number {
		const time = (new Date(date).getTime() / 1_000_000_0).toFixed(0);
		console.log(time);
		return parseInt(time);
	}

	export function normalizePosition(date: Date): number {
		return asUnix(date) - origin;
	}
</script>

<div class="flex flex-col gap-4 mb-16">
	{#if events && earliestEvent}
		<div class="relative">
			{#each events as event}
				{#each event.dates as date, index}
					<div
						class="min-h-4 min-w-4 absolute font-bold"
						style="background-color: #{event.colors.primary};color: #{event.colors
							.secondary};top: {normalizePosition(date.start)}px;"
					>
						{date.name}
					</div>
					<div
						class="absolute min-w-4 left-4 opacity-30"
						style="background-color: #{event.colors.primary};color: #{event.colors
							.secondary};top: calc({normalizePosition(
							date.start
						)}px + 1rem);height: {normalizePosition(date.end) - normalizePosition(date.start)}px;"
					></div>
				{/each}
			{/each}
			{#each years as year}
				<div
					class="min-h-4 min-w-4 absolute font-bold bg-mf-text text-mf-bg"
					style="top: {normalizePosition(year)}px;"
				>
					{year.getUTCFullYear()}
				</div>
			{/each}
		</div>
	{/if}
</div>
