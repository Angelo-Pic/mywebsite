document.addEventListener("DOMContentLoaded", () => {
  // 🔥 traduzioni statiche della pagina
  translateStatic(window.pageTranslations);

  // 🔥 hook per cambio lingua
  window.onLanguageChange = () => {
    translateStatic(window.pageTranslations);
  };
});

document.querySelectorAll('.card').forEach(card => {
    card.querySelectorAll('.flip-btn').forEach(button => {
        button.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

const section = document.getElementById('mediaSection');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.classList.add('active');
    }
  });
}, { threshold: 0.3 });

observer.observe(section);
