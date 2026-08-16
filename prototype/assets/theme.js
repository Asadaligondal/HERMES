(function () {
  var stored = localStorage.getItem('hermes-theme');
  if (stored === 'light') document.documentElement.classList.add('light');
})();

function toggleTheme() {
  var isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('hermes-theme', isLight ? 'light' : 'dark');
}
