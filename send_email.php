<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pobierz dane z formularza
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Adres e-mail, na który zostanie wysłana wiadomość
    $to = 'karolrembiasz@o2.pl';

    // Temat wiadomości
    $subject = 'Nowa wiadomość ze strony internetowej SMART !!!';

    // Szablon wiadomości
    $mailBody = "
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset='UTF-8'>
      <title>Nowa wiadomość ze strony internetowej SMART !!!</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #bb7f29;
          background-color: #1a1a1c;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          color: #bb7f29;
        }
    
        .header h1 {
          font-size: 26px;
          margin: 0;
        }
        
        .logo {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .logo img {
          max-width: 300px;
          display: block;
          margin: 0 auto;
        }
        
        table {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          border-collapse: collapse;
          background-color: rgb(37, 39, 42);
          border: 2px solid #bb7f29;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(13, 15, 19, 0.4);
          color: #bb7f29;
        }
        
        table td, table th {
          padding: 10px;
          border: 1px solid #bb7f29;
        }
      </style>
    </head>
    <body>
      <div class='logo'>
        <img src='http://braintms.eu/SMART/assets/img/logo.png' alt='Logo'>
      </div>
      <div class='header'>
        <h1>Nowa wiadomość ze strony internetowej !!!</h1>
      </div>
      <table>
        <tr>
          <th>Imię i Nazwisko:</th>
          <td>$name</td>
        </tr>
        <tr>
          <th>Adres e-mail:</th>
          <td>$email</td>
        </tr>
        <tr>
          <th>Numer telefonu:</th>
          <td>$phone</td>
        </tr>
        <tr>
          <th>Wiadomość:</th>
          <td>$message</td>
        </tr>
      </table>
    </body>
    </html>

    ";

    // Ustaw nagłówki wiadomości e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    // Wyślij wiadomość e-mail
    if (mail($to, $subject, $mailBody, $headers)) {
        // Wiadomość wysłana pomyślnie
        $message = "Dziękujemy! Twoja wiadomość została wysłana.";
    } else {
        // Błąd podczas wysyłania wiadomości
        $message = "Przepraszamy, wystąpił problem podczas wysyłania wiadomości.";
    }

    // Wyświetl komunikat
    echo $message;
    exit;
}
?>
