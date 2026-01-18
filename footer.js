// footer.js
document.addEventListener("DOMContentLoaded", () => {

  // === FOOTER ===
  const footer = document.createElement("footer");
  footer.className = "bg-[#0E1117] text-white pt-6 pb-6 border-t border-[#00ffff]/20"; // fond gris foncé

  footer.innerHTML = `
    <!-- Bandeau des technologies -->
    <div id="techBanner" class="w-full overflow-hidden border-t border-b border-[#00ffff]/20 -mt-6">
      <div class="tech-scroll flex gap-12 whitespace-nowrap">
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">HTML</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">CSS</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Tailwind CSS</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">JavaScript</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Python</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Spline</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">IA</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Créativité</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Développement</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Design</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Interactivité</span>

        <!-- Dupliqué pour loop infini -->
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">HTML</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">CSS</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Tailwind CSS</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">JavaScript</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Python</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Spline</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">IA</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Créativité</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Développement</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Design</span>
        <span class="text-[#00ffff] font-bold text-[1.75rem] uppercase tracking-wider">Interactivité</span>
      </div>
    </div>

    <!-- Liens pages -->
    <div class="max-w-7xl mx-auto mt-6 flex flex-wrap justify-center gap-6 text-[#00ffff] font-semibold text-lg">
      <a href="index.html" class="hover:underline">Home</a>
      <a href="moi.html" class="hover:underline">Moi</a>
      <a href="experience.html" class="hover:underline">Expériences</a>
      <a href="competences.html" class="hover:underline">Compétences</a>
      <a href="projets.html" class="hover:underline">Projets</a>
      <a href="contact.html" class="hover:underline">Contact</a>
      <a href="cv.html" class="hover:underline">CV</a>
      <a href="voyages.html" class="hover:underline">Voyages</a>
    </div>

    <!-- Mentions et crédits -->
    <div class="max-w-3xl mx-auto mt-6 text-center text-gray-300 text-sm space-y-2 px-6">
      <p>Le robot, la sphère et le fond animé des pages Contact et CV ne proviennent pas de moi. Certains modèles proviennent de la bibliothèque officielle de Spline, d’autres ont été créés par des membres de la communauté et sont utilisés selon la licence fournie par l’auteur.</p>
      <p>Certains icônes et éléments graphiques ne m’appartiennent pas et proviennent de bibliothèques externes.</p>
      <p>Ce site a été créé en grande partie grâce à l’intelligence artificielle, avec l’objectif de présenter mes projets, expériences et compétences de manière claire, moderne et interactive.</p>
    </div>
  `;

  document.body.appendChild(footer);

  // === STYLE DU BANDEAU ===
  const style = document.createElement("style");
  style.textContent = `
    @keyframes scrollTech {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .tech-scroll {
      display: inline-flex;
      gap: 3rem;
      animation: scrollTech 25s linear infinite;
    }
  `;
  document.head.appendChild(style);

});
