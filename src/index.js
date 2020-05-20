//Refresh interval for refreshing curent song and recent playlist
setInterval(refresh,15000 );//set to 15 seconds
setInterval(refreshRecents, 60000);// set to 60 seconds


/* Play/Pause button code***************************************************************************** */
$('#play').hide();//Initialy hide play button
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
function stopSong(){// Function to start playback.
    //song.src = "https://streamingv2.shoutcast.com/kssu";
    song.play();
    $('#play').hide();
    $('#stop').show();
}
function playSong(){ //function to puase playback. Hides stop button and shows play button
    song.pause();
    $('#stop').hide();
    $('#play').show();
}
/* ****************************************************************************************************************************** */

function changeVolume(v_value){
    song.volume = v_value;
}

function close_window() {
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


}
