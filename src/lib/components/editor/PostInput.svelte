<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import type {Post} from "../../shared/types/post.type";
    const dispatch = createEventDispatcher();
    export let post : Post
    export let index
</script>
<li>
    <label>{index + 1}</label>
    <input name={index} bind:value={post.url}/>
    <button on:click = {()=>{dispatch('saveOnePost', {index, url:post.url})}}>save</button>
</li>
<style>
    input {
        width:800px
    }
</style>