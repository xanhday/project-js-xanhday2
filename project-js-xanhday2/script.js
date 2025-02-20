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
  autoPlay = document.querySelector(".play-all"),
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

