<script lang="ts">
    import '$styles/app.css';
    import type {PageData} from './$types';

    export let data: PageData;
    export let {
        user
    } = data

    export function getLink(submission: Submission) {
        if (submission.platform.type === 'modrinth') {
            const data = submission.platform as ModrinthData
            return `https://modrinth.com/project/${data.project_id}`
        }
    }
</script>

<div class="page">
    {#if user}
        <div class="card">
            <div class="icon">
                <img class="user-icon" src="{user.icon}">
            </div>
            <div class="content">
                <h1>{user.name}</h1>
                {#if user.submissions}
                    <p>
                        {user.name} has submitted {user.submissions.length} projects to ModFest events.
                    </p>
                {:else}
                    <p>
                        {user.name} has not participated in a ModFest event yet.
                    </p>
                {/if}
            </div>
        </div>
        {#if user.submissions}
            <div class="submissions">
                {#each user.submissions as submission}
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
                            </div>
                            <p>{submission.description}</p>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
    {/if}
</div>

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

    .card .icon .user-icon {
        height: 4rem;
        border-radius: 50%;
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
        margin-top: -5rem;
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
