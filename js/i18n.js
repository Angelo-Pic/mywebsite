const defaultLang = "it";
const languageSelect = document.getElementById("language-switcher");

let lang = localStorage.getItem("lang") || defaultLang;

function setLanguage(newLang) {
  lang = newLang; // AGGIORNA LO STATO

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
  languageSelect.value = lang;

  renderExperiences(); // RIDISEGNA SUBITO  
}

// Rendering automatico
const container = document.getElementById("experience-list");

function renderExperiences() {
  container.innerHTML = ""; // PRIMA PULISCE

  experiences.forEach(exp => {
    const box = document.createElement("div");
    box.classList.add("experience-box");

    box.innerHTML = `
      <h3>${exp.titolo[lang]}</h3>
      <br/>
      <span>${exp.da}</span>
      <span> - </span>
      <span>${exp.a}</span>
      <p>${exp.descrizione[lang]}</p>
      <br/>
      <p><b>${exp.azienda}</b></p>
      <p>${exp.luogo}</p>
    `;

    container.appendChild(box);
});
}

// Init
setLanguage(lang);

// Change language
languageSelect.addEventListener("change", e => {
  setLanguage(e.target.value);
});