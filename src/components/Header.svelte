<script lang="ts">
	import logo from '$assets/logo/modfest.svg';
	import discordLogo from '$assets/logo/discord.svg';
	import xLogo from '$assets/logo/x.svg';
	import cohostLogo from '$assets/logo/cohost.svg';
	import githubLogo from '$assets/logo/github.svg';
	import modrinthLogo from '$assets/logo/modrinth.svg';
</script>

<header>
	<nav class="card">
		<div class="main">
			<a class="link logo clickable" href="/">
				<img src={logo} alt="ModFest Logo" />
				<div class="text">ModFest</div>
			</a>

			<div class="spacer" />
			<div class="links">
				<a class="link icon clickable" href="https://github.com/ModFest" target="_blank">
					<img src={githubLogo} alt="GitHub link" />
				</a>
				<a class="link icon clickable" href="https://modrinth.com/user/ModFest" target="_blank">
					<img src={modrinthLogo} alt="Modrinth link" />
				</a>
				<a class="link icon clickable" href="https://x.com/ModFestEvent" target="_blank">
					<img src={xLogo} alt="X link" />
				</a>
				<a class="link icon clickable" href="https://cohost.org/modfest" target="_blank">
					<img src={cohostLogo} alt="Cohost link" />
				</a>
				<a class="link icon clickable" href="https://discord.gg/gn543Ee" target="_blank">
					<img src={discordLogo} alt="Discord server invite" />
				</a>
			</div>
		</div>
	</nav>
</header>

<style>
	nav {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	nav .main {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.5rem;
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
