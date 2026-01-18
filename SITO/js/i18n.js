const defaultLang = "it";
const languageSelect = document.getElementById("language-switcher");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
  languageSelect.value = lang;
}

// Init
const savedLang = localStorage.getItem("lang") || defaultLang;
setLanguage(savedLang);

// Change language
languageSelect.addEventListener("change", e => {
  setLanguage(e.target.value);
});