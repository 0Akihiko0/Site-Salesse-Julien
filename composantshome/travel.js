export const Travel = `
<div class="px-6 md:px-24 pt-20 pb-10 reveal">
    <div class="flex items-center gap-6 opacity-20 dark:opacity-10">
        <span class="text-xs font-black uppercase tracking-[0.5em] whitespace-nowrap text-zinc-900 dark:text-white">Exploration</span>
        <div class="h-[1px] w-full bg-gradient-to-r from-zinc-900 dark:from-white to-transparent"></div>
    </div>
</div>

<section class="pb-32 px-4 md:px-24 reveal">
    <div class="relative w-full h-[500px] md:h-[650px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden group border border-zinc-100 dark:border-zinc-900 shadow-2xl">
        
        <div class="absolute inset-0 z-0 bg-zinc-200 dark:bg-zinc-800">
            <div id="spline-container-travel" class="custommaps_embed w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out" 
                 data-url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53149141.62970537!2d-29.959063300474067!3d35.60390121596058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1771147750943!5m2!1sfr!2sfr">
                <img src="Photos/cartem.png" id="travel_fallback_img" alt="Voyages" class="w-full h-full object-cover">
            </div>
        </div>

        <div id="travel-badge" class="absolute top-6 right-6 md:top-10 md:right-10 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-[9px] md:text-[10px] text-white font-black uppercase tracking-[0.2em]">
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Interactif
        </div>

        <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 z-10 md:max-w-2xl">
            <div class="bg-black/40 md:bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/5 p-8 md:p-14 rounded-[2rem] shadow-2xl text-white">
                <p class="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold mb-4 opacity-60 flex items-center gap-3">
                    <i data-lucide="compass" class="w-4 h-4"></i> Horizon
                </p>
                <h2 class="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.85]">
                    Le monde <br>en immersion<span class="text-zinc-500">.</span>
                </h2>
                <p class="text-white/80 text-base md:text-xl mb-8 italic leading-relaxed max-w-lg">
                    Découvrez mes voyages et mes destinations à travers ces cartes interactives !
                </p>
                <a href="voyages.html" class="group/btn inline-flex items-center gap-5">
                    <span class="text-white font-bold uppercase tracking-widest text-xs">Découvrir les destinations</span>
                    <div class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:scale-110 group-hover/btn:text-black transition-all duration-500">
                        <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

`;

