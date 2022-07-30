<script>
    export let to = undefined;
    export let extraClass = undefined;
    export let forceExternal;

    import { changeRoute } from "../lib/route"

    if (typeof to !== "string") {
        to = "";
    }

    let isInternalLink = !to.startsWith("http");
    if (to.startsWith("mailto:")) {
        isInternalLink = false;
    }
    let isSlashPre = to.startsWith("/");

    function interceptLink(ev) {
        if (!isSlashPre && !forceExternal) {
            ev.preventDefault();
            changeRoute(to);
        }
    }
    const internalLink = (isSlashPre || forceExternal) ? to : `#/${to}`;
</script>

{#if isInternalLink}
    <a href={internalLink} class={`linkify-2 ${extraClass || ""}`} on:click={interceptLink}>
        {#if $$slots.default}
            <slot />
        {:else}
            {to}
        {/if}
    </a>
{:else}
    <a href={to} class={`linkify ${extraClass || ""}`} target="_blank" rel="noreferrer noopener">
        {#if $$slots.default}
            <slot />
        {:else}
            {to}
        {/if}
    </a>
{/if}
