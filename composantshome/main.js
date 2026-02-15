import { Hero } from './hero.js';
import { Projects } from './projects.js';
import { ContactCV } from './contactcv.js';
import { Travel } from './travel.js';

const app = document.getElementById('home-app');

function manageSplines() {
    // 1. HERO
    const heroContainer = document.getElementById('spline-container');
    const heroFallback = document.getElementById('hero_fallback_img');
    if (heroContainer && heroContainer.querySelector('spline-viewer')) {
        setTimeout(() => { if(heroFallback) heroFallback.style.opacity = '0'; }, 800);
    }

    // 2. CONTACT CV
    const cvContainer = document.getElementById('spline-container-contactcv');
    const cvFallback = document.getElementById('contactcv_fallback_img');
    const cvBadge = document.getElementById('contactcv-badge');
    
    // Vérification Tarteaucitron pour Spline
    const isSplineAllowed = (window.tarteaucitron && window.tarteaucitron.state.spline === true);

    if (cvContainer && isSplineAllowed && !cvContainer.querySelector('spline-viewer')) {
        const url = cvContainer.getAttribute('data-spline-url');
        cvContainer.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
        
        setTimeout(() => {
            if(cvFallback) cvFallback.style.opacity = '0';
            if(cvBadge) cvBadge.classList.add('active'); 
        }, 1500);
    }

    // 3. TRAVEL
    const travelContainer = document.getElementById('spline-container-travel');
    const travelBadge = document.getElementById('travel-badge');
    const travelFallback = document.getElementById('travel_fallback_img');
    
    if (travelContainer && travelContainer.querySelector('iframe')) {
        if(travelBadge) travelBadge.classList.add('active');
        if(travelFallback) travelFallback.style.opacity = '0';
    }
}

function initHome() {
    // --- NOUVEL ORDRE ---
    // Hero -> Projets -> Voyage -> Contact/CV
    app.innerHTML = Hero + Projects + Travel + ContactCV; 

    // Recharger les icônes Lucide après injection
    if (window.lucide) lucide.createIcons();

    // Boucle de vérification
    const checkInterval = setInterval(() => {
        manageSplines();
        
        const h = document.querySelector('#spline-container spline-viewer');
        const c = document.querySelector('#spline-container-contactcv spline-viewer');
        const t = document.querySelector('#spline-container-travel iframe');
        
        if (h && c && t) clearInterval(checkInterval);
    }, 1000);

    // Animation au scroll (Reveal)
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));
}

window.addEventListener('DOMContentLoaded', initHome);