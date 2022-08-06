<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css';
</script>
<div class="container">
    <div class="contents">
        <Header />
        
        <main>
            <slot />
        </main>
    </div>
</div>

<style>
.container {
}

.contents {
    max-width: 800px;
    margin: 0 auto;
}
</style>
