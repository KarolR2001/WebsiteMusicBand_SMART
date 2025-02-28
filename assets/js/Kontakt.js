// Znajdź formularz i dodaj nasłuchiwanie na zdarzenie "submit"
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Zapobiega wysłaniu formularza w sposób standardowy

  // Pobieranie danych z formularza
  var name = document.getElementById("form3Example1").value;
  var email = document.getElementById("form3Example3").value;
  var phone = document.getElementById("typePhone").value;
  var message = document.getElementById("textAreaExample1").value;

  // Sprawdzanie, czy formularz jest wypełniony
  if (!name || !email || !phone || !message) {
    showDangerAlertPusty("Wypełnij wszystkie pola formularza.");
    return; // Przerwanie działania funkcji w przypadku braku danych
  }

  // Tworzenie obiektu FormData i dodawanie danych z formularza
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);

  // Tworzenie żądania AJAX do wysłania formularza
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Sukces - pokazanie alertu
      showSuccessAlert("Formularz został pomyślnie wysłany.");
      resetForm();
    } else {
      // Błąd - wyświetlanie alertu
      showDangerAlert("Wystąpił błąd podczas wysyłania formularza.");
    }
  };
  xhr.send(formData);
});

// Funkcja do pokazywania alertu sukcesu
function showSuccessAlert(message) {
  var successAlertContainer = document.getElementById("successAlertContainer");
  var successAlert = document.getElementById("successAlert");
  successAlertContainer.style.display = "block"; // Wyświetlanie kontenera alertu
  successAlert.innerText = message; // Ustawienie treści alertu
  successAlert.classList.add("show"); // Dodawanie klasy "show" dla animacji alertu

  // Schowanie alertu po 3 sekundach
  setTimeout(function() {
    successAlertContainer.style.display = "none"; // Ukrywanie kontenera alertu
    successAlert.classList.remove("show"); // Usuwanie klasy "show"
  }, 3000);
}

// Funkcja do pokazywania alertu niepowodzenia
function showDangerAlert(message) {
  var dangerAlertContainer = document.getElementById("dangerAlertContainer");
  var dangerAlert = document.getElementById("dangerAlert1");
  dangerAlertContainer.style.display = "block"; // Wyświetlanie kontenera alertu
  dangerAlert.innerText = message; // Ustawienie treści alertu
  dangerAlert.classList.add("show"); // Dodawanie klasy "show" dla animacji alertu

  // Schowanie alertu po 3 sekundach
  setTimeout(function() {
    dangerAlertContainer.style.display = "none"; // Ukrywanie kontenera alertu
    dangerAlert.classList.remove("show"); // Usuwanie klasy "show"
  }, 3000);
}

// Funkcja do pokazywania alertu niepowodzenia w przypadku pustego formularza
function showDangerAlertPusty(message) {
  var dangerAlertContainer = document.getElementById("dangerAlertContainerPusty");
  var dangerAlert = document.getElementById("dangerAlert2");
  dangerAlertContainer.style.display = "block"; // Wyświetlanie kontenera alertu
  dangerAlert.innerText = message; // Ustawienie treści alertu
  dangerAlert.classList.add("show"); // Dodawanie klasy "show" dla animacji alertu

  // Schowanie alertu po 3 sekundach
  setTimeout(function() {
    dangerAlertContainer.style.display = "none"; // Ukrywanie kontenera alertu
    dangerAlert.classList.remove("show"); // Usuwanie klasy "show"
  }, 3000);
}

// Funkcja do resetowania formularza
function resetForm() {
  document.getElementById("contactForm").reset();
}