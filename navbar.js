function addNavbar(activePage = "") {
    const navbarHTML = `
    <header class="fixed top-0 w-full z-[110] p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <div class="text-2xl font-black tracking-tighter uppercase cursor-pointer" onclick="window.location.href='index.html'">
            Julien<span class="text-zinc-500 italic">_</span>
        </div>
        
        <div class="flex items-center gap-4 md:gap-10">
            <button id="theme-toggle" class="p-2 transition-transform hover:scale-110">
                <span id="theme-icon-container"></span>
            </button>
            <button id="menu-btn" class="border border-white px-5 py-1.5 md:px-6 md:py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Menu
            </button>
        </div>
    </header>

    <div class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-[340px]">
        <nav class="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-full p-3 flex justify-around items-center shadow-2xl text-zinc-400">
            <a href="index.html" class="${activePage === 'home' ? 'text-black dark:text-white' : ''}"><i data-lucide="home"></i></a>
            <a href="moi.html" class="${activePage === 'moi' ? 'text-black dark:text-white' : ''}"><i data-lucide="user"></i></a>
            <a href="contact.html" class="${activePage === 'contact' ? 'text-black dark:text-white' : ''}"><i data-lucide="mail"></i></a>
            
            <button onclick="tarteaucitron.userInterface.openPanel();" class="p-1">
                <i data-lucide="cookie"></i>
            </button>
        </nav>
    </div>

    <div id="menu-overlay" class="fixed inset-0 bg-zinc-100 dark:bg-[#121212] z-[100] flex flex-col opacity-0 pointer-events-none transition-all duration-500 overflow-y-auto">
        <nav class="flex flex-col gap-2 md:gap-5 p-10 pt-32 md:p-24 my-auto">
            ${navLink("index.html", "Home", activePage === "home")}
            ${navLink("moi.html", "Moi", activePage === "moi")}
            ${navLink("experience.html", "Expériences", activePage === "experience")}
            ${navLink("competences.html", "Compétences", activePage === "competences")}
            ${navLink("projets.html", "Projets", activePage === "projets")}
            ${navLink("voyages.html", "Voyages", activePage === "voyages")}
            ${navLink("cv.html", "CV", activePage === "cv")}
            ${navLink("contact.html", "Contact", activePage === "contact")}
        </nav>
    </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const themeContainer = document.getElementById('theme-icon-container');
    
    const updateThemeIcon = () => {
        const isDark = document.documentElement.classList.contains('dark');
        themeContainer.innerHTML = `<i data-lucide="${isDark ? 'moon' : 'sun'}" class="w-6 h-6"></i>`;
        if (window.lucide) lucide.createIcons();
    };

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    updateThemeIcon();

    document.getElementById('theme-toggle').onclick = () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        updateThemeIcon();
    };

    const overlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.onclick = () => {
        const isOpen = overlay.classList.contains('opacity-100');
        overlay.classList.toggle('opacity-100');
        overlay.classList.toggle('pointer-events-auto');
        menuBtn.innerText = isOpen ? "Menu" : "Fermer";
        
        // Empêche le scroll du body quand le menu est ouvert
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };
}

function navLink(href, label, isActive) {
    // Taille de texte réduite sur mobile (text-3xl) pour éviter les retours à la ligne moches
    return `<a href="${href}" class="text-3xl md:text-7xl font-black uppercase tracking-tighter transition-all ${isActive ? 'opacity-100 italic text-black dark:text-white' : 'opacity-20 hover:opacity-100 hover:italic text-black dark:text-white'}">${label}</a>`;
}