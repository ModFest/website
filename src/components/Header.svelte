<script lang="ts">
	import logo from '$assets/logo/modfest.svg';
	import blueskyLogo from '$assets/logo/bluesky.svg';
	import discordLogo from '$assets/logo/discord.svg';
	import xLogo from '$assets/logo/x.svg';
	import tumblrLogo from '$assets/logo/tumblr.svg';
	import mastodonLogo from '$assets/logo/mastodon.svg';
	import githubLogo from '$assets/logo/github.svg';
	import modrinthLogo from '$assets/logo/modrinth.svg';
</script>

<header>
	<nav class="card mt-4 flex flex-col gap-2">
		<div class="flex flex-col sm:flex-row justify-start items-center gap-2">
			<a class="nav-link flex h-12 gap-2 no-underline clickable" href="/">
				<img src={logo} class="h-10 object-contain" alt="ModFest Logo" />
				<div class="text-base sm:text-3xl font-title text-mf-heading">ModFest</div>
			</a>

			<div class="grow" />
			<div class="flex flex-wrap gap-1">
				<a class="nav-link nav-icon clickable" href="https://github.com/ModFest" target="_blank">
					<img src={githubLogo} alt="GitHub link" />
				</a>
				<a class="nav-link nav-icon clickable" href="https://modrinth.com/organization/modfest" target="_blank">
					<img src={modrinthLogo} alt="Modrinth link" />
				</a>
				<div class="w-0.5 h-auto rounded-full bg-mf-text mx-1.5 my-0"></div>
				<a class="nav-link nav-icon clickable" href="https://floss.social/@modfest" rel="me" target="_blank">
					<img src={mastodonLogo} alt="Mastodon link" />
				</a>
				<a class="nav-link nav-icon clickable" href="https://bsky.app/profile/modfest.net" target="_blank">
					<img src={blueskyLogo} alt="Bluesky link" />
				</a>
				<a class="nav-link nav-icon clickable" href="https://tumblr.com/modfest" target="_blank">
					<img src={tumblrLogo} alt="Tumblr link" />
				</a>
				<a class="nav-link nav-icon clickable" href="https://x.com/ModFestEvent" target="_blank">
					<img src={xLogo} alt="X link" />
				</a>
				<div class="w-0.5 h-auto rounded-full bg-mf-text mx-1.5 my-0"></div>
				<a class="nav-link nav-icon clickable" href="https://discord.gg/gn543Ee" target="_blank">
					<img class="!h-[1.6] !w-[1.6]" src={discordLogo} alt="Discord server invite" />
				</a>
			</div>
		</div>
	</nav>
</header>