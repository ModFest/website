import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({params, fetch}) => {
    let events: any;
    await fetch('https://platform.modfest.net/events')
        .then((response: any) => response.json())
        .then((data: any) => {
            events = data;
        })
        .catch((error: any) => {
            return [];
        });

    const event = events.find((e: any) => e.id === params.event);

    if (event) {
        return {
            event,
        }
    } else {
        return {
            status: 404,
        }
    }
};