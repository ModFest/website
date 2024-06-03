<script lang="ts">
    import type {LayoutData} from './$types';
    import SvelteMarkdown from 'svelte-markdown'

    export let data: LayoutData;
    export let {event, submissionsCount} = data
</script>

{#if event}

    <div class="card cover-card" style="background-color: #{event.colors.secondary}">
        <img
                class="cover-image"
                src="{event.images.background}"
                alt="{event.name} cover image"
                aria-hidden="true"
        />
        <div class="cover-content">
            <img
                    class="logo-image"
                    src="{event.images.wordmark}"
                    alt="{event.name} wordmark"
                    aria-hidden="true"
            />
            <span class="event-subtitle">{event.subtitle}</span>
        </div>
    </div>
    <div class="center card-spacing">
        {#if event.phase === 'planning' || event.phase === 'modding'}
            <a href="https://discord.gg/gn543Ee" target="_blank" class="button clickable">Register on Discord!</a>
        {:else if event.phase === 'showcase'}
            {#if event.modpack}
                <a href="{event.modpack}" target="_blank" class="button clickable">Play!</a>
            {/if}
        {:else if event.phase === 'complete'}
            {#if event.modpack}
                <a href="{event.modpack}" target="_blank" class="button clickable">Download Modpack</a>
            {/if}
        {/if}
        {#if submissionsCount && submissionsCount > 0}
            <a href="/{event.id}/submissions" class="button clickable">View Submissions</a>
        {/if}
    </div>

    {#if event.description }
        {#each event.description as descriptionItem}
            {#if descriptionItem.type === 'markdown' && descriptionItem.content}
                <div class="card">
                    <SvelteMarkdown source="{descriptionItem.content.markdown}"/>
                </div>
            {/if}
        {/each}
    {/if}
{:else}
    <p>Could not find event.</p>
{/if}


<style>
</style>