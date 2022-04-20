<script lang="ts" context="module">
    import type {Post} from '$lib/shared/types/post.type'
    import {get} from "../lib/shared/http";

    export async function load({params, fetch}){
        const posts = await get('/api/posts','')
        return {
            props:{
                posts
            }
        }
    }
</script>

<script lang="ts">
    import Button from '@smui/button';
    import {post} from '../lib/shared/http'
    import Editor from "../lib/components/editor/Editor.svelte";
    import NewsLetter from "../lib/components/letter/NewsLetter.svelte";

    export let posts
</script>
<NewsLetter {posts}/>
