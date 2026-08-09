<script>
    export let name;
    export let start;
    export let end;
</script>

<h5>
    <b>{name}</b> - <span class="dark-text">{start}-{end}</span>
    {#if $$slots.default}
        -- <span class="dark-text"><slot /></span>
    {/if}
</h5>

<style>
    .dark-text {
        color: #c7c7c7;
    }
</style>