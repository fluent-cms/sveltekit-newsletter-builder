<script lang="ts" context="module">
    import type {Post} from '$lib/shared/types/post.type'

    export async function load({params, fetch}){
        const posts: Post[]  =[{
            url :  'https://www.theepochtimes.com/more-democrats-push-back-against-bidens-plan-to-end-title-42_4413084.html',
            image: 'https://img.theepochtimes.com/assets/uploads/2021/09/17/Haitian-Migrants-Sleeping-Under-Texas-Bridge-02.jpg',
            desc: 'More Democrats Push Back Against Biden’s Plan to End Title 42'
        },{
            url :  'https://www.theepochtimes.com/federal-reserve-may-raise-interest-rate-by-75-points-says-official_4413925.html',
            image:'https://img.theepochtimes.com/assets/uploads/2020/03/01/bullard_podium_fort_smith-700x420.jpg',
            desc:'Federal Reserve May Raise Interest Rate by 75 Points, Says Official'
        }]
        return {
            props :{posts}
        }
    }
</script>
<script lang="ts">
    import Button from '@smui/button';
    import {post} from '$lib/shared/api'

    export let posts : Post[];

    const addPost = () => {
        posts = [...posts, {url:''}]
    }

    const crawPost = async (e) =>{
        const url = e.target.value
        const name = e.target.name

        if (url.startsWith('http')) {
            const result = await post('/api/posts', {url: e.target.value}, '')
            if (result){
                const temp:Post[] = [...posts]
                temp [+name] = result as Post
                posts = temp
            }
        }
    }

</script>
<Button on:mousedown={addPost}>Posts</Button>
<Button>Html</Button>


<p class="mdc-typography--body1">
    {#each posts as item,i}
        <li>
            <label>{i + 1}</label>
            <input name={i} bind:value={item.url} on:blur={crawPost}/>
        </li>
    {/each}
</p>


<p class="mdc-typography--body1">
    {#each posts as item}
        <div>

        <a href={item.url}>
            <img src={item.image}/>
            <label>{item.desc}</label>
        </a>

        </div>
    {/each}
</p>

<style>
    img{
        width:100px
    }
</style>