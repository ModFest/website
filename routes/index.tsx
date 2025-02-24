import { RouteContext } from "$fresh/server.ts";
import { fetchEvents } from "../lib/platform-api.tsx";
import { Event } from "../lib/types.d.tsx";

function getDate(event: Event): string {
  let startPhase = event.dates.find(d => d.phase === "modding")
  if (!startPhase) {
    startPhase = event.dates.find(d => d.phase === "planning")
  }
  if (!startPhase) {
    startPhase = event.dates[0]
  }
  return startPhase.start === undefined ? startPhase.end : startPhase.start;
}

export default async function Index(req: Request, ctx: RouteContext) {
  const events = await fetchEvents(fetch);
  // ISO-8086 dates can be compared lexicographically
  events.sort((a,b) => getDate(a) > getDate(b) ? 1 : -1).reverse();
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
