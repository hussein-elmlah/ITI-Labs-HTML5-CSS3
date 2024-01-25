const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('volume');
const speedSlider = document.getElementById('speed');
const songImg = document.getElementById('img');

const audioPlayer = document.getElementById('myAudio');

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
stopButton.addEventListener('click', stopAudio);
muteButton.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', adjustVolume);
speedSlider.addEventListener('input', adjustSpeed);
document.getElementById('song1').addEventListener('click', playSong1);
document.getElementById('song2').addEventListener('click', playSong2);
document.getElementById('song3').addEventListener('click', playSong3);
document.getElementById('song4').addEventListener('click', playSong4);

function playSong1() {
  audioPlayer.src = "1.mp3";
  songImg.src = "1.jpg";
}

function playSong2() {
  audioPlayer.src = "2.mp3";
  songImg.src = "2.jpg";
}

function playSong3() {
  audioPlayer.src = "3.mp3";
  songImg.src = "3.jpg";
}

function playSong4() {
  audioPlayer.src = "4.mp3";
  songImg.src = "4.jpg";
}

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function toggleMute() {
  audioPlayer.muted = !audioPlayer.muted;
}

function adjustVolume() {
    const volume = volumeSlider.value / 100;
    audioPlayer.volume = volume;
}
  
function adjustSpeed() {
    const speed = speedSlider.value / 50;
    audioPlayer.playbackRate = speed;
}