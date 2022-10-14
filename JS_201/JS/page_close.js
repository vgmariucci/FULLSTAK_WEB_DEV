console.log("Successfully loaded page_close.js");

window.onbeforeunload = function() {
    console.log("Before unload");
    return "Are you sure you want to leave?"
}