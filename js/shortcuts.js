// Keyboard shortcuts
'use strict';

window.AppShortcuts = (() => {
  const init = () => {
    window.addEventListener('keydown', (e) => {
      const mod = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      if (mod && key === 'n') {
        e.preventDefault();
        document.getElementById('message-input')?.focus();
        window.AppNotifications?.info('New chat ready');
      }

      if (mod && e.shiftKey && key === 't') {
        e.preventDefault();
        window.AppTheme?.cycle();
      }

      if (mod && key === 'enter') {
        e.preventDefault();
        document.getElementById('send-btn')?.click();
      }
    }, true);
  };

  return { init };
})();
