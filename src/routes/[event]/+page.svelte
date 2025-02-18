<script lang="ts">
	import type { LayoutData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: LayoutData;
	export let { event, submissionsCount } = data;
</script>

{#if event}
	<div
		class="card p-0 overflow-hidden relative aspect-[5/2]"
		style="background-color: #{event.colors.secondary}"
	>
		<img
			class="absolute w-full h-full inset-0 object-cover p-0"
			src={event.images.background}
			alt="{event.name} cover image"
			aria-hidden="true"
		/>
		<div class="absolute inset-0 z-[1] flex flex-col items-center justify-center p-8 gap-4">
			<img
				class="h-[50%]"
				src={event.images.wordmark}
				alt="{event.name} wordmark"
				aria-hidden="true"
			/>
			{#if event.id.startsWith('ff')}
				<span class="font-medium text-2xl font-title uppercase text-mf-dark-translucent"
					>{event.subtitle}</span
				>
			{:else}
				<span class="font-medium text-2xl font-title uppercase text-mf-light-translucent"
					>{event.subtitle}</span
				>
			{/if}
		</div>
	</div>
	<div class="justify-center flex gap-4">
		{#if event.phase === 'planning' || event.phase === 'modding'}
			<a href="https://discord.gg/gn543Ee" target="_blank" class="button clickable"
				>Register on Discord!</a
			>
		{:else if event.phase === 'showcase'}
			{#if event.modpack}
				<a href={event.modpack} target="_blank" class="button clickable">Play!</a>
			{/if}
		{:else if event.phase === 'complete'}
			{#if event.modpack}
				<a href={event.modpack} target="_blank" class="button clickable">Download Modpack</a>
			{/if}
		{/if}
		{#if submissionsCount && submissionsCount > 0}
			<a href="/{event.id}/submissions" class="button clickable">View Submissions</a>
		{/if}
	</div>

	{#if event.description}
		{#each event.description as descriptionItem}
			{#if descriptionItem.type === 'markdown' && descriptionItem.content}
				<div class="card">
					<!--Surely a description box won't ever have no content, right?-->
					<SvelteMarkdown source={descriptionItem.content.markdown} />
				</div>
			{/if}
		{/each}
	{/if}

	<!--{#if event.id === 'singularity'}-->
	<!--    <div class="card">-->
	<!--        <h1>Introduction</h1>-->
	<!--        <p>-->
	<!--            ModFest: Singularity is a Minecraft modding event that will run from <b>Saturday, August 13th</b-->
	<!--        >-->
	<!--            thru <b>Sunday, August 21st, 2022</b>.-->
	<!--        </p>-->
	<!--        <p>-->
	<!--            As always, ModFest is a great excuse to try something new or flex your modding abilities.-->
	<!--            ModFest: Singularity is hosted in partnership with <a-->
	<!--                href="https://quiltmc.org/"-->
	<!--                target="_blank">Quilt</a-->
	<!--        >-->
	<!--            and-->
	<!--            <a href="https://modrinth.com/" target="_blank">Modrinth</a>.-->
	<!--        </p>-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Theme</h1>-->
	<!--        <p>-->
	<!--            For ModFest: Singularity, your mod <b>must</b> only have ONE feature. Focus all of your effort-->
	<!--            throughout-->
	<!--            the week into polishing and perfecting one feature into the best you can do. What counts as one feature-->
	<!--            may be fuzzy; if you can convince the organizers it's one feature, then it's a valid submission.-->
	<!--        </p>-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Rules</h1>-->
	<!--        <ul>-->
	<!--            <li>Mods must only have one feature (see Theme section above)</li>-->
	<!--            <li>-->
	<!--                Mods must be compatible with the <a href="https://quiltmc.org/" target="_blank">Quilt</a> mod loader-->
	<!--                and Minecraft 1.19.2-->
	<!--            </li>-->
	<!--            <li>Mods cannot cause serious compatibility issues with other submissions</li>-->
	<!--            <li>-->
	<!--                Mods must be created between the beginning of August 13th UTC and the end of August 21st UTC.-->
	<!--            </li>-->
	<!--            <li>-->
	<!--                Mods must be submitted via a public or unlisted project on <a-->
	<!--                    href="https://modrinth.com/"-->
	<!--                    target="_blank">Modrinth</a-->
	<!--            >.-->
	<!--            </li>-->
	<!--        </ul>-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Register</h1>-->
	<!--        <p>-->
	<!--            In order to participate in ModFest: Singularity, join our <a-->
	<!--                href="https://discord.gg/gn543Ee"-->
	<!--                target="_blank">Discord server</a-->
	<!--        >-->
	<!--            and use the <code>/register</code> command or click the button in the #welcome channel.-->
	<!--        </p>-->
	<!--    </div>-->
	<!--{:else if event.id === '1.20'}-->
	<!--    <div class="card">-->
	<!--        <h1>Introduction</h1>-->
	<!--        <p>-->
	<!--            ModFest 1.20 is a Minecraft modding event that ran from <b>Monday, December 18th, 2023</b-->
	<!--        >-->
	<!--            thru <b>Sunday, December 31st, 2023</b>.-->
	<!--        </p>-->
	<!--        <p>-->
	<!--            As always, ModFest is a great excuse to try something new or flex your modding abilities.-->
	<!--            ModFest 1.20 is hosted in partnership with <a href="https://modrinth.com/" target="_blank">Modrinth</a>.-->
	<!--        </p>-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Showcase</h1>-->
	<!--        <p>-->
	<!--            The modding period has concluded! We will be opening the showcase server to the public on <strong>February-->
	<!--            10th, 2023</strong>.-->
	<!--            Please stay tuned to our social media; we will be announcing exactly when the modpack and server will go-->
	<!--            live, as well as how to vote for mods that fit different categories!-->
	<!--        </p>-->
	<!--        <p>-->
	<!--            The voting period will run for two weeks, and the showcase server will continue to be up through that-->
	<!--            time.-->
	<!--        </p>-->
	<!--        {#if false}-->
	<!--            <p><strong>Check back here on February 10th for details on how you can join the server!</strong></p>-->
	<!--        {:else}-->
	<!--            <p>To check it out, install the <a href="https://modrinth.com/project/modfest-1.20" target="_blank">ModFest-->
	<!--                1.20 modpack</a> with your favorite supported launcher (we recommend the <a-->
	<!--                    href="https://modrinth.com/app" target="_blank">Modrinth App</a> or <a-->
	<!--                    href="https://prismlauncher.org/" target="_blank">Prism Launcher</a>) and join the server in the-->
	<!--                Multiplayer list.</p>-->
	<!--            <p>Check out the booths, and make sure to <a href="https://forms.gle/aoJt8H8drQWNGoS48" target="_blank">vote-->
	<!--                for the mods that best fit each category!</a></p>-->
	<!--        {/if}-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Theme</h1>-->
	<!--        <p>-->
	<!--            For ModFest 1.20, we encourage your mod to follow our central theme, <strong>Sky and Sea</strong>.-->
	<!--            The theme is open to interpretation; try to come up with something interesting!-->
	<!--        </p>-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Rules</h1>-->
	<!--        <ul>-->
	<!--            <li>-->
	<!--                Mods must be compatible with the <a href="https://fabricmc.net/" target="_blank">Fabric</a> mod-->
	<!--                loader-->
	<!--                and Minecraft 1.20.4-->
	<!--            </li>-->
	<!--            <li>Mods cannot cause serious compatibility issues with other submissions</li>-->
	<!--            <li>-->
	<!--                Mods must be created between the beginning of December 18th UTC and the end of December 31st UTC,-->
	<!--                2023.-->
	<!--            </li>-->
	<!--            <li>-->
	<!--                Mods must be submitted via a public or unlisted project on <a-->
	<!--                    href="https://modrinth.com/"-->
	<!--                    target="_blank">Modrinth</a-->
	<!--            >. Submissions are accepted through a bot in our <a href="https://discord.gg/gn543Ee" target="_blank">Discord-->
	<!--                server</a>.-->
	<!--            </li>-->
	<!--        </ul>-->
	<!--    </div>-->
	<!--    <div class="card">-->
	<!--        <h1>Register</h1>-->
	<!--        <p>-->
	<!--            In order to participate in ModFest 1.20, join our <a-->
	<!--                href="https://discord.gg/gn543Ee"-->
	<!--                target="_blank">Discord server</a-->
	<!--        >-->
	<!--            and use the <code>/register</code> command or click the button in the #welcome channel.-->
	<!--        </p>-->
	<!--    </div>-->
	<!--{:else}-->
	<!--    <div class="card">-->
	<!--        <h1>No information available for this event yet!</h1>-->
	<!--    </div>-->
	<!--{/if}-->
{:else}
	<p>Could not find event.</p>
{/if}
