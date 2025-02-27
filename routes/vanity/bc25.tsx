import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { render } from "@deno/gfm";

import { fetchEvent, fetchEventSubmissions } from "../../lib/platform-api.tsx";
import { MarkdownDescriptionItem } from "../../lib/types.d.tsx";
import { asset, Head } from "$fresh/runtime.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default async function Event(_req: Request, ctx: RouteContext) {
  const event = await fetchEvent(fetch, "bc23");

  if (!event.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchEventSubmissions(fetch, "bc23");
  return (
    <div className="bg-[#86dbfe]">
      <Head>
        <link rel="stylesheet" href={asset("/assets/vanity/bc25/main.css")} />
      </Head>
      <div className="bg-[#222034]">
        <header className="max-w-4xl m-[auto]">
          <nav className="card mt-4 flex flex-col gap-2 relative">
            <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
              <a
                className="nav-link flex h-12 gap-2 no-underline clickable-vanity absolute left-0"
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
          className="w-full pixelated px-4 pb-24 -mt-8 max-w-4xl m-[auto] hover"
          alt=""
        />
      </div>
      <div className="bg-[#185090]">
        <div className="w-full bg-[url(/assets/vanity/bc25/sprites/wave.png)] h-10 bg-repeat-x bg-contain pixelated slide" />
        <div className="flex flex-col gap-4 max-w-4xl m-[auto] ">
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
      </div>
    </div>
  );
}
