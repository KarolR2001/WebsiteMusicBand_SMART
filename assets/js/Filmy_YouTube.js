// Funkcja do ładowania filmów z YouTube
function loadYouTubeVideos() {
  fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=26&playlistId=PLBSZZGY7uxoux7ENs1YgIv_wc35P2wETj&key=AIzaSyBaxthPZfZh8KqVmMvQN5X8xaMww8VnIJc')
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      const playlistContainer = document.getElementById('playlist-container');
      if (playlistContainer) {
        playlistContainer.innerHTML = ''; // Wyczyść istniejące treści

        // Odwróć tablicę filmów
        const reversedItems = data.items.slice().reverse();

        reversedItems.forEach(item => {
          const videoId = item.snippet.resourceId.videoId;
          const videoTitle = item.snippet.title;
          const videoURL = `https://www.youtube.com/embed/${videoId}`;

          const col = document.createElement('div');
          col.classList.add('col-md-6', 'mb-3');

          const iframe = document.createElement('iframe');
          iframe.src = videoURL;
          iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('width', '100%');
          iframe.setAttribute('height', '315');

          const card = document.createElement('div');
          card.classList.add('card');

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const cardTitle = document.createElement('h5');
          cardTitle.classList.add('card-title');
          cardTitle.textContent = videoTitle;

          cardBody.appendChild(cardTitle);
          card.appendChild(iframe);
          card.appendChild(cardBody);
          col.appendChild(card);

          playlistContainer.appendChild(col);
        });
      } else {
        console.error("Kontener 'playlist-container' nie został znaleziony.");
      }
    } else {
      console.error("Brak danych w odpowiedzi lub niepoprawne dane.");
    }
  })
  .catch(error => {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
  });
}

// Wywołaj funkcję po załadowaniu strony
window.onload = loadYouTubeVideos;