import App from "./templates/main.svelte";

const DEFAULT_KEY = "908B 72EC";

const allKeys = ["661C50D4.asc", "908B72EC.asc"];
const keysCollection = allKeys.map((res) => {
    let key_name = res.split(".")[0];
    let split_name = key_name.match(/.{1,4}/g).join(" ");
    return {
        "is_default": split_name === DEFAULT_KEY,
        "name": split_name,
        "path": res
    }
});

const app = new App({
    target: document.getElementById("root"),
    props: {
        keys: keysCollection
    }
});

export default app;
