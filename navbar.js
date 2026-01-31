function addNavbar(activePage = "") {
  const navbarHTML = `
  <!-- NAVBAR -->
  <header class="fixed top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl
                 backdrop-blur-xl bg-[#0e1117]/40 border border-[#00ffff]/20
                 rounded-full px-12 py-5 flex items-center justify-between
                 shadow-lg shadow-[#00ffff]/20 z-50">

    <a href="index.html" class="flex items-center gap-3 cursor-pointer">
      <img src="Favicon.png?v=1" alt="Logo" class="w-8 h-8 rounded-full">
      <div class="text-xl font-semibold tracking-wide bg-clip-text text-transparent
                  bg-gradient-to-r from-[#00ffff] to-[#7fbf7f] animate-gradient">
        Julien Salesse
      </div>
    </a>

    <nav class="flex items-center gap-6 text-base text-gray-400 tracking-wide">
      ${navLink("index.html", "Home", "home", activePage)}
      ${navLink("moi.html", "Moi", "moi", activePage)}
      ${navLink("experience.html", "Expériences", "experience", activePage)}
      ${navLink("competences.html", "Compétences", "competences", activePage)}
      ${navLink("projets.html", "Projets", "projets", activePage)}
      ${navLink("contact.html", "Contact", "contact", activePage)}
      ${navLink("cv.html", "CV", "cv", activePage)}
      ${navLink("voyages.html", "Voyages", "voyages", activePage)}

      <button id="burgerBtn" class="lg:hidden text-white">
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <line x1="4" y1="6" x2="20" y2="6" stroke-width="2" stroke-linecap="round"/>
          <line x1="4" y1="12" x2="20" y2="12" stroke-width="2" stroke-linecap="round"/>
          <line x1="4" y1="18" x2="20" y2="18" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </nav>
  </header>

  <!-- MENU BURGER FULLSCREEN -->
  <div id="burgerMenu"
       class="fixed inset-0 bg-[#0e1117]
              z-[999] transform -translate-x-full transition-transform duration-300
              overflow-y-auto">
              
    <button id="closeBurger"
            class="absolute top-6 right-6 text-white text-4xl">
      &times;
    </button>

    <div class="flex flex-col justify-start items-center space-y-6 px-6 pt-24">
      ${burgerLink("index.html", "Home")}
      ${burgerLink("moi.html", "Moi")}
      ${burgerLink("experience.html", "Expériences")}
      ${burgerLink("competences.html", "Compétences")}
      ${burgerLink("projets.html", "Projets")}
      ${burgerLink("contact.html", "Contact")}
      ${burgerLink("cv.html", "CV")}
      ${burgerLink("voyages.html", "Voyages")}
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  const burgerBtn = document.getElementById("burgerBtn");
  const closeBurger = document.getElementById("closeBurger");
  const burgerMenu = document.getElementById("burgerMenu");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("-translate-x-full");
    document.body.classList.add("overflow-hidden");
  });

  closeBurger.addEventListener("click", () => {
    burgerMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
  });
}

function navLink(href, label, page, activePage) {
  const active = page === activePage
    ? "text-[#00ffff]"
    : "hover:text-[#00ffff]";
  return `<a href="${href}" class="hidden lg:inline ${active} transition-colors duration-300">${label}</a>`;
}

function burgerLink(href, label) {
  return `
    <a href="${href}"
       class="text-[#00ffff] border border-[#00ffff]
              rounded-full text-center font-semibold py-3 w-80
              hover:bg-[#00ffff]/20 transition">
      ${label}
    </a>
  `;
}
