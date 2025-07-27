// Função para alternar o tema
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Aplica tema salvo do localStorage
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
}

// Ativa o botão de alternância de tema
const themeBtn = document.querySelector('#switch');
if (themeBtn) {
  themeBtn.addEventListener('click', toggleMode);
}

// Espera o carregamento do DOM
window.addEventListener('DOMContentLoaded', () => {
  // Botões dropdown
  const btnTec = document.getElementById('dropdownTecBtn');
  const btnData = document.getElementById('ordenarDataBtn');

  // Menus dropdown
  const dropdownTec = document.getElementById('dropdownTec');
  const dropdownData = document.getElementById('dropdownData');

  // Setas
  const arrowTec = btnTec.querySelector('.arrow');
  const arrowData = btnData.querySelector('.arrow');

  // Alternar menu de tecnologia
  btnTec.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownTec.style.display === 'block';
    dropdownTec.style.display = isOpen ? 'none' : 'block';
    arrowTec.classList.toggle('open', !isOpen);

    // Fecha o menu de data
    dropdownData.style.display = 'none';
    arrowData.classList.remove('open');
  });

  // Alternar menu de data
  btnData.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownData.style.display === 'block';
    dropdownData.style.display = isOpen ? 'none' : 'block';
    arrowData.classList.toggle('open', !isOpen);

    // Fecha o menu de tecnologia
    dropdownTec.style.display = 'none';
    arrowTec.classList.remove('open');
  });

  // Fechar menus ao clicar fora
  window.addEventListener('click', () => {
    dropdownTec.style.display = 'none';
    dropdownData.style.display = 'none';
    arrowTec.classList.remove('open');
    arrowData.classList.remove('open');
  });

  // Filtro por tecnologia
  const filtros = dropdownTec.querySelectorAll('button');
  const certificados = document.querySelectorAll('.certificado');

  filtros.forEach(botao => {
    botao.addEventListener('click', () => {
      const tec = botao.getAttribute('data-tecnologia').toLowerCase();

      certificados.forEach(cert => {
        const classes = cert.className.toLowerCase();
        cert.style.display = (tec === 'todos' || classes.includes(tec)) ? 'flex' : 'none';
      });

      dropdownTec.style.display = 'none';
      arrowTec.classList.remove('open');
    });
  });

  // Ordenar por data
  const ordenarButtons = dropdownData.querySelectorAll('button[data-order]');

  ordenarButtons.forEach(botao => {
    botao.addEventListener('click', () => {
      const ordem = botao.getAttribute('data-order');
      const container = document.querySelector('.container');
      const certificados = Array.from(container.querySelectorAll('.certificado'));

      certificados.sort((a, b) => {
        const dataA = new Date(a.dataset.date);
        const dataB = new Date(b.dataset.date);
        return ordem === 'asc' ? dataA - dataB : dataB - dataA;
      });

      certificados.forEach(cert => container.appendChild(cert));

      dropdownData.style.display = 'none';
      arrowData.classList.remove('open');
    });
  });
});
