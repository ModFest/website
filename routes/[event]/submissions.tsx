import { RouteContext } from "$fresh/server.ts";

import {
  fetchEvent,
  fetchEventSubmissions,
  fetchUser,
} from "../../lib/platform-api.tsx";
import { formatPlural, getDevtools } from "../../lib/helpers.tsx";
import { Submission } from "../../lib/types.d.tsx";
import { Submission as SubmissionComponent } from "../../components/Submission.tsx";
import { FullCreditsGeneration } from "../../islands/CopyButton.tsx";

export default async function Submissions(_req: Request, ctx: RouteContext) {
  const event = await fetchEvent(fetch, ctx.params.event);

  if (!event.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchEventSubmissions(fetch, ctx.params.event);
  submissions.sort((a, b) => a?.name?.localeCompare(b?.name));
  // Fetch user data of all authors
  const users = await Promise.all(
    [...new Set(submissions.flatMap((s) => s.authors))].map((author) =>
      fetchUser(fetch, author)
    ),
  );
  const participants = new Set<string>();

  if (submissions) {
    submissions.forEach((submissions: Submission) => {
      submissions.authors.forEach((author) => participants.add(author));
    });
  }

  const devtools = getDevtools(_req);

  return (
    <div
      class="flex flex-col gap-4 mb-16"
      style={`--color-mf-link: #${event.colors.primary}; --color-mf-event-background: #${event.colors.secondary}`}
    >
      <a
        href={`/${event.id}`}
        class="card flex flex-row gap-4 clickable"
        style={`background-color: #${event.colors.secondary}`}
      >
        <div class="icon">
          <img
            alt={`Transparent icon for to ${event.name}`}
            class="h-16"
            src={event.images.transparent}
          />
        </div>
        <div>
          <h1
            style={{
              color: (event.id !== "bc23"
                ? "var(--color-mf-heading)"
                : "var(--color-mf-card)"),
            }}
          >
            {event.name}
          </h1>
          <p>
            {`${event.name} ${
              event.phase == "modding" ? "has" : "had"
            } a total of ${
              formatPlural("submission", submissions.length)
            } created by ${
              formatPlural(
                "modder",
                participants.size,
              )
            }${event.phase === "modding" ? " so far" : ""}.`}
          </p>
        </div>
      </a>
      {devtools &&
        <FullCreditsGeneration submissions={submissions} users={users} />}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {submissions.map((submission: Submission, submissionIndex) => (
          <SubmissionComponent
            submission={submission}
            users={users}
            key={submissionIndex}
            devtools={devtools}
          />
        ))}
      </div>
    </div>
  );
}
