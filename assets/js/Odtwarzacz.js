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
  const musicControls = document.getElementById("music-controls");
  const playButton = document.querySelector(".boton");
  const musicTitle = document.querySelector(".music-title");
  const czasTrwaniaParagraph = document.getElementById("czas-trwania");
  const seekBar = document.getElementById("seek-bar");

  let audio = new Audio();
  audio.preload = 'metadata';
  let currentSongIndex = 0;
  let isDragging = false;

  // Zoptymalizowana funkcja odtwarzania
  function playSong() {
      if (currentSongIndex >= 0 && currentSongIndex < playlist.length) {
          const song = playlist[currentSongIndex];
          
          if (audio.src !== song.src) {
              audio.src = song.src;
              audio.load();
          }
          
          Promise.resolve(audio.play())
              .then(() => {
                  playButton.classList.add("active");
                  updateMusicInfo();
              })
              .catch(error => {
                  console.error('Błąd odtwarzania:', error);
                  playNext(); // Próba odtworzenia następnego utworu w przypadku błędu
              });
      }
  }

  // Zoptymalizowana obsługa paska postępu
  seekBar.addEventListener('mousedown', () => isDragging = true);
  seekBar.addEventListener('mouseup', () => {
      isDragging = false;
      const duration = audio.duration;
      if (duration) {
          const time = (seekBar.value / 100) * duration;
          audio.currentTime = time;
      }
  });

  // Aktualizacja czasu i paska postępu
  audio.addEventListener('timeupdate', () => {
      if (!isDragging) {
          const currentTime = audio.currentTime;
          const duration = audio.duration;
          
          document.getElementById("ile-minelo").textContent = formatTime(currentTime);
          document.getElementById("czas-trwania").textContent = formatTime(duration);
          
          if (duration) {
              const progress = (currentTime / duration) * 100;
              seekBar.value = progress;
              seekBar.style.backgroundSize = `${progress}% 100%`;
          }
      }
  });

  // Dodanie obsługi loadedmetadata aby zaktualizować czas trwania od razu po załadowaniu
  audio.addEventListener('loadedmetadata', () => {
      document.getElementById("czas-trwania").textContent = formatTime(audio.duration);
  });

  // Obsługa kliknięcia w pasek postępu
  seekBar.addEventListener('click', (e) => {
      const bounds = seekBar.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const width = bounds.width;
      const percentage = x / width;
      
      if (audio.duration) {
          audio.currentTime = percentage * audio.duration;
      }
  });

  // Obsługa zakończenia utworu
  audio.addEventListener('ended', () => {
      playNext();
  });

  // Obsługa błędów audio
  audio.addEventListener('error', (e) => {
      console.error('Błąd audio:', e);
      playNext();
  });

  // Debounce dla przycisków
  function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
          const later = () => {
              clearTimeout(timeout);
              func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      };
  }

  // Zoptymalizowane funkcje kontrolne
  const playPause = debounce(() => {
      if (audio.paused) {
          playSong();
      } else {
          audio.pause();
          playButton.classList.remove("active");
      }
  }, 300);

  const playPrev = debounce(() => {
      currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
      playSong();
  }, 300);

  const playNext = debounce(() => {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
      playSong();
  }, 300);

  // Zoptymalizowana obsługa listy utworów
  function updateMusicInfo() {
      const activeSong = playlist[currentSongIndex];
      musicTitle.textContent = activeSong.title;
      
      // Aktualizacja aktywnego elementu na liście
      document.querySelectorAll('.music-item').forEach((item, index) => {
          item.classList.toggle('active', index === currentSongIndex);
      });
      
      pokazMusicInfo();
  }

  // Inicjalizacja kontrolek
  playButton.addEventListener("click", playPause);
  document.querySelector(".prev-button").addEventListener("click", playPrev);
  document.querySelector(".next-button").addEventListener("click", playNext);

  // Czyszczenie zasobów przy zamknięciu strony
  window.addEventListener('beforeunload', () => {
      audio.pause();
      audio.src = '';
  });

  // Generowanie listy utworów z wykorzystaniem fragmentu DOM
  const fragment = document.createDocumentFragment();
  playlist.forEach((song, index) => {
      const listItem = document.createElement("li");
      listItem.className = "music-item";
      listItem.textContent = `${song.artist} - ${song.title}`;
      listItem.addEventListener("click", () => {
          currentSongIndex = index;
          playSong();
      });
      fragment.appendChild(listItem);
  });
  musicList.querySelector("ul").appendChild(fragment);
});

// Funkcja formatowania czasu pozostaje bez zmian
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function pokazMusicInfo() {
  const musicInfo = document.getElementById("music-info");
  if (musicInfo) {
      musicInfo.style.display = "block";
  }
}

function updateSliderProgress(slider) {
    const progress = (slider.value / slider.max) * 100;
    slider.style.setProperty('--range-progress', `${progress}%`);
}

// Dodanie nasłuchiwania na zdarzenia input i timeupdate
const audioSlider = document.querySelector('input[type="range"]');
if (audioSlider) {
    audioSlider.addEventListener('input', function() {
        updateSliderProgress(this);
    });
    
    const audio = document.querySelector('audio');
    if (audio) {
        audio.addEventListener('timeupdate', function() {
            updateSliderProgress(audioSlider);
        });
    }
}