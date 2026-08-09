<script>
    export let title;

    title = title.toLowerCase();
    title += ": "
</script>

<h5>
    <b>{title}</b>
    <span class="dark-text"><slot /></span>
</h5>

<style>
    .dark-text {
        color: #c7c7c7;
    }
</style>