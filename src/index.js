setInterval(refresh,15000 );
setInterval(refreshRecents, 60000);
function close_window() {
    close();

}
function Open() {
    window.open("https://www.kssu.com", "_blank");
}
function refresh() {
    document.getElementById('iframeid').src = document.getElementById('iframeid').src;
}
function refreshRecents() {
    document.getElementById('myiframe').src = document.getElementById('myiframe').src;
    console.log("hello");

}
