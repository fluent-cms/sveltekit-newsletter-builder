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
    let message =''

    const addPost = async () => {
        posts = [...posts, {url:''}]
        await saveAllPost()
    }

    const saveOnePost = async ({detail:{url,index}}) =>{
        await crawPost(index, url)
        await saveAllPost()

    }

    const saveAllPost = async ()=>{
        console.log('in save all posts')
        message = ''
        const result = await post('/api/posts', posts,'')
        if (result){
            message = 'saved'
        }
    }
    const crawPost = async (index, url) => {
        const result = await post('/api/crawler', {url}, '')
        if (result) {
            const temp: Post[] = [...posts]
            temp [index] = result as Post
            posts = temp
        }
    }
</script>
<div>
    <label>{message}</label>
</div>
<Button on:mousedown={addPost}>Posts</Button>
<Button>Html</Button>
<Button on:mousedown={saveAllPost}>Save</Button>
<a href="preview">Preview</a>
<Editor {posts} on:saveOnePost ={saveOnePost}/>
<NewsLetter {posts}/>
