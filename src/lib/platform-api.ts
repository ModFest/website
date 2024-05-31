const API_URL = `http://localhost:7069`

async function baseFetch(fetch: any, route: string): Promise<any> {
    let result: any;
    await fetch(`${API_URL}/${route}`)
        .then((response: any) => response.json())
        .then((data: any) => {
            result = data;
        })
        .catch((error: any) => {
            console.error(error)
        })
    return result;
}

export async function fetchUsers(fetch: any): Promise<User[]> {
    return await baseFetch(fetch, `users`)
}

export async function fetchUser(fetch: any, id: string): Promise<User> {
    return await baseFetch(fetch, `user/${id}`)
}

export async function fetchEvents(fetch: any): Promise<Event[]> {
    return await baseFetch(fetch, `events`)
}

export async function fetchEvent(fetch: any, id: string): Promise<Event> {
    return await baseFetch(fetch, `event/${id}`)
}

export async function fetchSubmissions(fetch: any, eventId: string): Promise<Submission[]> {
    return await baseFetch(fetch, `event/${eventId}/submissions`)
}