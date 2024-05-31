import type {PageServerLoad} from './$types';
import {fetchEvent, fetchSubmissions, fetchUser, fetchUsers} from "$lib/platform-api";

export const load: PageServerLoad = async ({params, fetch}) => {
    let user = await fetchUser(fetch, params.user);

    if (user) {
        return {
            user,
        };
    }

    return {
        status: 404
    };
};