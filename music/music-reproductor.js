var playing;
playing = 0;
var intervalID;
  function playpause() {
    var playBTN = document.getElementById('playbutton');
    var musicbox = document.getElementById('music');
    var totaldur = musicbox.duration;
    var totalmin = Math.floor(totaldur / 60);
    var totals = Math.round(totaldur % 60);
    document.getElementById('totalduration').innerHTML = totalmin + ':' + totals;
    document.getElementById('playingNow').innerHTML = musicbox.src;
    document.getElementById('playingNowLink').href = musicbox.src;
    if (playing == 0) {
      musicbox.play();
      playing = 1;
      playBTN.innerHTML = "<i class='fas fa-pause'></i>";
      intervalID = setInterval(movebar, 100);
      var currentTimeLabel = document.getElementById('current');
      function movebar() {
        currentTimeLabel.innerHTML = Math.floor(musicbox.currentTime / 60) + ':' + Math.round(musicbox.currentTime % 60);
        var currentpercent = musicbox.currentTime / totaldur;
        document.getElementById('ProgressBar').style.width = currentpercent * 100 + '%';
      }
    } else {
      document.getElementById('music').pause();
      playing = 0;
      playBTN.innerHTML = "<i class='fas fa-play'></i>";
      clearInterval(intervalID);
    }
  }
  function play() {
    var musicbox = document.getElementById('music');
    musicbox.play();
    playing == 1;
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
    /*document.getElementById('test1').innerHTML = totaldur;*/
    var barext = document.getElementById('ProgressBarExt');
    var barlength = barext.clientWidth;
    /*document.getElementById('test2').innerHTML = barlength;*/
    var leftdistance = 46 + document.getElementById('mr').offsetLeft;
    /*document.getElementById('test3').innerHTML = leftdistance;*/
    var mousepos = window.event.pageX - leftdistance;
    /*document.getElementById('test4').innerHTML = mousepos;*/
    var targetPercent = mousepos / barlength;
    /*document.getElementById('test5').innerHTML = targetPercent;*/
    document.getElementById('ProgressBar').style.width = targetPercent * 100 + '%';
    musicbox.currentTime = totaldur * targetPercent;
  }
