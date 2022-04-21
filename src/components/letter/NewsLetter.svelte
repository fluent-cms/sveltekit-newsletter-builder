<script lang="ts">
    import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
    import PostItem from "./PostItem.svelte";
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let posts
    const flipDurationMs = 300;

    function handleDndConsider(e) {
        posts = e.detail.items;
    }

    function handleDndFinalize(e) {
        console.log('handle finalizing...')
        dispatch('savePostOrder',  e.detail.items)
    }
</script>
<p class="mdc-typography--body1" use:dndzone={{items:posts, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
    {#each posts as item(item.id)}
        <div animate:flip="{{duration: flipDurationMs}}">
            <PostItem item={item}/>
        </div>
    {/each}
</p>