var audio = document.getElementById('myAudio');
    var rangeInput = document.getElementById('range');
    var image = document.getElementById('media-image');
    var volumeInput = document.getElementById('volume');
    var audioSource = document.getElementById('source');
    function  play1(){
        image.src="https://scontent.faly2-2.fna.fbcdn.net/v/t39.30808-6/359821634_943901696640817_4209545170334827108_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SeG1Lbzszu4AX-3PfDE&_nc_ht=scontent.faly2-2.fna&oh=00_AfCr6wfjSlFmDhY3q8YkKye8bLJ0ULAzZtYDxeTXwIR2JA&oe=65AED125"
        audioSource.src="موسيقى حزينة كابتن ماجد.mp3"
        audio.load(); 
        audio.play();
    }
    function play2(){
       image.src="http://dpww97ouk2yjv.cloudfront.net/635639139481148289.jpg";
       audioSource.src="عدنان ولينا موسيقى تصويرية2.mp3"
       audio.load(); 
        audio.play();
    }
    function play3(){
        image.src="https://www.ranksarabia.com/img/content/d26f9371-8612-480f-afd2-87f63546022f.jpg";
        audioSource.src="موسيقى صوتيه نادره لكرتون سندباد عام ١٩٧٦-1976-۱۹۷۶ music sindibad KP.mp3"
        audio.load(); 
        audio.play();
    }
    function play4(){
        image.src="https://kassioun.org/media/afcontent/items/cache/cd72bf193ae209f63fa44fbddf152836_L.jpg";
        audioSource.src="المقدمة - شركة المرعبين المحدودة.mp3"
        audio.load(); 
        audio.play();
    }
    function Play(){
        audio.play();
    }
    function Pause(){
        audio.pause();
    }
    function Stop(){
        audio.load();
        audio.pause();
    }
    function Mute(){
        audio.muted=!audio.muted;
    }
    function initializeAudio() {
      rangeInput.max = audio.duration;
    }

    audio.ontimeupdate = function() {
      rangeInput.value = audio.currentTime;
    };

    function changeSpeed() {
        var speedInput = document.getElementById('speed');
        audio.playbackRate = speedInput.value;
    }

    function changeVolume() {
        audio.volume = volumeInput.value / 100;
    }
    audio.onloadedmetadata = function() {
    initializeAudio();
    rangeInput.value = 0; // Reset the range input to 0 for the new track
     };