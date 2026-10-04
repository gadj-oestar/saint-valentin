const btnOui = document.querySelector(".btn-oui");
const btnNon = document.querySelector(".btn-non");
const nounours = document.querySelector(".nounours");
const question = document.querySelector(".question");
const felicitations = document.querySelector(".felicitations");

const messages = [
  "EHH MASAKA",
  "T'ES SÛRE ?",
  "T'AS ENCORE UNE SECONDE CHANCE",
  "TU VEUX VRAIMENT PAS ?",
  "VA CLIQUER SUR AVEC JOIE",
  "TU ES TROP DURE ENVERS TOI-MÊME",
  "BECAUSE I'M BLACK",
  "ALLEZ MADAME, CLIQUE SUR LE BOUTON ROSE",
];

const AGRANDISSEMENT = 20; // px ajoutés au bouton "oui" à chaque refus
let refus = 0;

btnNon.addEventListener("click", () => {
  refus++;

  // Le bouton "oui" grossit à chaque refus
  const taille = refus * AGRANDISSEMENT + "px";
  btnOui.style.padding = taille;
  btnOui.style.fontSize = taille;
  btnOui.style.marginLeft = taille;

  // Plus de messages : le bouton "non" disparaît
  if (refus > messages.length) {
    btnNon.style.display = "none";
    return;
  }
  btnNon.textContent = messages[refus - 1];
});

btnOui.addEventListener("click", () => {
  btnOui.style.display = "none";
  btnNon.style.display = "none";
  question.style.display = "none";
  felicitations.style.display = "block";
  nounours.innerHTML = '<img src="image/nounours-amour.gif" alt="Nounours amoureux">';
});
