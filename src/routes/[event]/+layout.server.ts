import type {LayoutServerLoad} from './$types';
import {fetchEvent, fetchSubmissions} from "$lib/platform-api";

export const load: LayoutServerLoad = async ({params, fetch}) => {
    const event = await fetchEvent(fetch, params.event);
    const submissions = await fetchSubmissions(fetch, params.event)

    if (event) {
        return {
            event,
            submissionsCount: submissions.length
        }
    } else {
        return {
            status: 404,
        }
    }
};