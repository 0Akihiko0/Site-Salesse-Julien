import { Hero } from './hero.js';
import { Projects } from './projects.js';
import { ContactCV } from './contactcv.js';
import { Travel } from './travel.js';

const app = document.getElementById('home-app');

function manageSplines() {
    const isSplineAllowed = (window.tarteaucitron && window.tarteaucitron.state.spline === true);

    // 1. HERO
    const heroContainer = document.getElementById('spline-container');
    const heroFallback = document.getElementById('hero_fallback_img');
    if (heroContainer && isSplineAllowed) {
        if (!heroContainer.querySelector('spline-viewer')) {
            const url = heroContainer.getAttribute('data-spline-url');
            heroContainer.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
        }
        const viewer = heroContainer.querySelector('spline-viewer');
        if (viewer && viewer.shadowRoot && viewer.shadowRoot.querySelector('canvas')) {
            heroFallback.style.opacity = '0';
            heroContainer.style.opacity = '1';
            setTimeout(() => { if(heroFallback) heroFallback.style.display = 'none'; }, 1000);
        }
    }

    // 2. CONTACT CV
    const cvContainer = document.getElementById('spline-container-contactcv');
    const cvFallback = document.getElementById('contactcv_fallback_img');
    const cvBadge = document.getElementById('contactcv-badge');
    
    if (cvContainer && isSplineAllowed) {
        if (!cvContainer.querySelector('spline-viewer')) {
            const url = cvContainer.getAttribute('data-spline-url');
            cvContainer.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
        }
        const viewer = cvContainer.querySelector('spline-viewer');
        if (viewer && viewer.shadowRoot && viewer.shadowRoot.querySelector('canvas')) {
            cvFallback.style.opacity = '0';
            cvContainer.style.opacity = '1';
            cvBadge.style.opacity = '1';
            setTimeout(() => { if(cvFallback) cvFallback.style.display = 'none'; }, 1000);
        }
    }

    // 3. TRAVEL
    const travelContainer = document.getElementById('spline-container-travel');
    const travelBadge = document.getElementById('travel-badge');
    const travelFallback = document.getElementById('travel_fallback_img');
    if (travelContainer && travelContainer.querySelector('iframe')) {
        if(travelBadge) travelBadge.style.opacity = '1';
        if(travelFallback) travelFallback.style.opacity = '0';
    }
}

function initHome() {
    // Injection (Ordre : Hero -> Projets -> Travel -> Contact)
    app.innerHTML = Hero + Projects + Travel + ContactCV; 

    if (window.lucide) lucide.createIcons();

    const checkInterval = setInterval(() => {
        manageSplines();
        const h = document.querySelector('#spline-container spline-viewer')?.shadowRoot?.querySelector('canvas');
        const c = document.querySelector('#spline-container-contactcv spline-viewer')?.shadowRoot?.querySelector('canvas');
        const t = document.querySelector('#spline-container-travel iframe');
        
        if (h && c && t) clearInterval(checkInterval);
    }, 1000);

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));
}

window.addEventListener('DOMContentLoaded', initHome);
