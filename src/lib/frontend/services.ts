import {post} from "../shared/http";
import type {Post} from "../shared/types/post.type";

export const saveAllPost = async (posts: Post[])=>{
    const result = await post('/api/posts', posts,'')
    return result

}
export const crawPost = async (index :number, url: string) => {
    const result = await post('/api/crawler', {url}, '')
    return result
}