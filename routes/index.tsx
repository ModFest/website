import { RouteContext } from "$fresh/server.ts";
import { fetchEvents } from "../lib/platform-api.tsx";

export default async function Index(req: Request, ctx: RouteContext) {
  const events = await fetchEvents(fetch);
  events.reverse();
  return (
    <div class="flex flex-col gap-4 mb-16">
      {events.map((event) => (
        <a
          href={event.id}
          className="card p-0 overflow-hidden relative aspect-[5/2] clickable"
          style="background-color: #{event.colors.secondary}"
        >
          <img
            className="absolute w-full h-full inset-0 object-cover p-0"
            src={event.images.background}
            alt={event.name + "cover image"}
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center p-8 gap-4">
            <img
              className="h-[50%]"
              src={event.images.wordmark}
              alt={event.name + "wordmark"}
              aria-hidden="true"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
