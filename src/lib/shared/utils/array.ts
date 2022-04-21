export  function updateItem(arr : any[], index: number, item:any){
    const temp:any[] = [...arr]
    temp [index] ={ ...temp[index] ,...item}
    return temp
}