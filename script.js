function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Para manter o tema salvo ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
  }

  // Animação de entrada para os certificados
  const certificados = document.querySelectorAll('.certificado');
  certificados.forEach((el, index) => {
    el.style.animationDelay = `${0.2 + index * 0.2}s`;
  });
});
