import { Hero } from './hero.js';
import { Projects } from './projects.js';
import { Focus } from './focus.js';

const app = document.getElementById('home-app');

function initHome() {
    app.innerHTML = Hero + Projects + Focus;
    if (window.lucide) lucide.createIcons();

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));

    if (window.tarteaucitron) {
        tarteaucitron.services.spline_home = {
            "key": "spline_home", "type": "video", "name": "Spline 3D", "uri": "https://spline.design/", "needConsent": true, "cookies": [],
            "js": function () {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = 'https://unpkg.com/@splinetool/viewer@1.12.57/build/spline-viewer.js';
                
                script.onload = () => {
                    // HERO (NON INTERACTIF)
                    const heroBox = document.getElementById('spline_embed');
                    const heroFallback = document.getElementById('hero_fallback_img');
                    if (heroBox) {
                        const v1 = document.createElement('spline-viewer');
                        v1.setAttribute('url', 'https://prod.spline.design/svr5QCKQOCmAjuui/scene.splinecode');
                        v1.style.pointerEvents = "none"; 
                        heroBox.appendChild(v1);
                        setTimeout(() => {
                            heroBox.classList.add('loaded');
                            if (heroFallback) heroFallback.style.opacity = '0';
                        }, 1000);
                    }
                    
                    // FOCUS (INTERACTIF)
                    const focusBox = document.getElementById('spline_focus_embed');
                    const focusFallback = document.getElementById('focus_fallback_img');
                    if (focusBox) {
                        const v2 = document.createElement('spline-viewer');
                        v2.setAttribute('url', 'https://prod.spline.design/ZfeTtcJ653OnJxLN/scene.splinecode');
                        v2.style.pointerEvents = "auto";
                        focusBox.appendChild(v2);
                        setTimeout(() => {
                            focusBox.classList.add('visible');
                            if (focusFallback) focusFallback.style.opacity = '0';
                        }, 1500);
                    }
                };
                document.head.appendChild(script);
            }
        };
        (tarteaucitron.job = tarteaucitron.job || []).push('spline_home');
    }
}

window.addEventListener('DOMContentLoaded', initHome);