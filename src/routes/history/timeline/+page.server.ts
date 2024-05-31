import type {PageServerLoad} from './$types';
import {fetchEvent, fetchEvents, fetchSubmissions, fetchUser, fetchUsers} from "$lib/platform-api";

export const load: PageServerLoad = async ({params, fetch}) => {
    let events = await fetchEvents(fetch);

    if (events) {
        return {
            user: events,
        };
    }

    return {
        status: 404
    };
};