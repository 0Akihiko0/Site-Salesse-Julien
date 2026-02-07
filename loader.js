function enablePageLoader(duration = 800) {
  // On détecte le mode (clair ou sombre)
  const isDark = document.documentElement.classList.contains('dark');
  
  // Couleurs adaptatives avec transparence pour le flou
  const overlayBg = isDark ? "rgba(10, 10, 10, 0.7)" : "rgba(255, 255, 255, 0.7)";
  const accentColor = isDark ? "#ffffff" : "#000000";
  const ringColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

  // Création de l'overlay
  const loaderDiv = document.createElement("div");
  loaderDiv.id = "pageLoaderOverlay";
  loaderDiv.style.backgroundColor = overlayBg;
  loaderDiv.style.backdropFilter = "blur(20px)"; // L'effet de flou
  loaderDiv.style.webkitBackdropFilter = "blur(20px)"; // Support Safari
  loaderDiv.className = `
    fixed top-0 left-0 w-full h-full z-[9999]
    flex flex-col items-center justify-center 
    transition-all duration-700 ease-in-out
  `;

  // Spinner plus GROS (w-20 h-20 au lieu de w-12)
  const spinner = document.createElement("div");
  spinner.style.border = `4px solid ${ringColor}`;
  spinner.style.borderTop = `4px solid ${accentColor}`;
  spinner.className = `
    rounded-full w-20 h-20 animate-spin mb-8
  `;

  // Texte plus GROS et plus espacé
  const text = document.createElement("span");
  text.innerText = "JULIEN SALESSE";
  text.style.color = accentColor;
  text.className = "text-sm font-black tracking-[0.6em] uppercase";

  loaderDiv.appendChild(spinner);
  loaderDiv.appendChild(text);
  document.body.appendChild(loaderDiv);

  // Animation de sortie
  window.addEventListener("load", () => {
    setTimeout(() => {
      loaderDiv.style.opacity = "0";
      loaderDiv.style.backdropFilter = "blur(0px)";
      setTimeout(() => loaderDiv.remove(), 700);
    }, duration);
  });
}

// Lancement
enablePageLoader();