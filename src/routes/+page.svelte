<script lang="ts">
    import type {LayoutData} from './$types';

    export let data: LayoutData;
    export let {events} = data
</script>

<div class="page">
    {#if !events || events.length === 0}
        <h2>Loading ModFest events...</h2>
    {:else}
        {#each events.filter((x) => x.id !== 'carnival') as event}
            <a href="/{event.id}" class="card cover-card clickable" style="background-color: #{event.colors.secondary}">
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
                </div>
            </a>
        {/each}
    {/if}
</div>
