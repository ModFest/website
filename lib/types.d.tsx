export declare interface User {
  id: string;
  slug: string;
  name: string;
  pronouns: string;
  modrinth_id: string;
  discord_id: string;
  bio: string;
  icon: string;
  registered: Set<string>;
  minecraft_accounts: Set<string>;
}

export declare interface Event {
  id: string;
  name: string;
  subtitle: string;
  phase: Phase;
  dates: DateRange[];
  images: EventImages;
  colors: EventColors;
  discord_roles: EventDiscordRoles;
  mod_loader: string;
  minecraft_version: string;
  modpack: string;
}

export declare type Phase =
  | "planning"
  | "modding"
  | "building"
  | "showcase"
  | "complete";

export declare interface DateRange {
  name: string;
  phase: Phase;
  description?: string;
  start: string; // ISO-8086 formatted string
  end: string; // ISO-8086 formatted string
}

export declare interface EventImages {
  full: string;
  transparent: string;
  wordmark: string;
  background: string;
}

export declare interface EventColors {
  primary: string;
  secondary: string;
}

export declare interface EventDiscordRoles {
  participant: string;
  award: string;
}

export declare interface Submission {
  id: string;
  name: string;
  event?: string;
  description: string;
  authors: string[];
  platform: ModrinthData | GitHubData | OtherData | undefined;
  images: SubmissionImages;
  download: string;
  source: string;
  awards: SubmissionAwards;
}

export declare interface ScheduleEntryData {
  id: string;
  event: string;
  title: string | undefined;
  type: string | undefined;
  location: string | undefined;
  description: string | undefined;
  authors: string[];
  /**
   * The start time of the schedule entry, ISO-8086 formatted string
   */
  start: string | null | undefined;
  /**
   * The end time of the schedule entry, ISO-8086 formatted string
   */
  end: string | null | undefined;
}

export declare interface ModrinthData {
  type: "modrinth";
  project_id: string;
  version_id: string;
}

export declare interface OtherData {
  type: "other";
  homepage_url: string;
  download_url: string;
}

export declare interface GitHubData {
  type: "github";
  namespace: string;
  repo: string;
}

export declare interface SubmissionImages {
  icon: string;
  screenshot: string;
}

export declare interface SubmissionAwards {
  theme: Set<string>;
  extra: Set<string>;
}
