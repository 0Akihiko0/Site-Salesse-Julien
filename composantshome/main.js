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

    // 2. CONTACT CV (Optimisé avec Fondu et Badge)
    const cvContainer = document.getElementById('spline-container-contactcv');
    const cvFallback = document.getElementById('contactcv_fallback_img');
    const cvBadge = document.getElementById('contactcv-badge');
    
    const isSplineAllowed = (window.tarteaucitron && window.tarteaucitron.state.spline === true);

    if (cvContainer && isSplineAllowed) {
        // Injection du viewer s'il n'existe pas
        if (!cvContainer.querySelector('spline-viewer')) {
            const url = cvContainer.getAttribute('data-spline-url');
            cvContainer.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
        }

        // Détection du chargement réel pour le fondu
        const viewer = cvContainer.querySelector('spline-viewer');
        // On vérifie si le canvas est généré dans le shadow DOM de spline-viewer
        if (viewer && viewer.shadowRoot && viewer.shadowRoot.querySelector('canvas')) {
            cvFallback.style.opacity = '0';
            cvContainer.style.opacity = '1';
            cvBadge.style.opacity = '1';
            
            // On cache définitivement l'image après 1s pour optimiser
            setTimeout(() => { if(cvFallback) cvFallback.style.display = 'none'; }, 1000);
        }
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
    // Injection des composants
    app.innerHTML = Hero + Projects + Travel + ContactCV; 

    // Icônes Lucide
    if (window.lucide) lucide.createIcons();

    // Boucle de vérification des chargements
    const checkInterval = setInterval(() => {
        manageSplines();
        
        const h = document.querySelector('#spline-container spline-viewer');
        const c = document.querySelector('#spline-container-contactcv spline-viewer');
        const t = document.querySelector('#spline-container-travel iframe');
        
        if (h && c && t) clearInterval(checkInterval);
    }, 1000);

    // Reveal au scroll
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));
}

window.addEventListener('DOMContentLoaded', initHome);
