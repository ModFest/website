<script lang="ts">
	import { formatPlural } from '$lib/format';
	import type { PageData } from './$types';

	export let data: PageData;
	export let { event, submissions, users } = data;

	export let participants = new Set<string>();
	if (submissions) {
		submissions.forEach((submissions) => {
			submissions.authors.forEach((author) => participants.add(author));
		});
	}

	export function getLink(submission: Submission) {
		if (submission.platform.type === 'modrinth') {
			const data = submission.platform as ModrinthData;
			return `https://modrinth.com/project/${data.project_id}`;
		}
	}
</script>

{#if event && submissions && users}
	<a
		href="/{event.id}"
		class="card flex flex-row gap-4 clickable"
		style="background-color: #{event.colors.secondary}"
	>
		<div class="icon">
			<img
				alt={`Transparent icon for to ${event.name}`}
				class="h-16"
				src={event.images.transparent}
			/>
		</div>
		<div>
			<h1>{event.name}</h1>
			<p>
				{event.name}
				{event.phase !== 'modding' ? 'has' : 'had'} a total of
				{formatPlural('submission', submissions.length)} created by {formatPlural(
					'modder',
					participants.size
				)}{event.phase === 'modding' ? ' so far' : ''}.
			</p>
		</div>
	</a>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each submissions as submission}
			<a
				class="shadow-(--shadow-mf-card) rounded-2xl bg-mf-card overflow-hidden text-[unset] clickable"
				href={getLink(submission)}
				target="_blank"
			>
				<div class="w-full bg-mf-unknown h-40 overflow-hidden z-[5]">
					{#if submission.images && submission.images.screenshot}
						<img
							class="w-full h-40 object-cover"
							src={submission.images.screenshot}
							alt="Gallery image for {submission.name}"
						/>
					{/if}
				</div>
				<div class="p-4 pt-3 self-center">
					{#if submission.images && submission.images.icon}
						<div
							class="w-24 h-24 object-contain rounded-2xl border-mf-card border-4 border-solid mt-[-4rem] bg-mf-unknown overflow-hidden z-10 absolute"
						>
							<img
								class="w-24 h-24 pixelated"
								src={submission.images.icon}
								alt="Icon for {submission.name}"
							/>
						</div>
					{/if}
					<div class={submission.images && submission.images.icon ? 'ml-[7.25rem]' : ''}>
						<h3 class="m-0 text-mf-heading">{submission.name}</h3>
						by
						{#each submission.authors as author, index}
							{#if submission.authors.length > 1}
								{#if index > 0}
									{#if submission.authors.length > 2 && index === submission.authors.length - 1}
										<span>, and</span>
									{:else if submission.authors.length === 2 && index === submission.authors.length - 1}
										<span>&nbsp;and</span>
									{:else if submission.authors.length > 1 && index > 0}
										<span>,</span>
									{/if}
								{/if}
							{/if}
							{@const user = users.find((u) => u.id === author)}
							{#if user}
								<a href="/user/{user.id}">{user.name}</a>
							{:else}
								{author}
							{/if}
						{/each}
					</div>
					<p class="m-0 mt-2 text-mf-heading">{submission.description}</p>
				</div>
			</a>
		{/each}
	</div>
{/if}
