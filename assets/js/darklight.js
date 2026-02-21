function theme_set(toggled) {
  document.getElementById('style-dark').disabled = toggled;
  document.getElementById('style-light').disabled = !toggled;
  localStorage.setItem('theme-toggled', toggled ? '1' : '');
}

function giscus_theme_set(toggled) {
  var theme = toggled ? 'light' : 'dark_dimmed';
  var iframe = document.querySelector('iframe.giscus-frame') || document.querySelector('iframe[src*="giscus"]');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme } } },
      'https://giscus.app'
    );
  }
}

function theme_toggle() {
  var isToggled = !document.getElementById('style-dark').disabled;
  theme_set(isToggled);
  giscus_theme_set(isToggled);
}

var currentToggle = localStorage.getItem('theme-toggled');
theme_set(currentToggle);
giscus_theme_set(currentToggle);