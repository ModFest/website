import type { LayoutServerLoad } from './$types';
import { fetchEvents } from '$lib/platform-api';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
	const events = await fetchEvents(fetch);

	events.reverse();

	if (events) {
		return {
			events
		};
	} else {
		return {
			status: 404
		};
	}
};
