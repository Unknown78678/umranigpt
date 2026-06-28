// Application bootstrap
'use strict';

window.UmraniGPT = (() => {
  const init = () => {
    if (window.AppConfig && window.AppStorage && window.AppTheme) {
      window.AppTheme.init();
    }

    window.AppNotifications?.init();
    window.AppSidebar?.init();
    window.AppShortcuts?.init();

    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.pointerEvents = 'none';
      setTimeout(() => loadingScreen.remove(), 300);
    }

    document.body.classList.remove('preload');
    document.documentElement.classList.add('app-ready');
    console.log('UmraniGPT initialized');
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => window.UmraniGPT.init());
