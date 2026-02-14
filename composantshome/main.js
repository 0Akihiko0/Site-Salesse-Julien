import { Hero } from './hero.js';
import { Projects } from './projects.js';
import { Focus } from './focus.js';

const app = document.getElementById('home-app');

function manageSplines() {
    // 1. HERO (Non interactif via CSS, géré par cookies.js)
    const heroContainer = document.getElementById('spline-container');
    const heroFallback = document.getElementById('hero_fallback_img');
    
    if (heroContainer && heroContainer.querySelector('spline-viewer')) {
        setTimeout(() => {
            if(heroFallback) heroFallback.style.opacity = '0';
        }, 800);
    }

    // 2. FOCUS (Interactif + Badge)
    const focusContainer = document.getElementById('spline-container-focus');
    const focusFallback = document.getElementById('focus_fallback_img');
    const focusBadge = document.getElementById('focus-badge'); // On récupère le badge

    const isSplineAllowed = (window.tarteaucitron && window.tarteaucitron.state.spline === true);

    if (focusContainer && isSplineAllowed && !focusContainer.querySelector('spline-viewer')) {
        const url = focusContainer.getAttribute('data-spline-url');
        focusContainer.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
        
        setTimeout(() => {
            if(focusFallback) focusFallback.style.opacity = '0';
            // C'est ici qu'on fait apparaître le badge !
            if(focusBadge) focusBadge.classList.add('active'); 
        }, 1500);
    }
}

function initHome() {
    app.innerHTML = Hero + Projects + Focus;
    if (window.lucide) lucide.createIcons();

    // Boucle de vérification
    const checkInterval = setInterval(() => {
        manageSplines();
        
        // Si les deux splines sont là, on arrête de vérifier
        const h = document.querySelector('#spline-container spline-viewer');
        const f = document.querySelector('#spline-container-focus spline-viewer');
        if (h && f) {
            clearInterval(checkInterval);
        }
    }, 1000);

    // Animations Reveal
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));
}

window.addEventListener('DOMContentLoaded', initHome);