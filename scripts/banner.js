document
  .querySelector("#banner-buttons .accept-privacy-btn")
  .addEventListener("click", function () {
    // Aggiungi il codice qui per gestire l'accettazione della politica sulla privacy e l'uso dei cookie
    // Ad esempio, puoi impostare un cookie per registrare il consenso dell'utente o inviare i dati al server
    console.log("Hai accettato la politica sulla privacy e l'uso dei cookie.");
    document.getElementById("banner-privacy").classList.remove("show");
  });

document
  .querySelector("#banner-buttons .reject")
  .addEventListener("click", function () {
    // Aggiungi il codice qui per gestire il rifiuto della politica sulla privacy e l'uso dei cookie
    // Ad esempio, puoi impedire l'accesso al sito o rimuovere i cookie impostati in precedenza
    console.log("Hai rifiutato la politica sulla privacy e l'uso dei cookie.");
    document.getElementById("banner-privacy").classList.remove("show");
  });

// Aggiungi una classe "show" al banner dopo un breve ritardo per farlo spuntare dal basso
setTimeout(function () {
  document.getElementById("banner-privacy").classList.add("show");
}, 1000); // Ritardo di 1000 millisecondi (1 secondo)
