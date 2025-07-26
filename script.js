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

  const dropbtn = document.querySelector('#dropdownBtn');
  const dropdown = document.querySelector('.dropdown-content');
  const arrow = dropbtn.querySelector('.arrow');

  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';
    arrow.classList.toggle("open", !isOpen);
  });

  window.addEventListener('click', () => {
    dropdown.style.display = 'none';
    arrow.classList.remove("open");
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
      arrow.classList.remove("open");
    });
  });
});