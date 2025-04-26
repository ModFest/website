import { copyJsonForCredits, getJsonForCredits } from "../lib/helpers.tsx";
import { Submission, User } from "../lib/types.d.tsx";

function copyAllCredits(submissions: Submission[], users: User[]) {
  const credits = {
    "discipline": "Showcase Teams",
    "titles": new Array<{
      "title": string;
      "names": string[];
    }>(),
  };

  for (const submission of submissions) {
    credits.titles.push(
      getJsonForCredits(submission.name, submission.authors, users),
    );
  }

  navigator.clipboard.writeText(
    JSON.stringify(credits, null, 4),
  );
}

function copyPings(authors: string[], users: User[]) {
  const pings = new Array<string>();
  authors.forEach((id) =>
    pings.push(
      `<@${
        (users!.find((u) => u.id === id) || { discord_id: "null" }).discord_id
      }>`,
    )
  );
  navigator.clipboard.writeText(pings.join(", "));
}

function setDevtools(value: boolean) {
  globalThis.location.href = `/dev/devtools?enabled=${value}`;
}

export default function CopyButton(
  props: { content: string; children: string },
) {
  return (
    <button
      type="button"
      class="w-fit"
      onClick={() => navigator.clipboard.writeText(props.content)}
    >
      {props.children}
    </button>
  );
}

export function CreditsGeneration(
  props: { name: string; authors: string[]; users: User[] },
) {
  return (
    <button
      type="button"
      class="w-fit"
      onClick={() => copyJsonForCredits(props.name, props.authors, props.users)}
    >
      Copy credits entry
    </button>
  );
}

export function FullCreditsGeneration(
  props: { submissions: Submission[]; users: User[] },
) {
  return (
    <button
      type="button"
      class="w-fit"
      onClick={() => copyAllCredits(props.submissions, props.users)}
    >
      Copy all submission credits
    </button>
  );
}

export function CopyPing(
  props: { authors: string[]; users: User[] },
) {
  return (
    <button
      type="button"
      class="w-fit"
      onClick={() => copyPings(props.authors, props.users)}
    >
      Copy pings
    </button>
  );
}

// Not really a 'copy' button. Don't really care.

export function DevtoolsButton(
  props: { devtoolsEnabled: boolean },
) {
  return (
    <button
      type="button"
      class="w-fit"
      onClick={() => setDevtools(!props.devtoolsEnabled)}
    >
      {!props.devtoolsEnabled ? "Enable" : "Disable"} devtools
    </button>
  );
}
