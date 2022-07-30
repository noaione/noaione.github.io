<script>
    export let name;
    export let url;
    export let description;
</script>

<h5>
    <a href={url} class="linkify-2 bolder">{name}</a> - <span class="dark-text">{description}</span>
</h5>

<style>
    .linkify-2 {
        color: #d6d6d6;
        text-decoration: none;
        background-image: linear-gradient(rgb(212, 171, 54), rgb(226, 54, 24));
        background-size: 0% 0.1em;
        background-position-y: 100%;
        background-position-x: 0%;
        background-repeat: no-repeat;
        transition: background-size 0.2s ease-in-out;
        cursor: pointer;
    }

    .linkify-2:hover,
    .linkify-2:focus,
    .linkify-2:active {
        color: #d6d6d6;
        background-size: 100% 0.1em;
    }

    .bolder {
        font-weight: 700;
    }

    .dark-text {
        color: #9e9e9e;
    }
</style>