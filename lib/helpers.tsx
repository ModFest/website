import { Event, ModrinthData, Submission } from "./types.d.tsx";

export function formatPlural(text: String, amount: Number) {
  // i18n can be a future problem.
  return `${amount} ${amount === 1 ? text : text + "s"}`;
}

export function getLink(submission: Submission) {
  if (submission.platform?.type === "modrinth") {
    const data = submission.platform as ModrinthData;
    return `https://modrinth.com/project/${data.project_id}`;
  }
}

export function getDate(event: Event): string {
  let startPhase = event.dates.find((d) => d.phase === "modding");
  if (!startPhase) {
    startPhase = event.dates.find((d) => d.phase === "planning");
  }
  if (!startPhase) {
    startPhase = event.dates[0];
  }
  return startPhase.start === undefined ? startPhase.end : startPhase.start;
}
