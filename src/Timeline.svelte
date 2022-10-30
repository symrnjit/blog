<script>
	import MicroPost from "./MicroPost.svelte";
	import { onMount } from "svelte";

	//fetch db
	let timeline=[];
	onMount(async () => {
		const res = await fetch(
			"https://symrnjit.github.io/db.json"
		);
		const db = await res.json();
		timeline = db.timeline.sort( function( a,b){
			return b.id - a.id;
		});
	});
	
</script>

	 {#if timeline === undefined}
        Loading Blog...
    {:else}
        {#each timeline as mp}
			<MicroPost post={mp}></MicroPost>
		{/each}
    {/if}
 	
