import { RenderOptions } from "@deno/gfm";
import * as path from "jsr:@std/path";
import {
  Event,
  ModrinthData,
  OtherData,
  Submission,
  User,
} from "./types.d.tsx";
import { getCookies } from "$std/http/cookie.ts";
import { AlbumProps } from "../components/Album.tsx";

export const markdownRenderOptions: RenderOptions = {
  allowedTags: ["center"],
};

export async function getPagesMarkdown(page: string) {
  try {
    return await Deno.readTextFile(path.format({
      dir: `${Deno.cwd()}/static/assets/pages`,
      ext: ".md",
      name: page,
    }));
  } catch (_e) {
    return "";
  }
}

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

export function getJsonForCredits(
  title: string,
  people: string[],
  users: User[],
) {
  const names = new Array<string>();
  people.forEach((id) =>
    names.push((users!.find((u) => u.id === id) || { name: "Null" }).name)
  );

  const creditEntry = {
    "title": title,
    "names": names,
  };

  return creditEntry;
}

export function copyJsonForCredits(
  title: string,
  people: string[],
  users: User[],
) {
  navigator.clipboard.writeText(
    JSON.stringify(getJsonForCredits(title, people, users), null, 4),
  );
}

export function getDevtools(req: Request) {
  const cookies = getCookies(req.headers);
  return cookies.devtools === "true";
}

export function parseSoundtrackMarkdown(raw: string) {
  // WE NEED TO SWITCH TO MDX DESPERATELY.

  const data: AlbumProps = {
    title: "",
    iconUrl: "",
    themeColour: "",
    links: [],
  };

  const titleRegex = /\#SOUNDTRACKTITLE{(.*?)\}/;
  const titleMatches = raw.match(titleRegex);
  const coverRegex = /\#SOUNDTRACKCOVER{(.*?)\}/;
  const coverMatches = raw.match(coverRegex);
  const colourRegex = /\#SOUNDTRACKCOLOUR{(.*?)\}/;
  const colourMatches = raw.match(colourRegex);
  const bandcampRegex = /\#SOUNDTRACKBANDCAMP{(.*?)\}/;
  const bandcampMatches = raw.match(bandcampRegex);
  const spotifyRegex = /\#SOUNDTRACKSPOTIFY{(.*?)\}/;
  const spotifyMatches = raw.match(spotifyRegex);
  const appleMusicRegex = /\#SOUNDTRACKAPPLEMUSIC{(.*?)\}/;
  const appleMusicMatches = raw.match(appleMusicRegex);

  data.title = titleMatches
    ? titleMatches[1].replaceAll("_", " ")
    : "Title not found";
  data.iconUrl = coverMatches ? coverMatches[1] : undefined;
  data.themeColour = colourMatches ? colourMatches[1] : undefined;
  data.links?.push({
    title: "Bandcamp",
    to: bandcampMatches ? bandcampMatches[1] : "#",
  });
  data.links?.push({
    title: "Spotify",
    to: spotifyMatches ? spotifyMatches[1] : "#",
  });
  data.links?.push({
    title: "Apple Music",
    to: appleMusicMatches ? appleMusicMatches[1] : "#",
  });

  return {
    "data": data,
    html: raw
      .replace("#SOUNDTRACK", "")
      .replace(titleRegex, "")
      .replace(coverRegex, "")
      .replace(colourRegex, "")
      .replace(bandcampRegex, "")
      .replace(spotifyRegex, "")
      .replace(appleMusicRegex, ""),
  };
}
