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

		console.log(event);

		if (event === null) {
			return {
				status: 404
			};
		}

		let submissions: any;
		await fetch('https://platform.modfest.net/submissions')
			.then((response) => response.json())
			.then((data) => {
				submissions = data;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});

		const submission = submissions.find((s: any) => s.slug === params.submission);

		if (submission) {
			return {
				props: {
					event,
					submission
				},
				stuff: {
					event,
					submission
				}
			};
		}

		return {
			status: 404
		};
	};
</script>

<script lang="ts">
	import '$styles/app.css';
</script>

<slot />
