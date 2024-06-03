<script lang="ts">
    import ModFestLogo from '$assets/logo/modfest.svg?raw';
    import DiscordIcon from '$assets/logo/discord.svg?raw';
    import XSocialIcon from '$assets/logo/x.svg?raw';
    import CohostIcon from '$assets/logo/cohost.svg?raw';
    import TumblrIcon from '$assets/logo/tumblr.svg?raw';
    import MastodonIcon from '$assets/logo/mastodon.svg?raw';
    import GithubIcon from '$assets/logo/github.svg?raw';
    import ModrinthIcon from '$assets/logo/modrinth.svg?raw';
    import WavyThing from '$assets/wavy-thing.svg?raw';
</script>

<header>
    <nav>
        <div class="header-background">
            {@html WavyThing}
        </div>
        <div class="contents">
            <div class="main">
                <a class="link logo clickable" href="/">
                    {@html ModFestLogo}
                    <div class="text">ModFest</div>
                </a>

                <div class="spacer"/>
                <div class="links">
                    <a class="link icon clickable" href="https://github.com/ModFest" target="_blank">
                        {@html GithubIcon}
                    </a>
                    <a class="link icon clickable" href="https://modrinth.com/organization/modfest" target="_blank">
                        {@html ModrinthIcon}
                    </a>
                    <a class="link icon clickable" href="https://x.com/ModFestEvent" target="_blank">
                        {@html XSocialIcon}
                    </a>
                    <a class="link icon clickable" href="https://cohost.org/modfest" target="_blank">
                        {@html CohostIcon}
                    </a>
                    <a class="link icon clickable" href="https://tumblr.com/modfest" target="_blank">
                        {@html TumblrIcon}
                    </a>
                    <a class="link icon clickable" href="https://floss.social/@modfest" rel="me" target="_blank">
                        {@html MastodonIcon}
                    </a>
                    <a class="link icon clickable" href="https://discord.gg/gn543Ee" target="_blank">
                        {@html DiscordIcon}
                    </a>
                </div>
            </div>
        </div>
    </nav>
</header>

<style>
    nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
        margin-bottom: calc(var(--_background-offset) + 2rem);

        --_background-offset: 2rem;
    }

    nav .main {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 0.5rem;
        padding-block: 2rem;
    }

    .logo {
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
    }

    .logo :global(svg) {
        height: 2.5rem;
        object-fit: contain;
    }

    .logo {
        height: 2.5rem;
    }

    .text {
        font-size: 1.75rem;
        font-family: 'Fredoka One';
        color: var(--heading-color);
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

    a.link.icon :global(svg) {
        height: 1.25rem;
        width: 1.25rem;
        object-fit: contain;
    }

    .header-background {
        position: absolute;
        inset: 0;
        z-index: -1;
    }
    .header-background :global(svg) {
        position: absolute;
        top: 100%;
        height: 3rem;
        width: 100%;
        overflow: visible;
        stroke-width: 0.75;
    }

    .header-background:before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--event-background-color);
    }

</style>
