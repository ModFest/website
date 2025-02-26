import { RouteContext } from "$fresh/server.ts";

import {
  fetchEvent,
  fetchEventSubmissions,
  fetchUser,
} from "../../lib/platform-api.tsx";
import { formatPlural, getLink } from "../../lib/helpers.tsx";
import { Submission } from "../../lib/types.d.tsx";
import { Submission as SubmissionComponent } from "../../components/Submission.tsx";

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
          <h1>{event.name}</h1>
          <p>
            {`${event.name} ${
              event.phase !== "modding" ? "has" : "had"
            } a total of ${
              formatPlural("submission", submissions.length)
            } created by ${
              formatPlural(
                "modder",
                participants.size,
              )
            }${event.phase === "modding" ? "so far" : ""}.`}
          </p>
        </div>
      </a>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {submissions.map((submission: Submission, submissionIndex) => (
          <>
            <SubmissionComponent
              submission={submission}
              users={users}
              key={submissionIndex}
            />
            <div
              class="shadow-(--shadow-mf-card) rounded-2xl bg-mf-card overflow-hidden text-[unset] clickable"
              key={submissionIndex}
              target="_blank"
            >
              <a href={getLink(submission)} target="_blank">
                <div class="w-full bg-mf-unknown h-40 overflow-hidden z-[5]">
                  {submission.images && submission.images.screenshot && (
                    <img
                      draggable={false}
                      class="w-full h-40 object-cover"
                      src={submission.images.screenshot}
                      alt={`Gallery image for ${submission.name}`}
                    />
                  )}
                  {submission.images && !submission.images.screenshot &&
                    submission.images.icon && (
                    <img
                      draggable={false}
                      class="w-full rotate-45 scale-[300%] opacity-95 pixelated h-40 object-cover"
                      src={submission.images.icon}
                      alt={`Icon for ${submission.name}`}
                    />
                  )}
                </div>
              </a>
              <div class="p-4 pt-3 self-center">
                {submission.images && submission.images.icon && (
                  <a href={getLink(submission)} target="_blank">
                    <div class="w-24 h-24 object-contain rounded-2xl border-mf-card border-4 border-solid mt-[-4rem] bg-mf-unknown overflow-hidden z-10 absolute">
                      <img
                        draggable={false}
                        class="w-24 h-24 pixelated"
                        src={submission.images.icon}
                        alt={`Icon for ${submission.name}`}
                      />
                    </div>
                  </a>
                )}
                <div
                  class={submission.images && submission.images.icon
                    ? "ml-[7.25rem]"
                    : ""}
                >
                  <a
                    href={getLink(submission)}
                    target="_blank"
                    style="text-decoration:none"
                  >
                    <h3 class="m-0 text-mf-heading">{submission.name}</h3>
                  </a>
                  {submission.authors.map((author, index) => {
                    const user = users.find((u) => u.id === author);
                    return user
                      ? (
                        <a
                          key={`${submissionIndex}-${index}`}
                          href={`/user/${user.id}`}
                        >
                          {user.name}
                        </a>
                      )
                      : author;
                  }).map((userElement, index) => {
                    let join = "";
                    if (index === submission.authors.length - 1) {
                      if (submission.authors.length > 2) {
                        join = ", and ";
                      } else if (submission.authors.length === 2) {
                        join = " and ";
                      }
                    } else if (index > 0) {
                      join = ", ";
                    }
                    return (
                      <span key={`${submissionIndex}-${index}`}>
                        <span>{join}</span>
                        {userElement}
                      </span>
                    );
                  })}
                </div>
                <p className="m-0 mt-2 text-mf-heading">
                  {submission.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
