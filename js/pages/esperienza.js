document.addEventListener("DOMContentLoaded", () => {
  translateStatic(window.pageTranslations);

  const experiences = [
    {
      titolo: {
              it: "logistica e spedizione pane",
              en: "logistics and bread shipping",
              de: "Spedition Mitarbeiter"
      },
      da: "19.05.2025",
      a: "-",
      descrizione: {
              it: "Smistamento pane per spedizioni, logistica, autista, gestione magazzino, ordine e gestione prodotti congelati",
              en: "Bread sorting for shipments, logistics, driver, warehouse management, ordering and frozen product management",
              de: "Brotsortierung für Lieferungen, Logistik, Choffeur, Lagerverwaltung, Bestellwesen und Tiefkühlproduktmanagement"
      },
      azienda: "Conditorei-Bäckerei Fleischli AG",
      luogo: "Bahnhofstrasse 1, 8172 Niederglatt"
    },
    {
      titolo: {
              it: "Gestore generale, co-proprietario di azienda gastronomica",
              en: "General Manager, Co-Owner of a Food Business",
              de: "Geschäftsführer, Mitinhaber eines Lebensmittelunternehmens"
        },
        da: "1.11.2022",
        a: "31.12.2024",
        descrizione: {
                it: "Amministratore delegato, contabilitá e chiusure, pizzaiolo, servizio in sala, accoglienza clienti",
                en: "CEO, Accounting and Closing, Pizza Chef, Dining Room Service, Customer Service",
                de: "Geschäftsführer, Buchhaltung und Monatsabschluss, Pizzabäcker, Service im Speisesaal, Kundenservice"
        },
        azienda: "Pizza e Birri GmbH",
        luogo: "Bremgartenstrasse 2, 5628 Aristau"
},
{
        titolo: {
                it: "Pizzaiolo Manager",
                en: "Manager Pizzaiolo",
                de: "Manager Pizzabäcker"
        },
        da: "1.02.2021",
        a: "31.10.2022",
        descrizione: {
                it: "Gestione forniture, pizzaiolo, servizio in sala, accoglienza clienti, chiusure giornaliere",
                en: "Supply management, pizza chef, room service, customer service, daily closures",
                de: "Beschaffungsmanagement, Pizzabäcker, Service Mitarbeiter, Kundenservice, tägliche Abrechnungen"
        },
        azienda: "Krone 2012 GmbH",
        luogo: "Bremgartenstrasse 2, 5628 Aristau"
},
{
        titolo: {
                it: "Designer, Socio",
                en: "Designer, Associate",
                de: "Designer, Mitglied"
        },
        da: "22.03.2021",
        a: "2.09.2025",
        descrizione : {
                it: "Gestione contabilitá, designer CDO, sviluppo web frontend con HTML-CSS-Javascript, UX-Design, 3D-Design",
                en: "Accounting management, CDO designer, front-end web development with HTML-CSS-Javascript, UX-Design, 3D-Design",
                de: "Buchhaltungsmanagement, CDO-Design, Frontend-Webentwicklung mit HTML, CSS und JavaScript, UX-Design, 3D-Design"
        },
        azienda: "SkinSoftware GmbH",
        luogo: "Alfred-Comte Strasse 1, 8953 Dietikon"
},
{
        titolo: {
                it: "Pizzaiolo Manager",
                en: "Manager Pizzaiolo",
                de: "Manager Pizzabäcker"
        },
        da: "1.12.2016",
        a: "2.01.2021",
        descrizione: {
                it: "Gestione forniture, pizzaiolo, servizio vendita al banco, accoglienza clienti, chiusure giornaliere, gestione nuovo personale, trainings, aperture nuovi stand",
                en: "Supply management, pizza chef, counter service, customer service, daily closures, new staff management, training, new stand openings",
                de: "Beschaffungsmanagement, Pizzabäcker, Verkäufer, Kundenservice, tägliche Abrechnungen, Lehrer neuer Mitarbeiter, Schulungen, Eröffnung neuer Stände"
        },
        azienda: "The Good Food Company sárl - Nero's Pizza",
        luogo: "chemin de la Mairie 8, 1294 Genthod"
},
{
        titolo: {
                it: "Designer",
                en: "Designer",
                de: "Designer"
        },
        da: "1.11.2015",
        a: "29.02.2016",
        descrizione: {
                it: "Allestimento prodotti in Esposizione per vendita, creazione Packaging originali di prodotti importati, creazione illustrazioni grafiche, stampa e montaggio packaging",
                en: "Displaying products for sale, creating original packaging for imported products, creating graphic illustrations, printing and packaging assembly",
                de: "Warenpräsentation, Erstellung von Originalverpackungen für Importprodukte, Anfertigung von Grafiken, Druck und Verpackungsmontage"
        },
        azienda: "Golden Hill srl",
        luogo: "Via Massafra (zona industriale), 74015 Martina Franca"
},
{
        titolo: {
                it: "Pizzaiolo",
                en: "Pizzaiolo",
                de: "Pizzabäcker"
        },
        da: "1.09.2009",
        a: "31.08.2016",
        descrizione: {
                it: "Preparazione ingredienti, preparazione impasti, preparazione, guarnitura e cottura delle pizze, aiuto in sala",
                en: "Preparing ingredients, preparing dough, preparing, garnishing and cooking pizzas, helping in the dining room",
                de: "Zutaten vorbereiten, Teig zubereiten, Pizzen zubereiten, garnieren und backen, als Service mithelfen"
        },
        azienda: "Pizzeria Jonny di Giovanni Terruli",
        luogo: "Via Guglielmi 16, 74015 Martina Franca"
},
{
        titolo: {
                it: "Salumiere Banconista",
                en: "Deli clerk",
                de: "Käse- und Fleischthekenverkäufer"
        },
        da: "1.09.2008",
        a: "31.08.2009",
        descrizione: {
                it: "Gestione banco salumi e formaggi, vendita al dettaglio di prodotti alimentari, gestione stock, ordini fornitori",
                en: "Management of cured meats and cheeses, retail food sales, inventory management, supplier orders",
                de: "Management von Wurst- und Käseprodukten, Einzelhandelsverkauf von Lebensmitteln, Bestandsverwaltung, Lieferantenbestellungen"
        },
        azienda: "El.Fe. ALimentari srl",
        luogo: "Via alessandro Manzoni 1, 74015 Martina Franca"
},
]

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

  renderExperiences();

  // Hook per cambio lingua
  window.onLanguageChange = () => renderExperiences();

});

// PDF / Stampa
document.getElementById("print-btn").addEventListener("click", () => {
  window.print();
});