<script lang="ts" context="module">
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
    import Editor from "../components/editor/Editor.svelte";
    import NewsLetter from "../components/letter/NewsLetter.svelte";
    import {crawPost, saveAllPost} from "../lib/frontend/services";
    import {updateItem} from "../lib/shared/utils/array";

    export let posts

    const addPost = async () => {
        posts = [...posts, {url:'',id: Date.now()}]
        await saveAllPost(posts)
    }

    const saveOnePost = async ({detail:{url,index}}) =>{
        const item = await crawPost(index, url)
        posts = updateItem(posts, index, item)
        await saveAllPost(posts)
    }

    const savePostOrder = async ({detail}) =>{
        console.log('save post order')
        console.log(detail)
        posts = detail
        await saveAllPost(posts)
    }
</script>

<Button on:mousedown={addPost}>Posts</Button>
<Button>Html</Button>
<Button on:mousedown={saveAllPost}>Save</Button>
<a href="preview">Preview</a>
<Editor {posts} on:saveOnePost ={saveOnePost}/>
<NewsLetter {posts} on:savePostOrder = {savePostOrder}/>
<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
    }
</style>
