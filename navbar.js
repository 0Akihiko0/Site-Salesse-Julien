function addNavbar(activePage = "") {
    const navbarHTML = `
    <header class="fixed top-0 left-0 w-full z-[200] p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <div class="text-2xl font-black tracking-tighter uppercase cursor-pointer" onclick="window.location.href='index.html'">
            Julien<span class="text-zinc-500 italic">_</span>
        </div>
        
        <div class="flex items-center gap-4">
            <button id="theme-toggle" class="p-2">
                <span id="theme-icon-container"></span>
            </button>
            <button id="menu-btn" class="border border-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Menu
            </button>
        </div>
    </header>

    <div id="mobile-dock" class="md:hidden fixed bottom-6 left-0 right-0 z-[100] flex justify-center px-6">
        <nav class="w-full max-w-[340px] bg-[#0a0a0a] border border-zinc-800 rounded-full p-3 flex justify-around items-center shadow-2xl">
            <a href="index.html" class="${activePage === 'home' ? 'text-white' : 'text-zinc-500'}"><i data-lucide="home"></i></a>
            <a href="moi.html" class="${activePage === 'moi' ? 'text-white' : 'text-zinc-500'}"><i data-lucide="user"></i></a>
            <a href="contact.html" class="${activePage === 'contact' ? 'text-white' : 'text-zinc-500'}"><i data-lucide="mail"></i></a>
            <button onclick="tarteaucitron.userInterface.openPanel();" class="text-zinc-500"><i data-lucide="cookie"></i></button>
        </nav>
    </div>

    <div id="menu-overlay" class="fixed inset-0 bg-[#0a0a0a] z-[150] flex flex-col opacity-0 pointer-events-none transition-opacity duration-500 overflow-hidden">
        <nav class="flex flex-col gap-1 md:gap-3 p-6 md:p-24 my-auto w-full max-w-full overflow-hidden">
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
    
    // ... (Le reste du code JS de gestion du bouton et du thème reste le même) ...
    const themeContainer = document.getElementById('theme-icon-container');
    const overlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn');

    const refreshIcons = () => { if (window.lucide) lucide.createIcons(); };

    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    themeContainer.innerHTML = `<i data-lucide="${isDark ? 'moon' : 'sun'}" class="w-6 h-6 text-white"></i>`;
    refreshIcons();

    document.getElementById('theme-toggle').onclick = () => {
        const currentlyDark = document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', !currentlyDark);
        localStorage.theme = !currentlyDark ? 'dark' : 'light';
        themeContainer.innerHTML = `<i data-lucide="${!currentlyDark ? 'moon' : 'sun'}" class="w-6 h-6 text-white"></i>`;
        refreshIcons();
    };

    menuBtn.onclick = () => {
        const isOpen = overlay.classList.contains('opacity-100');
        if (!isOpen) {
            overlay.classList.add('opacity-100', 'pointer-events-auto');
            menuBtn.innerText = "Fermer";
            document.body.style.overflow = "hidden";
        } else {
            overlay.classList.remove('opacity-100', 'pointer-events-auto');
            menuBtn.innerText = "Menu";
            document.body.style.overflow = "";
        }
    };
}

function navLink(href, label, isActive) {
    /**
     * TAILLE RÉDUITE POUR ÉVITER LE SCROLL :
     * Mobile : env. 32px (text-4xl)
     * Tablette/Desktop : s'adapte jusqu'à 80px max
     */
    const sizeClass = "text-[clamp(2rem,7vw,5rem)]"; 
    const opacityClass = isActive ? 'opacity-100 italic' : 'opacity-20 hover:opacity-100 hover:italic';
    
    return `
    <a href="${href}" class="${sizeClass} font-black uppercase tracking-tighter text-white transition-all duration-300 block leading-[0.85] whitespace-nowrap ${opacityClass}">
        ${label}
    </a>`;
}
