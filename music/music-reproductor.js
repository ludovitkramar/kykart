var playing;
playing = 0;
var intervalID;
  function playpause() {
    var playBTN = document.getElementById('playbutton');
    var musicbox = document.getElementById('music');
    var totaldur = musicbox.duration;
    var totalmin = Math.floor(totaldur / 60);
    var totals = Math.round(totaldur % 60);
    if (playing == 0) {
      playAudio()
    } else {
      document.getElementById('music').pause();
      playing = 0;
      playBTN.innerHTML = "<i class='fas fa-play'></i>";
      clearInterval(intervalID);
    }
  };
  function playAudio() {
    var playBTN = document.getElementById('playbutton');
    var musicbox = document.getElementById('music');
    var totaldur = musicbox.duration;
    var totalmin = addZero(Math.floor(totaldur / 60));
    var totals = addZero(Math.round(totaldur % 60));
    document.getElementById('totalduration').innerHTML = `${totalmin}:${totals}`;
    document.getElementById('playingNow').innerHTML = musicbox.src;
    document.getElementById('playingNowLink').href = musicbox.src;
    musicbox.play();
    playing = 1;
    playBTN.innerHTML = "<i class='fas fa-pause'></i>";
    intervalID = setInterval(movebar, 100);
  }
  function movebar() {
    var musicbox = document.getElementById('music');
    var totaldur = musicbox.duration;
    var currentTimeLabel = document.getElementById('current');
    currentTimeLabel.innerHTML = addZero(Math.floor(musicbox.currentTime / 60)) + ':' + addZero(Math.round(musicbox.currentTime % 60));
    var currentpercent = musicbox.currentTime / totaldur;
    document.getElementById('ProgressBar').style.width = currentpercent * 100 + '%';
  }
  function musicended() {
    clearInterval(intervalID);
    playing = 0;
    document.getElementById('playbutton').innerHTML = '<i class="fas fa-play"></i>';
    document.getElementById('ProgressBar').style.width = 0 + '%';
    document.getElementById('totalduration').innerHTML = "0:0";
    document.getElementById('current').innerHTML = "0:0";
  }
  function seekto() {
    var musicbox = document.getElementById('music');
    var totaldur = musicbox.duration;
    var barext = document.getElementById('ProgressBarExt');
    var barlength = barext.clientWidth;
    var leftdistance = 46 + document.getElementById('mr').offsetLeft;
    var mousepos = window.event.pageX - leftdistance;
    var targetPercent = mousepos / barlength;
    document.getElementById('ProgressBar').style.width = targetPercent * 100 + '%';
    musicbox.currentTime = totaldur * targetPercent;
  }
  function addZero(n) {
    if(n<10){
      n = "0" + n;
      console.log("now its:"+n)
    }
    return n
  }