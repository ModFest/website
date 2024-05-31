<script lang="ts">
    import '$styles/app.css';
    import type {LayoutData} from './$types';

    export let data: LayoutData;
    export let {event} = data
</script>


<div class="page" style="--link-color: #{event.colors.primary}; --event-background-color: #{event.colors.secondary}">
    <slot/>
</div>
