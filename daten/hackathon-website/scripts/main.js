// scripts/main.js
(function () {
  const SUPPORTED_LANGS = ['de', 'en'];
  let currentLang = (navigator.language || 'de').slice(0, 2) === 'en' ? 'en' : 'de';

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.de[key] || key;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = currentLang === 'de' ? 'EN' : 'DE';
  }

  function renderUseCases() {
    const container = document.getElementById('usecases-grid');
    if (!container) return;
    container.innerHTML = '';
    USE_CASES.forEach((uc) => {
      const card = document.createElement('article');
      card.className = 'usecase-card';
      card.innerHTML = `
        <button class="usecase-card__header" aria-expanded="false" type="button">
          <span class="usecase-card__heading">
            <span class="usecase-card__number">${uc.number}</span>
            <span class="usecase-card__title">${uc.title[currentLang]}</span>
          </span>
          <span class="usecase-card__meta">
            <span class="usecase-card__context">${uc.context[currentLang]}</span>
            <span class="usecase-card__chevron">+</span>
          </span>
        </button>
        <div class="usecase-card__body" hidden>
          <p class="usecase-card__kernidee">${uc.kernidee[currentLang]}</p>
          <p><strong>${t('usecase.why_label')}:</strong> ${uc.warum[currentLang]}</p>
          <ul class="usecase-card__features">
            ${uc.features.map((f) => `<li>${f[currentLang]}</li>`).join('')}
          </ul>
          <p><strong>${t('usecase.flow_label')}:</strong> ${uc.ablauf[currentLang]}</p>
          <p><strong>${t('usecase.pitfalls_label')}:</strong> ${uc.stolpersteine[currentLang]}</p>
          <p><strong>${t('usecase.success_label')}:</strong> ${uc.erfolg[currentLang]}</p>
        </div>
      `;
      const header = card.querySelector('.usecase-card__header');
      const body = card.querySelector('.usecase-card__body');
      header.addEventListener('click', () => {
        const expanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', String(!expanded));
        body.hidden = expanded;
        header.querySelector('.usecase-card__chevron').textContent = expanded ? '+' : '−';
      });
      container.appendChild(card);
    });
  }

  function setLang(lang) {
    currentLang = SUPPORTED_LANGS.includes(lang) ? lang : 'de';
    applyStaticTranslations();
    renderUseCases();
    // The minigame renders its level nav and transcript itself and has to
    // redraw them in the new language.
    document.dispatchEvent(new CustomEvent('i18n:changed'));
  }

  window.I18N_STATE = { t, setLang, getLang: () => currentLang };

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLang(currentLang === 'de' ? 'en' : 'de');
    });
  }

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navLinks.classList.remove('is-open'));
    });
  }

  setLang(currentLang);
})();
