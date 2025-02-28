document.addEventListener("DOMContentLoaded", function() {
  // Lista piosenek (zmień na swoją lokalizację)
  const playlist = [
      { artist: "Zespół SMART", title: "Babylon", src: "assets/music/Babylon7.wav" },
      { artist: "Zespół SMART", title: "Będę przy Tobie", src: "assets/music/Bede_przy_Tobie.wav" },
      { artist: "Zespół SMART", title: "Iść Ciągle Iść", src: "assets/music/Isc_Ciagle_Isc.mp3" },
      { artist: "Zespół SMART", title: "Marina", src: "assets/music/Marina3.wav" },
      { artist: "Zespół SMART", title: "Buzi Buzi", src: "assets/music/Buzi_Buzi4.wav" },
      { artist: "Zespół SMART", title: "Kółecka się obracają", src: "assets/music/Kolecka_sie.wav" },
      { artist: "Zespół SMART", title: "Moja droga ja CIę kocham", src: "assets/music/Moja_droga_ja_Cie_kocham.wav" },
      { artist: "Zespół SMART", title: "Nie jesteś sama", src: "assets/music/Nie_jestes_sama.mp3" },
      { artist: "Zespół SMART", title: "Karolino Karolino", src: "assets/music/Karolino_Karolino.wav" },
      { artist: "Zespół SMART", title: "Przez sądecką wieś", src: "assets/music/Przez_sadecka_wies.wav" },
      { artist: "Zespół SMART", title: "Takiego Janicka", src: "assets/music/Takiego_Jonicka.wav" },
      { artist: "Zespół SMART", title: "Tam w lesie", src: "assets/music/Tam_w_lesie4.wav" },
      { artist: "Zespół SMART", title: "W pewnej gmienie jest wioseczka", src: "assets/music/W_pewnej_gmienie_jest_wioseczka.wav" },
      { artist: "Zespół SMART", title: "Ktoś Mnie pokochał", src: "assets/music/Ktos_Mnie_pokochal.wav" },
      { artist: "Zespół SMART", title: "Wehikuł czasu", src: "assets/music/Wehikul_czasu.mp3" }
      // Dodaj kolejne piosenki w podobny sposób
  ];

  // Pobieramy elementy HTML
  const musicList = document.getElementById("music-list");


// Generujemy listę piosenek
playlist.forEach((song, index) => {
  const listItem = document.createElement("li");
  listItem.className = "music-item";
  listItem.textContent = `${song.artist} - ${song.title}`;
  listItem.addEventListener("click", () => {
    currentSongIndex = index;
    playSong(song);
  });
  musicList.querySelector("ul").appendChild(listItem);
});

  const musicControls = document.getElementById("music-controls");
  const playButton = document.querySelector(".boton");
  const musicTitle = document.querySelector(".music-title");
  const czasTrwaniaParagraph = document.getElementById("czas-trwania");
  const seekBar = document.getElementById("seek-bar");

  let currentSongIndex = 0;
  let audio = new Audio(playlist[currentSongIndex].src);

  // Funkcja do aktualizacji nazwy i czasu trwania piosenki
  function updateSongInfo() {
    musicTitle.textContent = playlist[currentSongIndex].title;
    audio.onloadedmetadata = function () {
      czasTrwaniaParagraph.textContent = formatTime(audio.duration);
    };
  }

  // Funkcja obsługująca przesuwanie suwaka
  seekBar.addEventListener("input", function () {
    const seekTime = (audio.duration * seekBar.value) / 100;
    audio.currentTime = seekTime;
});

  // Funkcja do formatowania czasu w sekundach na format mm:ss
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

 // Funkcja obsługująca kliknięcie na piosenkę z listy
 function playSong() {
  audio.src = playlist[currentSongIndex].src;
  audio.load();
  updateSongInfo();
  playButton.classList.add("active");
  seekBar.value = 0; // Resetujemy wartość paska postępu
  audio.play();
  pokazMusicInfo();
}


  // Funkcja obsługująca kliknięcie na przycisk play
  function playPause() {
    if (audio.paused) {
      audio.play();
      playButton.classList.add("active");
      updateSongInfo();
      pokazMusicInfo();
    } else {
      audio.pause();
      playButton.classList.remove("active");
    }
  }

  // Funkcja obsługująca kliknięcie na przycisk prev
  function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
  }

  // Funkcja obsługująca kliknięcie na przycisk next
  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
  }

  // Dodawanie obsługi kliknięć na przyciski
  musicList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const index = Array.from(musicList.children).indexOf(event.target);
      playSong(index);
    }
  });

  playButton.addEventListener("click", playPause);
  document.querySelector(".prev-button").addEventListener("click", playPrev);
  document.querySelector(".next-button").addEventListener("click", playNext);

// Aktualizacja czasu trwania i paska postępu co sekundę
    setInterval(function () {
        document.getElementById("ile-minelo").textContent = formatTime(audio.currentTime);
        const progress = (audio.currentTime / audio.duration) * 100;
        document.getElementById("seek-bar").style.width = `${progress}%`;
        seekBar.value = (audio.currentTime / audio.duration) * 100;
    }, 1000);
  
});

function pokazMusicInfo() {
  var musicInfo = document.getElementById("music-info");
  musicInfo.style.display = "block"; // Pokaż element ustawiając display na "block"
}