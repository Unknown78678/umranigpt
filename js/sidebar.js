// Sidebar behavior
'use strict';

window.AppSidebar = (() => {
  const init = () => {
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const newChatBtn = document.getElementById('new-chat-btn');
    const themeBtn = document.getElementById('theme-footer-btn');
    const shortcutsBtn = document.getElementById('shortcuts-footer-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('mobile-overlay');

    const toggleSidebar = () => {
      document.getElementById('sidebar')?.classList.toggle('collapsed');
      document.getElementById('main')?.classList.toggle('sidebar-collapsed');
    };

    const cycleTheme = () => {
      const next = window.AppTheme?.cycle();
      window.AppNotifications?.info(`Theme: ${window.AppTheme?.getThemeName(next) || 'Changed'}`);
    };

    const showShortcuts = () => {
      window.AppNotifications?.info('Keyboard shortcuts available');
    };

    toggleBtn?.addEventListener('click', toggleSidebar);
    newChatBtn?.addEventListener('click', () => {
      document.getElementById('message-input')?.focus();
      window.AppNotifications?.info('New chat ready');
    });
    themeBtn?.addEventListener('click', cycleTheme);
    shortcutsBtn?.addEventListener('click', showShortcuts);

    mobileMenuBtn?.addEventListener('click', () => {
      overlay?.classList.toggle('visible');
      document.getElementById('sidebar')?.classList.toggle('open');
    });

    overlay?.addEventListener('click', () => {
      overlay.classList.remove('visible');
      document.getElementById('sidebar')?.classList.remove('open');
    });
  };

  return { init };
})();
