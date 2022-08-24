<script context="module" lang="ts">
	export const load: import('./__types/__layout').Load = async ({ params, fetch }) => {
		let events: any;
		await fetch('https://platform.modfest.net/events')
			.then((response) => response.json())
			.then((data) => {
				events = data;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});

		const event = events.find((e: any) => e.id === params.event);

		if (event) {
			return {
				props: {
					event
				},
				stuff: {
					event
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

	export let event: any;
</script>


<div class="page" style="--link-color: {event.primary_color}; --event-background-color: {event.background_color}">
	<slot />
</div>
