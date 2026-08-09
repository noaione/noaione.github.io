<script>
    export let keys;

    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import { changeRoute } from "./lib/route"

    // Pages
    import HomePage from "./page/home.svelte";
    import KeysPage from "./page/keys.svelte";
    import ResumePage from "./page/resume.svelte";
    import DonatePage from "./page/donate.svelte";
    import AboutPage from "./page/about.svelte";

    let VALID_PAGE = ["resume", "keys", "donate", "about"];

    let loaded = false;
    let showed = "main";
    let extrasClass = "";
    let toggle = (target) => {
        if (target !== "main" && !VALID_PAGE.includes(target)) {
            return;
        }
        showed = target;
        if (showed === "resume") {
            extrasClass = "m-2";
            window.scrollTo({top: 0, behavior: "smooth"});
        } else {
            extrasClass = "";
        }
        // if (showed !== "main") {
        //     // history.pushState(null, null, `/#/${showed}`);
        // } else {
        //     // history.pushState(null, null, "/#/");
        // }
    };

    function onHashChanging() {
        const hash = window.location.hash;
        switch (hash) {
            case "#/":
                toggle("main");
                break;
            case "#/resume":
                toggle("resume");
                break;
            case "#/keys":
                toggle("keys");
                break;
            case "#/donate":
                toggle("donate");
                break;
            case "#/about":
                toggle("about");
                break;
            default:
                toggle("main");
                break;
        }
    };

    onMount(() => {
        window.addEventListener("hashchange", onHashChanging);
        let currentHash = window.location.hash.substr(2);
        if (currentHash !== "" && VALID_PAGE.includes(currentHash)) {
            toggle(currentHash);
        } else {
            changeRoute();
        }
        setTimeout(() => loaded = true, 250)
    });
</script>

{#if loaded}
<main class="bg-main monospaced text-white {extrasClass}" in:fade="{{ duration: 200 }}">
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        {#if showed === "main"}
            <HomePage />
        {/if}
        {#if showed === "keys"}
            <KeysPage keys={keys} />
        {/if}
        {#if showed === "resume"}
            <ResumePage />
        {/if}
        {#if showed === "donate"}
            <DonatePage />
        {/if}
        {#if showed === "about"}
            <AboutPage />
        {/if}
    </div>
</main>
{/if}

<style>
    .m-2 {
        margin: 0.5rem;
    }
</style>