<script lang="ts">
    export let item
</script>
<div>
    <a href={item.url}>
        <img src={item.image}/>
        <label>{item.desc}</label>
    </a>
</div>
<style>
    img{
        width:100px
    }
</style>