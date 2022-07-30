<script>
    import { fade } from "svelte/transition";

    import Link from "../components/Link.svelte";
</script>

<div id="donate-set" class="col-sm-6" in:fade>
    <h4 class="bolder"><Link>&lt; go back</Link></h4>
    <hr />
    <h5 class="bolder">Donate</h5>
    <p>
        If you like what I do for the open-source community, consider donating to me.
        <br />
        <i>Jika situ suka dengan apa yang saya lakukan, mungkin ingin donasi ke saya.</i>
    </p>
    <p>You can donate to me via one of this link:</p>
    <h5><Link to="https://trakteer.id/noaione/tip" extraClass="bolder">Trakteer</Link> (Indonesian only)</h5>
    <h5><Link to="https://ko-fi.com/noaione" extraClass="bolder">Ko-fi</Link> (Anywhere else)</h5>
</div>