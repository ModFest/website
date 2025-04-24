import { RouteContext } from "$fresh/server.ts";

import { fetchEvent, fetchEventSchedule, fetchEventSubmissions, fetchUser } from "../lib/platform-api.tsx";
import { getPagesMarkdown } from "../lib/helpers.tsx";
import { MarkdownBlocks } from "../components/MarkdownBlocks.tsx";
import { ScheduleEntryData, User } from "../lib/types.d.tsx";
import UserLink from "../components/UserLink.tsx";
import FormattedDateTime from "../components/DateTime.tsx";

export default async function Event(_req: Request, ctx: RouteContext) {
  const event = await fetchEvent(fetch, ctx.params.event);

  if (!event.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchEventSubmissions(fetch, ctx.params.event);
  const schedule = await fetchEventSchedule(fetch, ctx.params.event);
  const users = await Promise.all(
      [...new Set(schedule.flatMap((s) => s.authors))].map((author) =>
        fetchUser(fetch, author)
      ),
    )
    
  const content = await getPagesMarkdown(`event/${ctx.params.event}`);

  return (
    <div
      class="flex flex-col gap-4 mb-16"
      style={`--color-mf-link: #${event.colors.primary}; --color-mf-event-background: #${event.colors.secondary}`}
    >
      <div
        class="card p-0 overflow-hidden relative aspect-[5/2]"
        style={`background-color: #${event.colors.secondary}`}
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
        {(event.phase === "planning" || event.phase === "modding") &&
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
        {submissions.length > 0 &&
          (
            <a href={`/${event.id}/submissions`} class="button clickable">
              View Submissions
            </a>
          )}
      </div>
      
      {schedule && schedule.length > 0 ? <Schedule schedule={schedule} users={users}></Schedule> : null}
      <MarkdownBlocks content={content} />
    </div>
  );
}

function Schedule(props: {schedule: ScheduleEntryData[], users?: User[]}) {
  return <div class="card">
      <h1>Event Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>
              Event
            </th>
            <th>
              Type
            </th>
            <th>
              Location
            </th>
            <th>
              Start
            </th>
            <th>
              End
            </th>
            <th>
              Hosts
            </th>
            <th>
              Summary
            </th>
          </tr>
        </thead>
        <tbody>
          {props.schedule.map(entry => 
            <tr key={entry.id}>
              <td>
                {entry.title}
              </td>
              <td>
                {entry.type}
              </td>
              <td>
                {entry.location}
              </td>
              <td>
                {entry.start ? <FormattedDateTime time={entry.start}></FormattedDateTime> : "-"}
              </td>
              <td>
                {entry.end ? <FormattedDateTime time={entry.end} timeOnly></FormattedDateTime> : "-"}
              </td>
              <td>
                {
                // TODO split off into more generic stuff
                  entry.authors.map(author => <UserLink key={author} id={author} users={props.users}></UserLink>)
                  .map((userElement, index) => {
                    let join = "";
                    if (index === entry.authors.length - 1) {
                      if (entry.authors.length > 2) {
                        join = ", and ";
                      } else if (entry.authors.length === 2) {
                        join = " and ";
                      }
                    } else if (index > 0) {
                      join = ", ";
                    }
                    return (
                        <span key={index}>
                      <span>{join}</span>
                          {userElement}
                    </span>
                    );
                  })
                }
              </td>
              <td>
                {entry.description}
              </td>
            </tr>
          )}
        </tbody>
      </table>
  </div>
}