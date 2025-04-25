import { RouteConfig, RouteContext } from "$fresh/server.ts";

import {
  fetchEvent,
  fetchEventSchedule,
  fetchEventSubmissions,
  fetchUser,
} from "../../lib/platform-api.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import { getPagesMarkdown } from "../../lib/helpers.tsx";
import { MarkdownBlocks } from "../../components/MarkdownBlocks.tsx";
import { Schedule } from "../../components/Schedule.tsx";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default async function Event(_req: Request, ctx: RouteContext) {
  const eventId = "bc25";
  const event = await fetchEvent(fetch, eventId);

  if (!event.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchEventSubmissions(fetch, eventId);
  const schedule = await fetchEventSchedule(fetch, eventId);
  schedule.sort((a, b) => (a.start ?? "") > (b.start ?? "") ? 1 : -1);
  const users = await Promise.all(
    [...new Set(schedule.flatMap((s) => s.authors))].map((author) =>
      fetchUser(fetch, author)
    ),
  );
  const content = await getPagesMarkdown(`event/${eventId}`);
  return (
    <div className="bg-[#86dbfe]">
      <Head>
        <link rel="stylesheet" href={asset("/assets/vanity/bc25/main.css")} />
      </Head>
      <div className="bg-[#222034]">
        <header className="max-w-4xl m-[auto] flex flex-col items-stretch">
          <nav className="card p-0 mt-4 flex flex-col gap-2 relative">
            <div className="flex flex-col md:flex-row justify-start items-center gap-2">
              <a
                className="nav-link flex h-12 gap-2 no-underline clickable-vanity relative md:absolute -left-2"
                href="/"
              >
                <img
                  src="/assets/vanity/bc25/icons/modfest.png"
                  className="h-10 object-contain"
                  alt="ModFest Logo"
                />
              </a>

              <div className="grow" />
              <div className="flex flex-wrap gap-1">
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://github.com/ModFest"
                  target="_blank"
                >
                  <img
                    src="/assets/vanity/bc25/icons/github.png"
                    alt="GitHub link"
                  />
                </a>
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://modrinth.com/organization/modfest"
                  target="_blank"
                >
                  <img
                    src="/assets/vanity/bc25/icons/modrinth.png"
                    alt="Modrinth link"
                  />
                </a>
                <div className="w-0.5 h-auto rounded-full bg-black mx-1.5 my-0">
                </div>
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://floss.social/@modfest"
                  rel="me"
                  target="_blank"
                >
                  <img
                    src="/assets/vanity/bc25/icons/mastodon.png"
                    alt="Mastodon link"
                  />
                </a>
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://bsky.app/profile/modfest.net"
                  target="_blank"
                >
                  <img
                    src="/assets/vanity/bc25/icons/bluesky.png"
                    alt="Bluesky link"
                  />
                </a>
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://tumblr.com/modfest"
                  target="_blank"
                >
                  <img
                    src="/assets/vanity/bc25/icons/tumblr.png"
                    alt="Tumblr link"
                  />
                </a>
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://x.com/ModFestEvent"
                  target="_blank"
                >
                  <img src="/assets/vanity/bc25/icons/x.png" alt="X link" />
                </a>
                <div className="w-0.5 h-auto rounded-full bg-black mx-1.5 my-0">
                </div>
                <a
                  className="nav-link nav-icon clickable-vanity"
                  href="https://discord.gg/gn543Ee"
                  target="_blank"
                >
                  <img
                    className="!h-[1.6] !w-[1.6]"
                    src="/assets/vanity/bc25/icons/discord.png"
                    alt="Discord server invite"
                  />
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div className="w-full bg-[#86dbfe] bg-[url(/assets/vanity/bc25/sprites/gradient.png)] h-6 mt-2 bg-repeat-x bg-contain pixelated" />
      </div>
      <div className="flex flex-col bg-[url(/assets/vanity/bc25/sprites/clouds.png)] bg-cover bg-repeat-x pixelated slide">
        <img
          src="/assets/vanity/bc25/Logo_Opening.png"
          className=" w-56 pixelated pt-12 max-w-4xl m-[auto] hover"
          alt=""
        />
        <img
          src="/assets/vanity/bc25/bc25_logo.png"
          className="w-full pixelated px-4 -mt-8 max-w-4xl m-[auto] hover"
          alt=""
        />
        <div class="justify-center items-center flex flex-col md:flex-row gap-4 mb-24">
          {(event.phase === "planning" || event.phase === "modding") &&
            (
              <a
                href="https://discord.gg/gn543Ee"
                target="_blank"
                class="button"
              >
                Register on Discord!
              </a>
            )}
          {event.phase === "showcase" && event.modpack &&
            (
              <a
                href={event.modpack}
                target="_blank"
                class="button"
              >
                Play!
              </a>
            )}
          {event.phase === "complete" && event.modpack &&
            (
              <a
                href={event.modpack}
                target="_blank"
                class="button"
              >
                Download Modpack
              </a>
            )}
          {submissions.length > 0 &&
            (
              <a href={`/${event.id}/submissions`} class="button">
                View Submissions
              </a>
            )}
          {!!schedule && schedule.length > 0 && (
            <a href="#schedule" class="button">
              View Schedule
            </a>
          )}
        </div>
      </div>
      <div className="bg-[#185090] bg-repeat bg-[auto_96px] bg-[center_top_48px] pixelated -mb-20">
        <div className="w-full bg-[url(/assets/vanity/bc25/sprites/wave.png)] h-[48px] bg-repeat-x bg-contain pixelated slide" />
        <img
          src="/assets/vanity/bc25/island.apng"
          alt="the volcano island spinning"
          className="pixelated w-6xl -translate-y-[20%] mx-auto"
        />
      </div>
      <div className="bg-[url(assets/vanity/bc25/sprites/water_bg.png)] bg-repeat bg-[auto_96px] bg-[center_top] pixelated pb-24">
        <div className="flex flex-col gap-4 max-w-4xl m-[auto] pt-[32px] text-sm">
          <article className="card flex flex-col gap-3 w-auto mx-auto">
            <div className="flex justify-center gap-3 flex-row flex-wrap">
              <audio
                src="/assets/vanity/bc25/dormant.wav"
                className="audio-button"
                controls
                loop
              />
              <a href="/bc25" className="button flex items-center">
                Classic Site
              </a>
              <a
                href="https://www.youtube.com/watch?v=QWKwrW-VozI"
                className="button flex items-center"
                target="_blank"
              >
                Watch Trailer
              </a>
            </div>
          </article>
          <MarkdownBlocks content={content} />
          {schedule && schedule.length > 0
            ? <Schedule schedule={schedule} users={users}></Schedule>
            : null}
        </div>
      </div>
    </div>
  );
}
