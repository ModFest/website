<script lang="ts">
    import type {LayoutData} from './$types';

    export let data: LayoutData;
    export let {events} = data
</script>

<div class="flex flex-col gap-4 mb-16">
    {#if !events || events.length === 0}
        <h2>Loading ModFest events...</h2>
    {:else}
        {#each events as event}
            <a href="/{event.id}" class="card p-0 overflow-hidden relative aspect-[5/2] clickable" style="background-color: #{event.colors.secondary}">
                <img
                        class="absolute w-full h-full inset-0 object-cover p-0"
                        src="{event.images.background}"
                        alt="{event.name} cover image"
                        aria-hidden="true"
                />
                <div class="absolute inset-0 z-[1] flex flex-col items-center justify-center p-8 gap-4">
                    <img
                            class="h-[50%]"
                            src="{event.images.wordmark}"
                            alt="{event.name} wordmark"
                            aria-hidden="true"
                    />
                </div>
            </a>
        {/each}
    {/if}
</div>
