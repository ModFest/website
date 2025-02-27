import { RouteContext } from "$fresh/server.ts";

import { formatPlural, getDate } from "../../lib/helpers.tsx";
import {
  fetchEvents,
  fetchUser,
  fetchUserSubmissions,
} from "../../lib/platform-api.tsx";
import { Event, Submission } from "../../lib/types.d.tsx";
import {
  Submission as SubmissionComponent,
} from "../../components/Submission.tsx";

export default async function User(_req: Request, ctx: RouteContext) {
  const user = await fetchUser(fetch, ctx.params.user);
  const events = await fetchEvents(fetch);

  if (!user.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchUserSubmissions(fetch, ctx.params.user);

  return (
    <div class="flex flex-col gap-4 mb-16">
      {user && (
        <div class="card flex flex-row gap-4">
          <div>
            <img
              alt={`Icon for user ${user.name}`}
              class="h-16 bg-mf-unknown w-16 rounded-full"
              src={user.icon}
            />
          </div>
          <div class="flex-grow self-center">
            <span class="flex flex-row items-end gap-2">
              <h1 class="m-0">{user.name}</h1>
              {user.pronouns && <p class="m-0 text-sm">({user.pronouns})</p>}
            </span>
            {submissions
              ? (
                <p>
                  {user.name} has submitted{" "}
                  {formatPlural("project", submissions.length)}{" "}
                  to ModFest events.
                </p>
              )
              : (
                <p>
                  {user.name} has not participated in a ModFest event yet.
                </p>
              )}
          </div>
        </div>
      )}
      {user && submissions && (
        <>
          <div class="flex flex-col items-center gap-4">
            <h1 class="">Event Submissions</h1>
            {events.sort((a: Event, b: Event) =>
              getDate(a) > getDate(b) ? 1 : -1
            ).reverse()
              .filter((event: Event) => {
                return submissions.filter((submission: Submission) =>
                  submission.event === event.id
                ).length > 0;
              }).map((event: Event, eventIndex) => (
                <div
                  class="card flex flex-col gap-2 w-full"
                  style={`--event-${
                    event.id.replace(".", "-")
                  }-coloured: #${event.colors.secondary}`}
                  key={eventIndex}
                >
                  <h2>{event.name}</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {submissions.filter((submission: Submission) => {
                      return submission.event === event.id;
                    }).sort((a: Submission, b: Submission) =>
                      a.name.localeCompare(b.name)
                    ).map((submission: Submission, submissionIndex) => (
                      <SubmissionComponent
                        className="!bg-mf-bg"
                        submission={submission}
                        key={submissionIndex}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
