const personal = [
    {
        nome: "Angelo",
        cognome: "Piccoli",
        nascita: "26.01.1990",
        stato_sociale: "Sposato",
        figli: "1, 25.09.2023 (accudito)",
        patente: "B, Svizzera, Automunito",
        permesso: "C"
},
];

// Rendering automatico
const container = document.getElementById("personal-list");

personal.forEach(per => {
  const box = document.createElement("div");
  box.classList.add("personal-box");

  box.innerHTML = `
    <p data-i18n="personal_nome">Nome: ${per.nome}</p>
    <p data-i18n="personal_cognome">Cognome: ${per.cognome}</p>
    <br/>
    <p data-i18n="personal_nascita">Data di nascita: ${per.nascita}</p>
    <p data-i18n="personal_stato">Stato sociale: ${per.stato_sociale}</p>
    <p data-i18n="personal_figli">Figli: ${per.figli}</p>
    <br/>
    <p data-i18n="personal_patente">Patente: ${per.patente}</p>
    <p data-i18n="personal_permesso">Permesso: ${per.permesso}</p>
  `;

  container.appendChild(box);
});
