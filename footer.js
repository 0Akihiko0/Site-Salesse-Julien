function addFooter() {
    const footerHTML = `
    <footer class="pt-32 pb-24 md:pb-12 px-6 md:px-24 border-t border-white/10 bg-[#0a0a0a] text-white transition-none">
        <div class="max-w-7xl mx-auto flex flex-col gap-12">
            <div class="flex flex-col md:flex-row justify-between items-start gap-12">
                <div class="w-full md:w-1/2 space-y-6">
                    <div class="text-3xl font-black tracking-tighter uppercase italic text-white">Julien Salesse</div>
                    <div class="text-[11px] md:text-xs opacity-40 leading-relaxed space-y-3 text-white">
                        <p>Le robot, la montre et le fond animé des pages Home, Contact et CV ne proviennent pas de moi. Certains modèles proviennent de la bibliothèque officielle de Spline, d’autres ont été créés par des membres de la communauté et sont utilisés selon la licence fournie par l’auteur.</p>
                        <p>Certains icônes et éléments graphiques ne m’appartiennent pas et proviennent de bibliothèques externes. Ce site a été créé en grande partie grâce à l’intelligence artificielle, avec l’objectif de présenter mes projets, expériences et compétences de manière claire, moderne et interactive.</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                    <div class="flex flex-col gap-3 text-sm">
                        <p class="text-[10px] font-black uppercase tracking-widest opacity-20 text-white">Exploration</p>
                        <a href="index.html" class="opacity-50 hover:opacity-100 transition text-white">Accueil</a>
                        <a href="moi.html" class="opacity-50 hover:opacity-100 transition text-white">Moi</a>
                        <a href="projets.html" class="opacity-50 hover:opacity-100 transition text-white">Projets</a>
                    </div>
                    <div class="flex flex-col gap-3 text-sm">
                        <p class="text-[10px] font-black uppercase tracking-widest opacity-20 text-white">Parcours</p>
                        <a href="experience.html" class="opacity-50 hover:opacity-100 transition text-white">Expériences</a>
                        <a href="competences.html" class="opacity-50 hover:opacity-100 transition text-white">Compétences</a>
                        <a href="voyages.html" class="opacity-50 hover:opacity-100 transition text-white">Voyages</a>
                    </div>
                    <div class="flex flex-col gap-3 text-sm">
                        <p class="text-[10px] font-black uppercase tracking-widest opacity-20 text-white">Contact & CV</p>
                        <a href="contact.html" class="opacity-50 hover:opacity-100 transition text-white">Me contacter</a>
                        <a href="cv.html" class="opacity-50 hover:opacity-100 transition text-white">Mon CV</a>
                    </div>
                </div>
            </div>

            <div class="pt-10 border-t border-white/10 flex flex-col items-center gap-4">
                <a href="politique-de-confidentialite.html" class="text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100 transition text-white">Politique de confidentialité</a>
                <p class="text-[10px] font-bold uppercase tracking-[0.3em] opacity-20 text-center text-white">
                    © 2026 Julien Salesse. Tous droits réservés.
                </p>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}