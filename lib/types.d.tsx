export declare interface User {
  id: string;
  slug: string;
  name: string;
  pronouns: string;
  modrinthId: string;
  discordId: string;
  bio: string;
  icon: string;
  registered: Set<string>;
  submissions: Submission[] | null;
}

declare interface Event {
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
  description: EventDescriptionItem[];
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
  start: Date;
  end: Date;
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

export declare type EventDescriptionItem =
  | MarkdownDescriptionItem
  | UnknownDescriptionItem;

export declare interface MarkdownDescriptionItem {
  type: "markdown";
  content: {
    markdown: string;
  };
}

export declare interface UnknownDescriptionItem {
  type: string;
  content: object;
}

export declare interface Submission {
  id: string;
  name: string;
  description: string;
  authors: string[];
  platform: ModrinthData | GitHubData | UnknownData;
  images: SubmissionImages;
  download: string;
  source: string;
  awards: SubmissionAwards;
}

export declare interface ModrinthData {
  type: "modrinth";
  project_id: string;
  version_id: string;
}

export declare interface GitHubData {
  type: "github";
  namespace: string;
  repo: string;
}

export declare interface UnknownData {
  type: "unknown";
}

export declare interface SubmissionImages {
  icon: string;
  screenshot: string;
}

export declare interface SubmissionAwards {
  theme: Set<string>;
  extra: Set<string>;
}
