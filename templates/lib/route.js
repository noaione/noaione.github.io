export function changeRoute(targetHash) {
    if (!targetHash) {
        targetHash = "";
    }
    if (targetHash === "main") {
        targetHash = "";
        shouldCheck = false;
    }
    targetHash = `#/${targetHash}`;
    console.info(`Changing route to ${targetHash}`);
    window.location.hash = targetHash;
}