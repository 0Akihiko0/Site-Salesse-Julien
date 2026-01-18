function enablePageLoader(duration = 1000) { // durée en ms, ici 1 secondes par défaut
  // Création de l'overlay
  const loaderDiv = document.createElement("div");
  loaderDiv.id = "pageLoaderOverlay";
  loaderDiv.className = `
    fixed top-0 left-0 w-full h-full z-50
    bg-[#0e1117]/90 backdrop-blur-lg
    flex items-center justify-center transition-all duration-1000
  `;

  // Spinner
  const spinner = document.createElement("div");
  spinner.className = `
    border-4 border-[#00ffff]/20 border-t-[#00ffff] 
    rounded-full w-16 h-16 animate-spin
  `;
  loaderDiv.appendChild(spinner);
  document.body.appendChild(loaderDiv);

  // Quand la page est complètement charg
  window.addEventListener("load", () => {
    // On attend un peu plus longtemps si besoin
    setTimeout(() => {
      loaderDiv.classList.add("opacity-0", "backdrop-blur-0");
      setTimeout(() => loaderDiv.remove(), 1000); // supprime après la transition
    }, duration); 
  });
}
