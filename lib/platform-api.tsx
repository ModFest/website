import type { Submission, User, Event, ScheduleEntryData } from "./types.d.tsx";

type fetchT = typeof fetch;
const API_URL = Deno.env.get("API_URL")

// deno-lint-ignore no-explicit-any
async function baseFetch(fetch: fetchT, route: string): Promise<any> {
  return await fetch(`${API_URL ?? "https://platform.modfest.net"}/${route}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

export async function fetchUser(fetch: fetchT, id: string): Promise<User> {
  return await baseFetch(fetch, `user/${id}`);
}

export async function fetchEvents(fetch: fetchT): Promise<Event[]> {
  return await baseFetch(fetch, `events`);
}

export async function fetchEvent(fetch: fetchT, id: string): Promise<Event> {
  return await baseFetch(fetch, `event/${id}`);
}

/**
 * Fetches all submissions that were made for a given event
 */
export async function fetchEventSubmissions(
  fetch: fetchT,
  eventId: string,
): Promise<Submission[]> {
  return await baseFetch(fetch, `event/${eventId}/submissions`);
}

/**
 * Fetches the schedule for a given event
 */
export async function fetchEventSchedule(
  fetch: fetchT,
  eventId: string,
): Promise<ScheduleEntryData[]> {
  return await baseFetch(fetch, `event/${eventId}/schedule`);
}

/**
 * Fetches all submissions that a given user made
 */
export async function fetchUserSubmissions(
  fetch: fetchT,
  userId: string,
): Promise<Submission[]> {
  return await baseFetch(fetch, `user/${userId}/submissions`);
}
