import { RouteContext } from "$fresh/server.ts";
import { render } from "@deno/gfm";

import { fetchEvent, fetchEventSubmissions } from "../lib/platform-api.tsx";
import { MarkdownDescriptionItem } from "../lib/types.d.tsx";

export default async function Event(_req: Request, ctx: RouteContext) {
  const event = await fetchEvent(fetch, ctx.params.event);

  if (!event.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchEventSubmissions(fetch, ctx.params.event);
  return (
    <div
      class="flex flex-col gap-4 mb-16"
      style={`--color-mf-link: #${event.colors.primary}; --color-mf-event-background: #${event.colors.secondary}`}
    >
      <div
        class="card p-0 overflow-hidden relative aspect-[5/2]"
        style="background-color: #{event.colors.secondary}"
      >
        <img
          class="absolute w-full h-full inset-0 object-cover p-0"
          src={event.images.background}
          alt={`${event.name} cover image`}
          aria-hidden="true"
        />
        <div class="absolute inset-0 z-[1] flex flex-col items-center justify-center p-8 gap-4">
          <img
            class="h-[50%]"
            src={event.images.wordmark}
            alt={`${event.name} wordmark`}
            aria-hidden="true"
          />
          {event.id.startsWith("ff")
            ? (
              <span class="font-medium text-2xl font-title uppercase text-mf-dark-translucent">
                {event.subtitle}
              </span>
            )
            : (
              <span class="font-medium text-2xl font-title uppercase text-mf-light-translucent">
                {event.subtitle}
              </span>
            )}
        </div>
      </div>
      <div class="justify-center flex gap-4">
        {event.phase === "planning" || event.phase === "modding" &&
            (
              <a
                href="https://discord.gg/gn543Ee"
                target="_blank"
                class="button clickable"
              >
                Register on Discord!
              </a>
            )}
        {event.phase === "showcase" && event.modpack &&
          (
            <a
              href={event.modpack}
              target="_blank"
              class="button clickable"
            >
              Play!
            </a>
          )}
        {event.phase === "complete" && event.modpack &&
          (
            <a
              href={event.modpack}
              target="_blank"
              class="button clickable"
            >
              Download Modpack
            </a>
          )}
        {submissions.length && submissions.length > 0 &&
          (
            <a href={`/${event.id}/submissions`} class="button clickable">
              View Submissions
            </a>
          )}
      </div>

      {event.description.map((section) => (section.type === "markdown" &&
        (
          <div
            class="card"
            dangerouslySetInnerHTML={{
              __html: render(
                (section as MarkdownDescriptionItem).content.markdown,
              ),
            }}
          />
        ))
      )}
    </div>
  );
}
