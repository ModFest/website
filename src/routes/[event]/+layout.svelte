<script lang="ts">
    import '$styles/app.css';
    import type {LayoutData} from './$types';

    export let data: LayoutData;
    export let {event} = data

    export let colorStyles = event ? `<style>* { --link-color: #${event.colors.primary}; --event-background-color: #${event.colors.secondary}; }</style>` : ''
</script>

{@html colorStyles}

<div class="page">
    <slot/>
</div>
