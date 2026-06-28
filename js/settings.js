// Settings panel logic
'use strict';

window.AppSettings = (() => {
  const init = () => {
    const overlay = document.getElementById('settings-overlay');
    const closeBtn = overlay?.querySelector('.modal-close');
    const navItems = [...overlay?.querySelectorAll('.settings-nav-item') || []];
    const panels = [...overlay?.querySelectorAll('.settings-panel') || []];

    const closeModal = () => {
      overlay?.classList.remove('active');
      overlay?.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    };

    const openModal = () => {
      overlay?.classList.add('active');
      overlay?.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    };

    const openPanel = (panelId) => {
      panels.forEach((panel) => panel.classList.toggle('active', panel.id === `panel-${panelId}`));
      navItems.forEach((item) => item.classList.toggle('active', item.dataset.panel === panelId));
    };

    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    navItems.forEach((item) => {
      item.addEventListener('click', () => openPanel(item.dataset.panel));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  };

  return { init, open: () => {
    const overlay = document.getElementById('settings-overlay');
    overlay?.classList.add('active');
    overlay?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }, close: () => {
    const overlay = document.getElementById('settings-overlay');
    overlay?.classList.remove('active');
    overlay?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  } };
})();
