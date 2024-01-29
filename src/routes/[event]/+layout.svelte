<script lang="ts">
	import '$styles/app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	export let { event } = data
</script>


<div class="page" style="--link-color: {event.primary_color}; --event-background-color: {event.background_color}">
	<slot />
</div>
