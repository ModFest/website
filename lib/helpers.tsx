import { RenderOptions } from "@deno/gfm";
import { Event, ModrinthData, OtherData, Submission } from "./types.d.tsx";

export const markdownRenderOptions: RenderOptions = {
  allowedTags: ["center"],
};

export function formatPlural(text: string, amount: number) {
  // i18n can be a future problem.
  return `${amount} ${amount === 1 ? text : text + "s"}`;
}

export function getLink(submission: Submission) {
  if (submission.platform?.type === "modrinth") {
    const data = submission.platform as ModrinthData;
    return `https://modrinth.com/project/${data.project_id}`;
  } else if (submission.platform?.type === "other") {
    const data = submission.platform as OtherData;
    if (data.homepage_url) {
      return `${data.homepage_url}`;
    }
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
