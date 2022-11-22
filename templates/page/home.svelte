<script>
    import { fade } from "svelte/transition";

    import Link from "../components/Link.svelte";
</script>

<div id="main" class="col-sm-6" in:fade>
    <h2 class="bolder"><Link to="https://blog.n4o.xyz">blog</Link></h2>
    <h2 class="bolder"><Link to="https://shigoto.n4o.xyz">old blog</Link></h2>
    <h3 class="bolder"><Link to="https://ihateani.me">ihateani.me</Link></h3>
    <h3 class="bolder"><Link to="https://github.com/noaione">github</Link></h3>
    <hr />
    <h4 class="bolder">
        <Link to="keys">gpg keys</Link>
        <Link to="resume">resume</Link>
        <Link to="donate">donate</Link>
        <Link to="about">about</Link>
    </h4>
    <!--sse--><h6>Contact: <Link to="mailto:hi@n4o.xyz">hi@n4o.xyz</Link></h6><!--/sse-->
    <h6>Mastodon: <a href="https://mstdn.id/@noaione" class="linkify" title="Mastodon" rel="me">@noaione@mstdn.id</a></h6>
</div>