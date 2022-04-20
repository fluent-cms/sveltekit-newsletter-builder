<script lang="ts">
    import PostInput from "./PostInput.svelte";
    export let posts
</script>
<p class="mdc-typography--body1">
    {#each posts as post,index}
        <PostInput post="{post}" index={index} on:saveOnePost/>
    {/each}
</p>