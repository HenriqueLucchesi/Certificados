// Alternar tema
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Aplicar tema salvo
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
}

const themeBtn = document.querySelector('#switch');
if (themeBtn) {
  themeBtn.addEventListener('click', toggleMode);
}

// Traduções
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
    "finalizado-em": "Finalizado em",
    "emitido-por": "Emitido por",
    "ver-certificado": "Ver Certificado",
    "baixar-certificado": "Baixar Certificado"
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
    "finalizado-em": "Completed in",
    "emitido-por": "Issued by",
    "ver-certificado": "View Certificate",
    "baixar-certificado": "Download Certificate"
  },
  "es-ES": {
    "titulo_pagina": "Certificados",
    "titulo": "Certificados de Henrique Lucchesi Oliveira",
    "ordem_data": "Ordenar por fecha",
    "mais_antigo": "Más antiguo ➡ Más reciente",
    "mais_recente": "Más reciente ➡ Más antiguo",
    "baixar_todos": "Descargar todos los certificados",
    "tecnologia": "Tecnología",
    "todos": "Todos",
    "finalizado-em": "Finalizado en",
    "emitido-por": "Emitido por",
    "ver-certificado": "Ver Certificado",
    "baixar-certificado": "Descargar Certificado"
  },
  "fr-FR": {
    "titulo_pagina": "Certificats",
    "titulo": "Certificats de Henrique Lucchesi Oliveira",
    "ordem_data": "Trier par date",
    "mais_antigo": "Plus ancien ➡ Plus récent",
    "mais_recente": "Plus récent ➡ Plus ancien",
    "baixar_todos": "Télécharger tous les certificats",
    "tecnologia": "Technologie",
    "todos": "Tous",
    "finalizado-em": "Terminé en",
    "emitido-por": "Délivré par",
    "ver-certificado": "Voir le certificat",
    "baixar-certificado": "Télécharger le certificat"
  },
  "zh-CN": {
    "titulo_pagina": "证书",
    "titulo": "Henrique Lucchesi Oliveira 的证书",
    "ordem_data": "按日期排序",
    "mais_antigo": "最早 ➡ 最新",
    "mais_recente": "最新 ➡ 最早",
    "baixar_todos": "下载所有证书",
    "tecnologia": "技术",
    "todos": "全部",
    "finalizado-em": "完成于",
    "emitido-por": "由...颁发",
    "ver-certificado": "查看证书",
    "baixar-certificado": "下载证书"
  },
  "hi-IN": {
    "titulo_pagina": "प्रमाण पत्र",
    "titulo": "हेनरिक लुच्चेसी ओलिवेरा के प्रमाण पत्र",
    "ordem_data": "तारीख अनुसार क्रमबद्ध करें",
    "mais_antigo": "सबसे पुराना ➡ सबसे नया",
    "mais_recente": "सबसे नया ➡ सबसे पुराना",
    "baixar_todos": "सभी प्रमाणपत्र डाउनलोड करें",
    "tecnologia": "प्रौद्योगिकी",
    "todos": "सभी",
    "finalizado-em": "पूरा हुआ",
    "emitido-por": "द्वारा जारी",
    "ver-certificado": "प्रमाण पत्र देखें",
    "baixar-certificado": "प्रमाण पत्र डाउनलोड करें"
  },
  "ru-RU": {
    "titulo_pagina": "Сертификаты",
    "titulo": "Сертификаты Энрике Луккези Оливейры",
    "ordem_data": "Сортировать по дате",
    "mais_antigo": "Старые ➡ Новые",
    "mais_recente": "Новые ➡ Старые",
    "baixar_todos": "Скачать все сертификаты",
    "tecnologia": "Технологии",
    "todos": "Все",
    "finalizado-em": "Завершено в",
    "emitido-por": "Выдано",
    "ver-certificado": "Посмотреть сертификат",
    "baixar-certificado": "Скачать сертификат"
  }
};

const langImgMap = {
  'pt-BR': 'br',
  'en-US': 'us',
  'es-ES': 'es',
  'fr-FR': 'fr',
  'zh-CN': 'cn',
  'hi-IN': 'in',
  'ru-RU': 'ru'
};

const langNameMap = {
  'pt-BR': 'PT-BR',
  'en-US': 'EN-US',
  'es-ES': 'ES-ES',
  'fr-FR': 'FR-FR',
  'zh-CN': 'ZH-CN',
  'hi-IN': 'HI-IN',
  'ru-RU': 'RU-RU'
};

// Função para trocar idioma
function selectLanguage(lang) {
  localStorage.setItem('lang', lang);
  updateLanguageUI(lang);
  toggleLangDropdown();
}

// Atualizar UI com o idioma escolhido
function updateLanguageUI(lang) {
  const dict = translations[lang] || translations['pt-BR'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });

  // Atualiza campos internos dos certificados
  document.querySelectorAll('.certificado').forEach(cert => {
    const dateP = cert.querySelector('p:nth-of-type(1)');
    const issuerP = cert.querySelector('p:nth-of-type(2)');
    const viewLink = cert.querySelector('.ver a');
    const downloadLink = cert.querySelector('.baixar a');

    if (dateP) {
      const partes = dateP.innerText.trim().split(' ');
      const dataFinal = partes.slice(-3).join(' ');
      dateP.innerText = `${dict['finalizado-em']} ${dataFinal}`;
    }

    if (issuerP) issuerP.innerHTML = `<strong>${dict['emitido-por']}</strong> Alura`;
    if (viewLink) viewLink.innerText = dict['ver-certificado'];
    if (downloadLink) downloadLink.innerText = dict['baixar-certificado'];
  });

  // Botões e menus
  document.getElementById('ordenarDataBtn').innerText = dict['ordem_data'];
  document.querySelectorAll('#dropdownData button')[0].innerText = dict['mais_antigo'];
  document.querySelectorAll('#dropdownData button')[1].innerText = dict['mais_recente'];
  document.getElementById('dropdownTecBtn').innerHTML = `${dict['tecnologia']} <span class="arrow">&#9662;</span>`;
  document.querySelectorAll('#dropdownTec button')[0].innerText = dict['todos'];
  document.querySelector('.baixar-btn').innerText = dict['baixar_todos'];

  // Atualiza bandeira e código do idioma
  const flagImg = document.getElementById('current-flag');
  const langSpan = document.getElementById('current-lang');
  if (flagImg && langSpan) {
    flagImg.src = `https://flagcdn.com/w20/${langImgMap[lang] || 'br'}.png`;
    langSpan.innerText = langNameMap[lang] || 'PT-BR';
  }
}

// Alternar dropdown de idioma
function toggleLangDropdown() {
  const wrapper = document.querySelector(".language-selector-wrapper");
  wrapper.classList.toggle("show");
}

// Fecha dropdown de idioma se clicar fora
window.addEventListener("click", function (e) {
  if (!e.target.closest(".language-selector-wrapper")) {
    document.querySelector(".language-selector-wrapper").classList.remove("show");
  }
});

// DOM carregado
window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'pt-BR';
  updateLanguageUI(lang);

  const btnTec = document.getElementById('dropdownTecBtn');
  const btnData = document.getElementById('ordenarDataBtn');
  const dropdownTec = document.getElementById('dropdownTec');
  const dropdownData = document.getElementById('dropdownData');
  const arrowTec = btnTec.querySelector('.arrow');
  const arrowData = btnData.querySelector('.arrow');

  // Dropdown de tecnologia
  btnTec.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownTec.style.display === 'block';
    dropdownTec.style.display = isOpen ? 'none' : 'block';
    arrowTec.classList.toggle('open', !isOpen);
    dropdownData.style.display = 'none';
    arrowData.classList.remove('open');
  });

  // Dropdown de data
  btnData.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownData.style.display === 'block';
    dropdownData.style.display = isOpen ? 'none' : 'block';
    arrowData.classList.toggle('open', !isOpen);
    dropdownTec.style.display = 'none';
    arrowTec.classList.remove('open');
  });

  // Fecha menus dropdown
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
