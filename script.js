// ====================
// Tema (Dark / Light)
// ====================
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
}

// Aplica tema salvo
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
}

// Botão de tema
const themeBtn = document.querySelector('#switch');
if (themeBtn) {
  themeBtn.addEventListener('click', toggleMode);
}

// ====================
// Tradução
// ====================
const translations = {
  "pt-BR": {
    "titulo_pagina": "Certificados",
    "titulo": "Certificados do Henrique Lucchesi Oliveira",
    "ordem_data": "Ordem por data",
    "mais_antigo": "Mais antigo ➡ Mais recente",
    "mais_recente": "Mais recente ➡ Mais antigo",
    "baixar_todos": "Baixar todos os certificados",
    "tecnologia": "Tecnologia",
    "todos": "Todos",
    "programacao": "Programação",
    "ingles": "Inglês",
    "filtrar_por": "Filtrar por",
    "ver_certificado": "Ver Certificado",
    "baixar_certificado": "Baixar Certificado"
  },
  "en-US": {
    "titulo_pagina": "Certificates",
    "titulo": "Certificates of Henrique Lucchesi Oliveira",
    "ordem_data": "Sort by date",
    "mais_antigo": "Oldest ➡ Newest",
    "mais_recente": "Newest ➡ Oldest",
    "baixar_todos": "Download all certificates",
    "tecnologia": "Technology",
    "todos": "All",
    "programacao": "Programming",
    "ingles": "English",
    "filtrar_por": "Filter by",
    "ver_certificado": "View Certificate",
    "baixar_certificado": "Download Certificate"
  }
};

let currentLang = localStorage.getItem("lang") || "pt-BR";

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const flag = document.getElementById("current-flag");
  const label = document.getElementById("current-lang");
  if (flag && label) {
    if (lang === "pt-BR") {
      flag.src = "https://flagcdn.com/w20/br.png";
      label.textContent = "PT-BR";
    } else {
      flag.src = "https://flagcdn.com/w20/us.png";
      label.textContent = "EN-US";
    }
  }

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

// Dropdown de idioma
function toggleLangDropdown() {
  const menu = document.getElementById("lang-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function selectLanguage(lang) {
  applyTranslations(lang);
  document.getElementById("lang-menu").style.display = "none";
}

// Aplica idioma ao carregar
applyTranslations(currentLang);

// Fecha dropdown de idioma ao clicar fora
document.addEventListener("click", (e) => {
  const langMenu = document.getElementById("lang-menu");
  const btn = document.querySelector(".language-selector-wrapper .dropbtn");
  if (langMenu && !langMenu.contains(e.target) && !btn.contains(e.target)) {
    langMenu.style.display = "none";
  }
});

// ====================
// Dropdown Tecnologia/Data
// ====================
window.addEventListener('DOMContentLoaded', () => {
  const btnTec = document.getElementById('dropdownTecBtn');
  const dropdownTec = document.getElementById('dropdownTec');
  const btnData = document.getElementById('ordenarDataBtn');
  const dropdownData = document.getElementById('dropdownData');
  const arrowTec = btnTec.querySelector('.arrow');
  const arrowData = btnData.querySelector('.arrow');

  const submenuToggle = dropdownTec.querySelector('.submenu-toggle');
  const submenuPanel = dropdownTec.querySelector('.dropdown-submenu');
  const frontendToggle = dropdownTec.querySelector('.frontend-toggle');
  const frontendPanel = dropdownTec.querySelector('.dropdown-frontend');

  const certificadoElements = document.querySelectorAll('.certificado');

  // ==================== BOTÃO TECNOLOGIA ====================
  btnTec.addEventListener('click', (e) => {
    e.stopPropagation();
    const aberto = dropdownTec.style.display === 'block';
    dropdownTec.style.display = aberto ? 'none' : 'block';
    arrowTec.classList.toggle('open', !aberto);

    dropdownData.style.display = 'none';
    arrowData.classList.remove('open');
  });

  // ==================== BOTÃO DATA ====================
  btnData.addEventListener('click', (e) => {
    e.stopPropagation();
    const aberto = dropdownData.style.display === 'block';
    dropdownData.style.display = aberto ? 'none' : 'block';
    arrowData.classList.toggle('open', !aberto);

    dropdownTec.style.display = 'none';
    arrowTec.classList.remove('open');
    if (submenuPanel) submenuPanel.style.display = 'none';
    if (frontendPanel) frontendPanel.style.display = 'none';
  });

  // ==================== SUBMENU PROGRAMACAO ====================
  if (submenuToggle) {
    submenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const aberto = submenuPanel.style.display === 'flex';
      submenuPanel.style.display = aberto ? 'none' : 'flex';
    });
  }

  // ==================== SUBMENU FRONT-END ====================
  if (frontendToggle) {
    frontendToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const aberto = frontendPanel.style.display === 'block';
      frontendPanel.style.display = aberto ? 'none' : 'block';
    });
  }

  // ==================== FILTRO DE CERTIFICADOS ====================
  // Botões principais (Todos, Programação, Front-End, Back-End)
  dropdownTec.querySelectorAll('button[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      if (filter === 'todos') {
        certificadoElements.forEach(cert => cert.style.display = 'flex');
      } else if (filter === 'programacao' || filter === 'frontend' || filter === 'backend') {
        // Não faz nada; apenas abre submenu
      }
    });
  });

  // Botões de linguagens (HTML, CSS, JS)
  frontendPanel.querySelectorAll('button').forEach(langBtn => {
    langBtn.addEventListener('click', () => {
      const lang = langBtn.textContent.toLowerCase(); // "html", "css", "javascript"
      certificadoElements.forEach(cert => {
        cert.style.display = cert.classList.contains(lang) ? 'flex' : 'none';
      });
    });
  });

  // ==================== ORDENAR POR DATA ====================
  dropdownData.querySelectorAll('button[data-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const order = btn.getAttribute('data-order');
      const container = document.querySelector('.container');

      const sorted = Array.from(certificadoElements).sort((a, b) => {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      });

      sorted.forEach(cert => container.appendChild(cert));
    });
  });

  // ==================== FECHAR AO CLICAR FORA ====================
  document.addEventListener('click', (e) => {
    if (!dropdownTec.contains(e.target) && !btnTec.contains(e.target)) {
      dropdownTec.style.display = 'none';
      arrowTec.classList.remove('open');
      if (submenuPanel) submenuPanel.style.display = 'none';
      if (frontendPanel) frontendPanel.style.display = 'none';
    }

    if (!dropdownData.contains(e.target) && !btnData.contains(e.target)) {
      dropdownData.style.display = 'none';
      arrowData.classList.remove('open');
    }
  });
});
