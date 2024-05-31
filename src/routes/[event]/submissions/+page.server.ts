import type {PageServerLoad} from './$types';
import {fetchEvent, fetchSubmissions, fetchUsers} from "$lib/platform-api";

export const load: PageServerLoad = async ({params, fetch}) => {
    var eventId = params.event;
    let event = await fetchEvent(fetch, eventId);

    if (!event) {
        return {
            status: 404
        };
    }

    let submissions = await fetchSubmissions(fetch, eventId);

    submissions.sort((a, b) => a.name.localeCompare(b.name))

    let users = await fetchUsers(fetch);

    if (submissions.length > 0) {
        return {
            event,
            submissions,
            users
        };
    }

    return {
        status: 404
    };
};