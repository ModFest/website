<script lang="ts">
    import type {LayoutData} from './$types';

    export let data: LayoutData;
    export let {event} = data
</script>

<div class="card" style="background-color: {event.background_color}">
    <img
            class="cover-image"
            src="/assets/event/{event.id}/cover.png"
            alt="{event.name} cover image"
            aria-hidden="true"
    />
</div>
{#if !event.submissions_open}
    <div class="center card-spacing">
        <a href="/{event.id}/submissions" class="button clickable">View Submissions</a>
    </div>
{/if}

{#if event.id === 'singularity'}
    <div class="card">
        <h1>Introduction</h1>
        <p>
            ModFest: Singularity is a Minecraft modding event that will run from <b>Saturday, August 13th</b
        >
            thru <b>Sunday, August 21st, 2022</b>.
        </p>
        <p>
            As always, ModFest is a great excuse to try something new or flex your modding abilities.
            ModFest: Singularity is hosted in partnership with <a
                href="https://quiltmc.org/"
                target="_blank">Quilt</a
        >
            and
            <a href="https://modrinth.com/" target="_blank">Modrinth</a>.
        </p>
    </div>
    <div class="card">
        <h1>Theme</h1>
        <p>
            For ModFest: Singularity, your mod <b>must</b> only have ONE feature. Focus all of your effort throughout
            the week into polishing and perfecting one feature into the best you can do. What counts as one feature
            may be fuzzy; if you can convince the organizers it's one feature, then it's a valid submission.
        </p>
    </div>
    <div class="card">
        <h1>Rules</h1>
        <ul>
            <li>Mods must only have one feature (see Theme section above)</li>
            <li>
                Mods must be compatible with the <a href="https://quiltmc.org/" target="_blank">Quilt</a> mod loader
                and Minecraft 1.19.2
            </li>
            <li>Mods cannot cause serious compatibility issues with other submissions</li>
            <li>
                Mods must be created between the beginning of August 13th UTC and the end of August 21st UTC.
            </li>
            <li>
                Mods must be submitted via a public or unlisted project on <a
                    href="https://modrinth.com/"
                    target="_blank">Modrinth</a
            >.
            </li>
        </ul>
    </div>
    <div class="card">
        <h1>Register</h1>
        <p>
            In order to participate in ModFest: Singularity, join our <a
                href="https://discord.gg/gn543Ee"
                target="_blank">Discord server</a
        >
            and use the <code>/register</code> command or click the button in the #welcome channel.
        </p>
    </div>
{:else if event.id === '1.20'}
    <div class="card">
        <h1>Introduction</h1>
        <p>
            ModFest 1.20 is a Minecraft modding event that ran from <b>Monday, December 18th, 2023</b
        >
            thru <b>Sunday, December 31st, 2023</b>.
        </p>
        <p>
            As always, ModFest is a great excuse to try something new or flex your modding abilities.
            ModFest 1.20 is hosted in partnership with <a href="https://modrinth.com/" target="_blank">Modrinth</a>.
        </p>
    </div>
    <div class="card">
        <h1>Showcase</h1>
        <p>
            The modding period has concluded! We will be opening the showcase server to the public on <strong>February
            10th, 2023</strong>.
            Please stay tuned to our social media; we will be announcing exactly when the modpack and server will go
            live, as well as how to vote for mods that fit different categories!
        </p>
        <p>
            The voting period will run for two weeks, and the showcase server will continue to be up through that time.
        </p>
        {#if true}
            <p><strong>Check back here on February 10th for details on how you can join the server!</strong></p>
        {:else}
            <p>To check it out, install the <a href="https://modrinth.com/project/modfest-1.20" target="_blank">ModFest
                1.20 modpack</a> with your favorite supported launcher (we recommend the <a
                    href="https://modrinth.com/app" target="_blank">Modrinth App</a> or <a
                    href="https://prismlauncher.org/" target="_blank">Prism Launcher</a>) and join the server in the
                Multiplayer list.</p>
            <p>Check out the booths, and make sure to vote for the mods that best fit each category!</p>
        {/if}
    </div>
    <div class="card">
        <h1>Theme</h1>
        <p>
            For ModFest 1.20, we encourage your mod to follow our central theme, <strong>Sky and Sea</strong>.
            The theme is open to interpretation; try to come up with something interesting!
        </p>
    </div>
    <div class="card">
        <h1>Rules</h1>
        <ul>
            <li>
                Mods must be compatible with the <a href="https://fabricmc.net/" target="_blank">Fabric</a> mod loader
                and Minecraft 1.20.4
            </li>
            <li>Mods cannot cause serious compatibility issues with other submissions</li>
            <li>
                Mods must be created between the beginning of December 18th UTC and the end of December 31st UTC, 2023.
            </li>
            <li>
                Mods must be submitted via a public or unlisted project on <a
                    href="https://modrinth.com/"
                    target="_blank">Modrinth</a
            >. Submissions are accepted through a bot in our <a href="https://discord.gg/gn543Ee" target="_blank">Discord
                server</a>.
            </li>
        </ul>
    </div>
    <div class="card">
        <h1>Register</h1>
        <p>
            In order to participate in ModFest 1.20, join our <a
                href="https://discord.gg/gn543Ee"
                target="_blank">Discord server</a
        >
            and use the <code>/register</code> command or click the button in the #welcome channel.
        </p>
    </div>
{:else}
    <div class="card">
        <h1>No information available for this event yet!</h1>
    </div>
{/if}

<style>
</style>