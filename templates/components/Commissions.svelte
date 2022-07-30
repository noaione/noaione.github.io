<script>
    export let name;
    export let requester;
</script>

<div class="commissions-container">
    <h5 style="font-weight: 700; color: #c7c7c7;">{"- Commissions: " + name}</h5>
    <span>Client: {requester}</span>
    <div class="dark-text">
        <slot />
    </div>
</div>

<style>
    .commissions-container {
        display: flex;
        flex-direction: column;
    }

    .dark-text {
        color: #c7c7c7;
    }
</style>