<script context="module" lang="ts">
	export const load: import('./__types/__layout').Load = async ({ params, fetch }) => {
		let event: any;
		await fetch('https://platform.modfest.net/event/' + params.event)
			.then((response) => response.json())
			.then((data) => {
				event = data;
			})
			.catch((error) => {
				console.log(error);
				return null;
			});

		if (event === null) {
			return {
				status: 404
			};
		}

		let submissions: any;
		await fetch('https://platform.modfest.net/submissions')
			.then((response) => response.json())
			.then((data) => {
				submissions = data.filter((submission: any) => {
					// Check if there exists a participant in the event with the submission id
					return Object.values(event.participants).some((participant: any) => {
						return participant.submissions.includes(submission.id);
					});
				});
			})
			.catch((error) => {
				console.log(error);
				return [];
			});

		let users: any;
		await fetch('https://platform.modfest.net/users?map')
			.then((response) => response.json())
			.then((data) => {
				users = data;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});

		if (submissions.length > 0) {
			return {
				props: {
					event,
					submissions,
					users
				},
				stuff: {
					event,
					submissions,
					users
				}
			};
		}

		return {
			status: 404
		};
	};
</script>

<script lang="ts">
	function compareSubmission(a: any, b: any) {
		const aName = a.name.toLowerCase().replace(/[^a-z0-9]/gi, '');
		const bName = b.name.toLowerCase().replace(/[^a-z0-9]/gi, '');
		if (aName < bName) {
			return -1;
		}
		if (aName > bName) {
			return 1;
		}
		return 0;
	}

	export let event: any;
	export let submissions: any[];
	export let users: any;

	submissions.sort(compareSubmission);
	const modders = [...new Set(submissions.map((submission: any) => submission.members).flat())];
	submissions.forEach((s) => {
		s.authors = [];
		s.members.forEach((m: string) => {
			s.authors.push(users[m]);
		});
	});
</script>

<a href="/{event.id}" class="card clickable" style="background-color: {event.background_color}">
	<div class="icon">
		{@html event.logo}
	</div>
	<div class="content">
		<h1>{event.name}</h1>
		<p>
			ModFest: Singularity had a total of {submissions.length} submissions created by {modders.length}
			total modders.
		</p>
	</div>
</a>
<div class="submissions">
	{#each submissions as submission}
		<a class="submission clickable" href="{submission.modrinth_url}" target="_blank">
			<div class="header">
				{#if submission.gallery_url}
					<img
						class="banner"
						src={submission.gallery_url}
						alt="Gallery image for {submission.name}"
					/>
				{/if}
			</div>
			<div class="content {submission.icon_url ? 'has-icon' : ''}">
				{#if submission.icon_url}
					<div class="icon">
						<img src={submission.icon_url} alt="Icon for {submission.name}" />
					</div>
				{/if}
				<div class="title">
					<h3>{submission.name}</h3>
					by
					{#each submission.authors as author, index}
						{#if submission.authors.length > 1 && index === submission.authors.length - 1},&nbsp;and&nbsp;{:else if submission.authors.length > 2 && index < submission.authors.length - 1 && index !== 0},&nbsp{/if}{author.display_name}
					{/each}
				</div>
				<p>{submission.summary}</p>
			</div>
		</a>
	{/each}
</div>

<style>
	.submissions {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media only screen and (max-width: 600px) {
		.submissions {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.card {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.card .icon :global(svg) {
		height: 4rem;
	}

	.card .content {
		align-self: center;
	}

	.submission {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		background-color: var(--card-color);
		overflow: hidden;
		color: unset;
	}

	.submission .content {
		padding: 1rem;
		padding-top: 0.75rem;
	}

	.submission .content h3 {
		margin: 0;
		color: var(--heading-color);
	}

	.submission .content p {
		margin: 0;
		margin-top: 0.5rem;
		color: var(--heading-color);
	}

	.submission .header {
		width: 100%;
		background-color: var(--unknown-color);
		height: 10rem;
		overflow: hidden;
		z-index: 5;
	}

	.submission .header .banner {
		width: 100%;
		height: 10rem;
		object-fit: cover;
	}

	.submission .icon {
		width: 6rem;
		height: 6rem;
		object-fit: contain;
		border-radius: 1rem;
		border: 0.25rem solid var(--card-color);
		margin-top: -4rem;
		background-color: var(--unknown-color);
		overflow: hidden;
		z-index: 10;
		position: absolute;
	}

	.submission .icon img {
		width: 6rem;
		max-height: 6rem;
	}

	.submission .has-icon .title {
		margin-left: 7.25rem;
	}
</style>
