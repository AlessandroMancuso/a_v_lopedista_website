const tooltips = [
  {
    id: "linguaggio",
    title: "LINGUAGGIO e COMUNICAZIONE",
    imageUrl: "./images/chat.png",
    text: "Il bambino in età evolutiva, per varie cause, può sviluppare o presentare difficoltà nella comunicazione e nel linguaggio, così come l'adulto o l'anziano a seguito di patologie neurologiche o traumi. Il logopedista saprà valutarle ed impostare un piano di trattamento per gestirle al meglio",
  },
  {
    id: "apprendimento",
    title: "APPRENDIMENTO e FUNZIONI ESECUTIVE",
    imageUrl: "./images/idea.png",
    text: "Il bambino o ragazzo in età evolutiva può sviluppare o presentare difficoltà nell'apprendimento o nella gestione delle richieste scolastiche. Il logopedista, in equipe con altri specialisti, saprà discriminare difficoltà transitorie da un disturbo specifico dell'apprendimento e guiderà la famiglia nella miglior gestione delle stesse. A seguito di patologie neurologiche o traumi, l'adulto o l'anziano, inoltre, possono sviluppare difficoltà di attenzione, memoria o delle cosiddette funzioni corticali superiori. Il logopedista saprà valutarle ed impostare un piano di trattamento per gestirle al meglio",
  },
  {
    id: "disturbiCAA",
    title: "DISTURBI DELLO SPETTRO AUTISTICO e CAA",
    imageUrl: "./images/puzzle.png",
    text: "Il logopedista si occupa di promuovere le abilità relazionali, comportamentali e comunicativo-linguistiche del bambino anche tramite l'uso di supporti in Comunicazione Aumentativa Alternativa (CAA)",
  },
  {
    id: "deglutizione",
    title: "DEGLUTIZIONE e FUNZIONI ORALI",
    imageUrl: "./images/throat_white.png",
    text: "Nel bambino respirazione orale, squilibrio muscolare orofacciale, deglutizione atipica o disfunzionale, malocclusioni dentarie e difficoltà masticatorie sono strettamente collegate",
  },
  {
    id: "voce",
    title: "VOCE",
    imageUrl: "./images/online-chat.png",
    text: "Per cause organiche o funzionali è possibile che la persona manifesti difficoltà nell'emissione della voce: raucedine, afonia, instabilità della voce, affaticabilità nel parlare o nel cantare",
  },
];

// Get the modal
let modal = document.getElementById("tooltipModal");

// Get all "Scopri di più" buttons
var buttons = document.querySelectorAll(".modal-open-btn");

// Function to open the modal and set the text
openModal = (tooltipId) => {
  let selTtooltip = tooltips.find((el) => el.id == tooltipId);
  let tooltipIconImageUrl = selTtooltip.imageUrl;
  let tooltipText = selTtooltip.text;
  let tooltipTitle = selTtooltip.title;
  document.getElementById("modalImage").src = tooltipIconImageUrl;
  document.getElementById("modalTitle").innerText = tooltipTitle;
  document.getElementById("modalText").innerText = tooltipText;
  modal.style.display = "flex";
}

closeModal = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
