// Petit script pour la démo
document.addEventListener('DOMContentLoaded', () => {
  const p = document.getElementById('tagline');
  if (p) p.textContent += " (v0)";
  // TODO: extraire ce message depuis config.js plus tard
});

// Expérimentation: activer le mode sombre via hash #dark
if (location.hash === '#dark') {
  document.documentElement.classList.add('dark');
  document.body.classList.add('dark');
}
