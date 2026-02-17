export const ContactCV = `
<section class="bg-zinc-50 dark:bg-[#0a0a0a] py-32 px-6 md:px-24 border-t border-zinc-900">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center reveal">
        
        <div class="space-y-10"> <h2 class="text-5xl md:text-8xl font-black uppercase text-black dark:text-white leading-[0.9]">
                Contact &<br><span class="text-outline-premium italic">CV.</span>
            </h2>
            <p class="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-lg">
                Téléchargez mon CV ou contactez-moi pour toute question ou remarque.
            </p>
            
            <div class="flex flex-wrap gap-6 pt-4"> <a href="cv.html" class="group px-10 py-6 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                    <span>Télécharger CV</span>
                    <i data-lucide="download" class="w-4 h-4"></i>
                </a>
                
                <a href="contact.html" class="group px-10 py-6 border-2 border-zinc-200 dark:border-zinc-800 text-black dark:text-white rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <span>Me contacter</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        </div>

        <div class="spline-frame shadow-2xl relative min-h-[500px]"> <img src="Photos/watch.png" id="contactcv_fallback_img" class="absolute inset-0 w-full h-full object-cover grayscale">
            
            <div id="spline-container-contactcv" data-spline-url="https://prod.spline.design/ZfeTtcJ653OnJxLN/scene.splinecode"></div>
            
            <div id="contactcv-badge" class="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase">
                <i data-lucide="mouse-pointer-2" class="w-3 h-3 animate-pulse"></i>
                <span>Interactif</span>
            </div>
        </div>
    </div>
</section>
`;
