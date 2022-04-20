<script lang="ts">
    import PostItem from "./PostItem.svelte";
    export let posts
</script>
<p class="mdc-typography--body1">
    {#each posts as item}
        <PostItem item={item}/>
    {/each}
</p>