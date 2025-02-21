declare interface User {
	id: string;
	slug: string;
	name: string;
	pronouns: string;
	modrinthId: string;
	discordId: string;
	bio: string;
	icon: string;
	badges: Set<string>;
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

declare type Phase = 'planning' | 'modding' | 'building' | 'showcase' | 'complete';

declare interface DateRange {
	name: string;
	phase: Phase;
	description?: string;
	start: Date;
	end: Date;
}

declare interface EventImages {
	full: string;
	transparent: string;
	wordmark: string;
	background: string;
}

declare interface EventColors {
	primary: string;
	secondary: string;
}

declare interface EventDiscordRoles {
	participant: string;
	award: string;
}

declare type EventDescriptionItem = MarkdownDescriptionItem | UnknownDescriptionItem;

declare interface MarkdownDescriptionItem {
	type: 'markdown';
	content: {
		markdown: string;
	};
}

declare interface UnknownDescriptionItem {
	type: string;
	content: object;
}

declare interface Badge {
	id: string;
	name: string;
	icon: string;
	description: string;
}

declare interface Submission {
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

declare interface ModrinthData {
	type: 'modrinth';
	project_id: string;
	version_id: string;
}

declare interface GitHubData {
	type: 'github';
	namespace: string;
	repo: string;
}

declare interface UnknownData {
	type: 'unknown';
}

declare interface SubmissionImages {
	icon: string;
	screenshot: string;
}

declare interface SubmissionAwards {
	theme: Set<string>;
	extra: Set<string>;
}
