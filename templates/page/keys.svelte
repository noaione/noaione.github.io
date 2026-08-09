<script>
    export let keys;

    import { fade } from "svelte/transition";

    import Link from "../components/Link.svelte";
</script>

<div id="keys-set" class="col-sm-6" in:fade>
    <h4 class="bolder"><Link>&lt; go back</Link></h4>
    <hr />
    {#each keys as {is_default, name, path}}
        <h3 class="bolder">
            <Link to="/keys/{path}">{name}</Link>
            {#if is_default}
            <span class="small-txt"> [Default]</span>
            {/if}
        </h3>
    {/each}
    <span class="small-txt">noaione &lt;noaione0809@gmail.com&gt;</span>
</div>

<style>
    .small-txt {
        color: #9a9a9a;
        font-size: medium;
        font-weight: normal;
    }
</style>