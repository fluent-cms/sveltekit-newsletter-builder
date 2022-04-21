<script lang="ts">
    import PostInput from "./PostInput.svelte";
    export let posts
</script>
{#each posts as post,index}
    <PostInput post="{post}" index={index} on:saveOnePost/>
{/each}
