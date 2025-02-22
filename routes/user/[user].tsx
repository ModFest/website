import { RouteContext } from "$fresh/server.ts";

import { formatPlural, getLink } from "../../lib/helpers.tsx";
import { fetchUser, fetchUserSubmissions } from "../../lib/platform-api.tsx";
import { Submission } from "../../lib/types.d.tsx";

export default async function User(_req: Request, ctx: RouteContext) {
  const user = await fetchUser(fetch, ctx.params.user);
  const submissions = await fetchUserSubmissions(fetch, ctx.params.user)
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
        <div class="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {submissions.map((submission: Submission, submissionIndex) => (
            <a
              class="shadow-(--shadow-mf-card) rounded-2xl bg-mf-card overflow-hidden text-[unset] clickable"
              key={submissionIndex}
              href={getLink(submission)}
              target="_blank"
            >
              <div class="w-full bg-mf-unknown h-40 overflow-hidden z-[5]">
                {submission.images && submission.images.screenshot && (
                  <img
                    class="w-full h-40 object-cover"
                    src={submission.images.screenshot}
                    alt="Gallery image for {submission.name}"
                  />
                )}
              </div>
              <div class="p-4 pt-3 self-center">
                {submission.images && submission.images.icon && (
                  <div class="w-24 h-24 object-contain rounded-2xl border-mf-card border-4 border-solid mt-[-4rem] bg-mf-unknown overflow-hidden z-10 absolute">
                    <img
                      class="w-24 h-24 pixelated"
                      src={submission.images.icon}
                      alt="Icon for {submission.name}"
                    />
                  </div>
                )}
                <div
                  class={submission.images && submission.images.icon
                    ? "ml-[7.25rem]"
                    : ""}
                >
                  <h3 class="m-0 text-mf-heading">{submission.name}</h3>
                </div>
                <p className="m-0 mt-2 text-mf-heading">
                  {submission.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
