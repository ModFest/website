<script lang="ts">
    import '$styles/app.css';
    import type {PageData} from './$types';

    export let data: PageData;
    export let {
        event,
        submissions,
        users
    } = data

    export let participants = new Set<string>()
    if (submissions) {
        submissions.forEach(submissions => {
            submissions.authors.forEach(author => participants.add(author));
        })
    }

    export function getLink(submission: Submission) {
        if (submission.platform.type === 'modrinth') {
            const data = submission.platform as ModrinthData
            return `https://modrinth.com/project/${data.project_id}`
        }
    }
</script>

{#if event && submissions && users}
    <a href="/{event.id}" class="card clickable dark-theme" style="background-color: #{event.colors.secondary}">
        <div class="icon">
            <img class="event-icon" src="{event.images.transparent}">
        </div>
        <div class="content">
            <h1>{event.name}</h1>
            <p>
                {event.name} {event.phase !== 'modding' ? 'has' : 'had'} a total of {submissions.length} submissions
                created by {participants.size}
                total modders{event.phase === 'modding' ? ' so far' : ''}.
            </p>
        </div>
    </a>
    <div class="submissions">
        {#each submissions as submission}
            <a class="submission clickable" href="{getLink(submission)}" target="_blank">
                <div class="header">
                    {#if submission.images && submission.images.screenshot}
                        <img
                                class="banner"
                                src={submission.images.screenshot}
                                alt="Gallery image for {submission.name}"
                        />
                    {/if}
                </div>
                <div class="content {submission.images && submission.images.icon ? 'has-icon' : ''}">
                    {#if submission.images && submission.images.icon}
                        <div class="icon">
                            <img src={submission.images.icon} alt="Icon for {submission.name}"/>
                        </div>
                    {/if}
                    <div class="title">
                        <h3>{submission.name}</h3>
                        by
                        {#each submission.authors as author, index}
                            {#if submission.authors.length > 1}
                                {#if index > 0}
                                    {#if submission.authors.length > 2 && index === submission.authors.length - 1}
                                        <span>, and</span>
                                    {:else if submission.authors.length === 2 && index === submission.authors.length - 1}
                                        <span>&nbsp;and</span>
                                    {:else if submission.authors.length > 1 && index > 0}
                                        <span>,</span>
                                    {/if}
                                {/if}
                            {/if}
                            {@const user = users.find(u => u.id === author)}
                            {#if user}
                                <a href="/user/{user.id}">{user.name}</a>
                            {:else}
                                {author}
                            {/if}
                        {/each}
                    </div>
                    <p>{submission.description}</p>
                </div>
            </a>
        {/each}
    </div>
{/if}

<style>
    .submissions {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    @media only screen and (max-width: 600px) {
        .submissions {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .card {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .card .icon .event-icon {
        height: 4rem;
    }

    .card .content {
        align-self: center;
    }

    .submission {
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        background-color: var(--card-color);
        overflow: hidden;
        color: unset;
    }

    .submission .content {
        padding: 1rem;
        padding-top: 0.75rem;
    }

    .submission .content h3 {
        margin: 0;
        color: var(--heading-color);
    }

    .submission .content p {
        margin: 0;
        margin-top: 0.5rem;
        color: var(--heading-color);
    }

    .submission .header {
        width: 100%;
        background-color: var(--unknown-color);
        height: 10rem;
        overflow: hidden;
        z-index: 5;
    }

    .submission .header .banner {
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }

    .submission .icon {
        width: 6rem;
        height: 6rem;
        object-fit: contain;
        border-radius: 1rem;
        border: 0.25rem solid var(--card-color);
        margin-top: -4rem;
        background-color: var(--unknown-color);
        overflow: hidden;
        z-index: 10;
        position: absolute;
    }

    .submission .icon img {
        width: 6rem;
        height: 6rem;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
    }

    .submission .has-icon .title {
        margin-left: 7.25rem;
    }
</style>
