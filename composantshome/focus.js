export const Focus = `
<section class="bg-zinc-50 dark:bg-[#0a0a0a] py-32 px-6 md:px-24 border-t border-zinc-900">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center reveal">
        <div class="space-y-8">
            <h2 class="text-4xl md:text-7xl font-black uppercase text-black dark:text-white">
                Contact &<br><span class="text-outline-premium italic">CV.</span>
            </h2>
            <p class="text-zinc-500 dark:text-zinc-400 text-xl leading-relaxed">
                Téléchargez mon CV ou contactez-moi pour toute question ou remarque.
            </p>
            <div class="flex flex-wrap gap-4">
                <a href="cv.html" class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
                    Télécharger CV
                </a>
                <a href="contact.html" class="px-8 py-4 border border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
                    Me contacter
                </a>
            </div>
        </div>

        <div class="spline-frame shadow-2xl relative">
            <img src="Photos/watch.png" id="focus_fallback_img" class="absolute inset-0 w-full h-full object-cover grayscale">
            
            <div id="spline-container-focus" data-spline-url="https://prod.spline.design/ZfeTtcJ653OnJxLN/scene.splinecode"></div>
            
            <div id="focus-badge" class="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase">
                <i data-lucide="mouse-pointer-2" class="w-3 h-3 animate-pulse"></i>
                <span>Interactif</span>
            </div>
        </div>
    </div>
</section>
`;