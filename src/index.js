setInterval(refresh,15000 );
setInterval(refreshRecents, 60000);
//test code

//-------------test code end
$('#play').hide();
var song = new Audio();
song.src = "https://streamingv2.shoutcast.com/kssu";
song.volume = 0.7;
window.onload = playFirst();
playFirst();

function playFirst(){
    song.play().catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        playSong()
    });
}
function stopSong(){
    song.src = "https://streamingv2.shoutcast.com/kssu";
    song.play();
    $('#play').hide();
    $('#stop').show();
}
function playSong(){
    song.pause();
    $('#stop').hide();
    $('#play').show();
}
function changeVolume(v_value){
    song.volume = v_value;
}

function close_window() {
   // if(confirm("Switching Players")) {
     //   close();

    //}
    window.open('', '_self');
    setTimeout(window.close(), 500);
    window.open('mini.html',
        'newwindow',
        'resizable=0,width=450,height=450');

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
