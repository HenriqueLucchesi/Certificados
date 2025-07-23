// Tema escuro e claro
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Aplica tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
  }

  animarCertificadosScroll(); // chama a função aqui!
});

function animarCertificadosScroll() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target); // parar de observar depois de aparecer
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.certificado').forEach(cert => {
    observer.observe(cert);
  });
}
