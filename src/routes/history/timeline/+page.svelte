<script lang="ts">
    import '$styles/app.css';
    import type {PageData} from './$types';

    export let data: PageData;
    export let {
        events
    } = data

    export let earliestEvent = events ? events.slice().reverse()[0] : null
    export let origin = Math.floor(earliestEvent ? asUnix(new Date("2019-01-01T00:00:00.000Z")) : 0)

    export let years = [new Date("2019-01-01T00:00:00.000Z"), new Date("2020-01-01T00:00:00.000Z"), new Date("2021-01-01T00:00:00.000Z"), new Date("2022-01-01T00:00:00.000Z"), new Date("2023-01-01T00:00:00.000Z"), new Date("2024-01-01T00:00:00.000Z")]

    export function asUnix(date: Date): number {
        const time = (new Date(date).getTime() / 1_000_000_0).toFixed(0);
        console.log(time);
        return parseInt(time);
    }

    export function normalizePosition(date: Date): number {
        return asUnix(date) - origin
    }
</script>

<div class="page">
    {#if events && earliestEvent}
        <div class="timeline">
            {#each events as event}
                {#each event.dates as date, index}
                    <div class="date"
                         style="background-color: #{event.colors.primary};color: #{event.colors.secondary};top: {normalizePosition(date.start)}px;">
                        {date.name}
                    </div>
                    <div class="extendy"
                         style="background-color: #{event.colors.primary};color: #{event.colors.secondary};top: calc({normalizePosition(date.start)}px + 1rem);height: {normalizePosition(date.end) - normalizePosition(date.start)}px;"></div>
                {/each}
            {/each}
            {#each years as year}
                <div class="date year"
                     style="top: {normalizePosition(year)}px;">
                    {year.getUTCFullYear()}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .timeline {
        position: relative;
    }

    .date {
        min-height: 1rem;
        min-width: 1rem;
        position: absolute;
        padding: 4px;
        font-weight: bold;
    }

    .extendy {
        position: absolute;
        min-width: 1rem;
        left: 1rem;
        opacity: 0.3;
    }

    .year {
        background-color: var(--text-color);
        color: var(--background-color);
    }
</style>
