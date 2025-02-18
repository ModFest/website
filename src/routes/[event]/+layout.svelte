<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	export let { event } = data;
</script>

<div
	class="flex flex-col gap-4 mb-16"
	style="--color-mf-link: #{event?.colors.primary}; --color-mf-event-background: #{event?.colors
		.secondary}"
>
	<slot />
</div>
