<script lang="ts">
	import logo from './logo.svg';
	import discordLogo from './discord.svg';
	import twitterLogo from './twitter.svg';
	import githubLogo from './github.svg';
	import modrinthLogo from './modrinth.svg';
</script>

<header>
	<nav class="card">
		<a class="link logo" href="/">
			<img src={logo} alt="ModFest Logo" />
			<div class="text">ModFest</div>
		</a>
		<div class="spacer" />
		<div class="links">
			<a class="link icon" href="https://github.com/ModFest" target="_blank">
				<img src={githubLogo} alt="GitHub link" />
			</a>
			<a class="link icon" href="https://modrinth.com/user/ModFest" target="_blank">
				<img src={modrinthLogo} alt="Modrinth link" />
			</a>
			<a class="link icon" href="https://twitter.com/ModFestEvent" target="_blank">
				<img src={twitterLogo} alt="Twitter link" />
			</a>
			<a class="link icon" href="https://discord.gg/gn543Ee" target="_blank">
				<img src={discordLogo} alt="Discord server invite" />
			</a>
		</div>
	</nav>
</header>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}

    .logo {
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
    }

	.logo img {
		height: 2.5rem;
		object-fit: contain;
	}

	.logo {
		height: 2.5rem;
	}

	.text {
		font-size: 1.75rem;
		font-family: 'Fredoka One';
		color: var(--white);
	}

	@media (max-width: 600px) {
		.text {
			font-size: 1rem;
		}
	}

	.spacer {
		flex-grow: 1;
	}

	.links {
		display: flex;
		gap: 0.25rem;
	}

	a.link {
		padding: 0.5rem;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a.link:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}

	a.link:active,
	a.link:focus {
		background-color: rgba(0, 0, 0, 0.3);
	}

	a.link.icon img {
		height: 1.25rem;
		width: 1.25rem;
		object-fit: contain;
	}
</style>
