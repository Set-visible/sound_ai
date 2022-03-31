// console.log(results[0]);
label = results[0].label;
siren_Audio = document.getElementById("sirensound");
music_Audio = document.getElementById("musicsound");
if (label=="person") {
    if (siren_Audio.paused) {
        music_Audio.pause();
        siren_Audio.currentTime = 0;
        siren_Audio.play();
   }
