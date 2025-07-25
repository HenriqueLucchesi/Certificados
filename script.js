function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }

  document.querySelector('#switch').addEventListener('click', toggleMode);

  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });

  const filtros = document.querySelectorAll('.dropdown-content button');
  const certificados = document.querySelectorAll('.certificado');

  filtros.forEach(botao => {
    botao.addEventListener('click', () => {
      const tec = botao.getAttribute('data-tecnologia').toLowerCase();

      certificados.forEach(cert => {
        const classes = cert.className.toLowerCase();
        cert.style.display = (tec === 'todos' || classes.includes(tec)) ? 'flex' : 'none';
      });

      dropdown.style.display = 'none';
    });
  });
});
