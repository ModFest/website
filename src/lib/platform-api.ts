const API_URL = `http://localhost:7069`

type fetchT = typeof fetch;

async function baseFetch(fetch: fetchT, route: string): Promise<any> {
    return await fetch(`${API_URL}/${route}`)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error)
        })
}

export async function fetchUsers(fetch: fetchT): Promise<User[]> {
    return await baseFetch(fetch, `users`)
}

export async function fetchUser(fetch: fetchT, id: string): Promise<User> {
    return await baseFetch(fetch, `user/${id}`)
}

export async function fetchEvents(fetch: fetchT): Promise<Event[]> {
    return await baseFetch(fetch, `events`)
}

export async function fetchEvent(fetch: fetchT, id: string): Promise<Event> {
    return await baseFetch(fetch, `event/${id}`)
}

export async function fetchSubmissions(fetch: fetchT, eventId: string): Promise<Submission[]> {
    return await baseFetch(fetch, `event/${eventId}/submissions`)
}