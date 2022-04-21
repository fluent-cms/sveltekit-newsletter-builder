import {read, save} from "../../lib/backend/db";

export async function post({request}:any){
    const posts = await request.json()
    await save( JSON.stringify(posts))
    return {
        body: posts
    }
}

export async function get({url}:any){
    const posts = await read()
    return {
        body:posts
    }
}
