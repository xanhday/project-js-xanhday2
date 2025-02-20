const play = document.querySelector(".play"),
  previous = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  //
  trackImage = document.querySelector(".track-image"),
  title = document.querySelector(".title"),
  artist = document.querySelector(".artist"),
  //
  trackCurrentTime = document.querySelector(".current-time"),
  trackDuration = document.querySelector(".duration-time"),
  slider = document.querySelector(".duration-slider"),
  //
  showVolume = document.querySelector("#show-volume"),
  volumeIcon = document.querySelector("#volume-icon"),
  currentVolume = document.querySelector("#volume"),
  //
  autoPlayBtn = document.querySelector(".play-all"),
  //
  hamBurger = document.querySelector(".fa-bars"),
  closeIcon = document.querySelector(".fa-times"),
  //
  musicPlaylist = document.querySelector(".music-playlist"),
  pDiv = document.querySelector(".playlist-div"),
  playList = document.querySelector(".playlist");

  let timer;
  let autoplay = 0;
  let indexTrack = 0;
  let songIsPlaying = false;
  let track = document.createElement("audio");

  // All Event Listeners
  play.addEventListener("click", justPlay);
  next.addEventListener("click", nextSong);
  previous.addEventListener("click", prevSong);
  autoPlayBtn.addEventListener("click", autoPlayToggle);
  volumeIcon.addEventListener("click", muteSound);
  currentVolume.addEventListener("change", changeVolume);
  slider.addEventListener("change", changeDuration);


  // Load Tracks
  function loadTrack(indexTrack) {
    track.src = trackList[indexTrack].path;
    trackImage.src = trackList[indexTrack].img;
    title.innerHTML = trackList[indexTrack].name;
    artist.innerHTML = trackList[indexTrack].singer;
    track.load();
  }
  loadTrack (indexTrack);
  // Play Song or Pause Song
  function justPlay() {
    if (songIsPlaying == false) {
      playSong();
    } else
    pauseSong();
  } 

  // Play Song
  function playSong() {
    track.play();
    songIsPlaying = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
  }
  // Pause Song
  function pauseSong() {
    track.pause();
    songIsPlaying = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
  }

  // Next song
  function nextSong() {
    if (indexTrack < trackList.length - 1) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    }else {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }
  function prevSong() {
    if (indexTrack > 0) {
      indexTrack--;
      loadTrack(indexTrack);
      playSong();
    }else {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }

  // Mute Volume
  function muteSound() {
    track.volume = 0;
    showVolume.innerHTML = 0;
    currentVolume.value = 0;
  }

  // Change Volume
  function changeVolume() {
    showVolume.value = currentVolume.value;
    track.volume = currentVolume.value / 100;
  }

  //Change Duration
  function changeDuration() {
    let sliderPositon = track.duration * (slider.value / 100);
    track.currentTime = sliderPositon;
  }

  // Auto Play
  function autoPlayToggle() {
    if (autoplay == 0) {
      autoplay = 1;
      autoPlayBtn.style.background = "#db6400";
    } else {
      autoplay = 0;
      autoPlayBtn.style.background = "#ccc";
    }
  }
