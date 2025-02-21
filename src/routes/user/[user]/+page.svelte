<script lang="ts">
	import { formatPlural } from '$lib/format';
	import type { PageData } from './$types';

	export let data: PageData;
	export let { user } = data;

	export function getLink(submission: Submission) {
		if (submission.platform.type === 'modrinth') {
			const data = submission.platform as ModrinthData;
			return `https://modrinth.com/project/${data.project_id}`;
		}
	}
</script>

<!--This really needs some error handling when say... a user doesn't exist?-->

<div class="flex flex-col gap-4 mb-16">
	{#if user}
		<div class="card flex flex-row gap-4">
			<div>
				<img
					alt={`Icon for user ${user.name}`}
					class="h-16 bg-mf-unknown w-16 rounded-full"
					src={user.icon}
				/>
			</div>
			<div class="flex-grow self-center">
				<span class="flex flex-row items-end gap-2">
					<h1 class="m-0">{user.name}</h1>
					{#if user.pronouns}
						<p class="m-0 text-sm">({user.pronouns})</p>
					{/if}
				</span>
				{#if user.submissions}
					<p>
						{user.name} has submitted {formatPlural('project', user.submissions.length)} to ModFest events.
					</p>
				{:else}
					<p>
						{user.name} has not participated in a ModFest event yet.
					</p>
				{/if}
			</div>
		</div>
		{#if user.submissions}
			<div class="grid grid-cols-2 sm:grid-cols-2 gap-4">
				{#each user.submissions as submission}
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
						<div class="p-4 pt-3">
							{#if submission.images && submission.images.icon}
								<div
									class="w-24 h-24 object-contain rounded-2xl border-mf-card border-4 border-solid mt-[-5rem] bg-mf-unknown overflow-hidden z-10 absolute"
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
							</div>
							<p class="m-0 mt-2 text-mf-heading">{submission.description}</p>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>
