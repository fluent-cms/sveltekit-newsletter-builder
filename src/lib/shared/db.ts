import * as fs from 'fs/promises'

const File = 'db.json'
export async function save(data:string){
    await fs.writeFile(File, data)
}

export async function read(){
    console.log('in function read')
    const str = await fs.readFile(File);
    const data = JSON.parse(str.toString());
    return data
}
