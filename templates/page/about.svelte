<script>
    import { fade } from "svelte/transition";

    import Link from "../components/Link.svelte";

    import EmailIcon from "../components/Icons/Email.svelte";
    import GitHubIcon from "../components/Icons/GitHub.svelte";
    import TwitterIcon from "../components/Icons/Twitter.svelte";
    import LinkedInIcon from "../components/Icons/LinkedIn.svelte";
    import MastodonIcon from "../components/Icons/Mastodon.svelte";
</script>

<div id="donate-set" class="col-sm-6" in:fade>
    <h4 class="bolder"><Link>&lt; go back</Link></h4>
    <hr />
    <img src="/assets/img/profile-pic.png" alt="Profile" class="rounded-img mt-2" height="100" />
    <h4 class="mt-2 bolder">N4O</h4>
    <p>A developer and someone that loves Japanese media</p>
    <div class="flex flex-row">
        <a href="mailto:hi@n4o.xyz" class="link-icon mr-1" title="Mail">
            <EmailIcon />
        </a>
        <a href="https://twitter.com/nao0809_" class="link-icon mr-1" title="Twitter" target="_blank" rel="noreferrer noopener">
            <TwitterIcon />
        </a>
        <a href="https://github.com/noaione" class="link-icon mr-2" title="GitHub" target="_blank" rel="noreferrer noopener">
            <GitHubIcon />
        </a>
        <a href="https://mstdn.id/@noaione" class="link-icon mr-2" title="Mastodon" target="_blank" rel="me noreferrer noopener">
            <MastodonIcon />
        </a>
    </div>
</div>

<style>
    .rounded-img {
        border-radius: 50%;
    }

    .mt-2 {
        margin-top: 0.5rem;
    }

    .flex {
        display: flex;
    }

    .flex-row {
        flex-direction: row;
    }

    .mr-1 {
        margin-right: 0.25rem;
    }

    .mr-2 {
        margin-right: 0.5rem;
    }

    .link-icon {
        color: #d7d7d7;
        transition: all 200ms;
    }

    .link-icon:hover {
        color: #d7d7d7b9;
    }
</style>