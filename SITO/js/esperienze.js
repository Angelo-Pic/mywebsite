const experiences = [
    {
        titolo: "logistica e spedizione pane",
        da: "19.05.2025",
        a: "oggi",
        descrizione: "Smistamento pane per spedizioni, logistica, autista, gestione magazzino, ordine e gestione prodotti congelati",
        azienda: "Conditorei-Bäckerei Fleischli AG",
        luogo: "Bahnhofstrasse 1, 8172 Niederglatt"
},
{
        titolo: "Gestore generale, co-proprietario di azienda gastronomica",
        da: "1.11.2022",
        a: "31.12.2024",
        descrizione: "Amministratore delegato, contabilitá e chiusure, pizzaiolo, servizio in sala, accoglienza clienti",
        azienda: "Pizza e Birri GmbH",
        luogo: "Bremgartenstrasse 2, 5628 Aristau"
},
{
        titolo: "Pizzaiolo Manager",
        da: "1.02.2021",
        a: "31.10.2022",
        descrizione: "Gestione forniture, pizzaiolo, servizio in sala, accoglienza clienti, chiusure giornaliere",
        azienda: "Krone 2012 GmbH",
        luogo: "Bremgartenstrasse 2, 5628 Aristau"
},
{
        titolo: "Designer, Socio",
        da: "22.03.2021",
        a: "2.09.2025",
        descrizione: "Gestione contabilitá, designer CDO, sviluppo web frontend con HTML-CSS-Javascript, UX-Design, 3D-Design, ",
        azienda: "SkinSoftware GmbH",
        luogo: "Alfred-Comte Strasse 1, 8953 Dietikon"
},
{
        titolo: "Pizzaiolo Manager",
        da: "1.12.2016",
        a: "2.01.2021",
        descrizione: "Gestione forniture, pizzaiolo, servizio vendita al banco, accoglienza clienti, chiusure giornaliere, gestione nuovo personale, trainings, aperture nuovi stand",
        azienda: "The Good Food Company sárl - Nero's Pizza",
        luogo: "chemin de la Mairie 8, 1294 Genthod"
},
{
        titolo: "Designer",
        da: "1.11.2015",
        a: "29.02.2016",
        descrizione: "Allestimento prodotti in Esposizione per vendita, creazione Packaging originali di prodotti importati, creazione illustrazioni grafiche, stampa e montaggio packaging",
        azienda: "Golden Hill srl",
        luogo: "Via Massafra (zona industriale), 74015 Martina Franca"
},
{
        titolo: "Pizzaiolo",
        da: "1.09.2009",
        a: "31.08.2016",
        descrizione: "Preparazione ingredienti, preparazione impasti, preparazione, guarnitura e cottura delle pizze, aiuto in sala",
        azienda: "Pizzeria Jonny di Giovanni Terruli",
        luogo: "Via Guglielmi 16, 74015 Martina Franca"
},
{
        titolo: "Salumiere Banconista",
        da: "1.09.2008",
        a: "31.08.2009",
        descrizione: "Gestione banco salumi e formaggi, vendita al dettaglio di prodotti alimentari, gestione stock, ordini fornitori",
        azienda: "El.Fe. ALimentari srl",
        luogo: "Via alessandro Manzoni 1, 74015 Martina Franca"
},
];

// Rendering automatico
const container = document.getElementById("experience-list");

experiences.forEach(exp => {
  const box = document.createElement("div");
  box.classList.add("experience-box");

  box.innerHTML = `
    <h3>${exp.titolo}</h3>
    <br/>
    <span>${exp.da}</span>
    <span> - </span>
    <span>${exp.a}</span>
    <p>${exp.descrizione}</p>
    <br/>
    <p><b>${exp.azienda}</b></p>
    <p>${exp.luogo}</p>
  `;

  container.appendChild(box);
});

// PDF / Stampa
document.getElementById("print-btn").addEventListener("click", () => {
  window.print();
});