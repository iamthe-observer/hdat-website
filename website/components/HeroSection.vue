<template>
  <section class="relative min-h-[100dvh] bg-[#FAF8F5] flex flex-col justify-between pt-20 pb-8 sm:pt-28 sm:pb-12 overflow-hidden">
    <!-- Top subtle grid accents -->
    <div class="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#7C3AED_0.75px,transparent_0.75px)] [background-size:24px_24px]"></div>

    <!-- Center Stage: The Framed Documentary Canvas -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 my-auto flex flex-col items-center">
      
      <!-- The Photo Frame Container with Interactive Cross-fade -->
      <div 
        id="hero-card-frame"
        class="relative w-full min-h-[66dvh] sm:min-h-0 sm:aspect-[16/10] max-h-[600px] sm:max-h-[580px] bg-[#11161B] overflow-hidden shadow-2xl transition-all duration-700 group cursor-pointer"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- Layer 1: Authoritative Solo Stateswoman Portrait -->
        <div 
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
          :class="isHovered || scrollCrossfade ? 'opacity-0 scale-105' : 'opacity-100 scale-100'"
          style="transition-property: opacity, transform;"
        >
          <img src="/images/HDAT.jpeg" alt="Hon. Dorcas Affo-Toffey" class="w-full h-full object-cover object-top" />
        </div>

        <!-- Layer 2: Grassroots Connection (Among the People of Jomoro) -->
        <div 
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
          :class="isHovered || scrollCrossfade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
          style="transition-property: opacity, transform;"
        >
          <svg class="w-full h-full object-cover" viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="communityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#191024" />
                <stop offset="40%" stop-color="#2D124D" />
                <stop offset="100%" stop-color="#09050F" />
              </linearGradient>
            </defs>
            <rect width="1000" height="625" fill="url(#communityGrad)" />
            <!-- Graphic Crowd of Hands Raised in Community Celebration (Mirroring Glenn Ligon inspiration) -->
            <g opacity="0.35" fill="#FFFFFF">
              <!-- Uplifted hands and crowd silhouetted -->
              <path d="M100 625 C 100 520, 140 460, 160 410 C 170 390, 160 360, 150 350 C 140 340, 130 360, 125 380 C 110 420, 90 480, 80 625 Z" />
              <path d="M220 625 C 220 500, 250 440, 270 380 C 278 355, 268 335, 255 330 C 242 325, 235 345, 230 370 C 215 430, 195 500, 190 625 Z" />
              <path d="M340 625 C 350 480, 390 420, 410 360 C 418 335, 408 315, 395 310 C 382 305, 375 325, 370 350 C 355 410, 330 490, 320 625 Z" />
              <path d="M660 625 C 650 480, 610 420, 590 360 C 582 335, 592 315, 605 310 C 618 305, 625 325, 630 350 C 645 410, 670 490, 680 625 Z" />
              <path d="M780 625 C 780 500, 750 440, 730 380 C 722 355, 732 335, 745 330 C 758 325, 765 345, 770 370 C 785 430, 805 500, 810 625 Z" />
              <path d="M900 625 C 900 520, 860 460, 840 410 C 830 390, 840 360, 850 350 C 860 340, 870 360, 875 380 C 890 420, 910 480, 920 625 Z" />
            </g>

            <!-- Warm Light Beam on the Leader -->
            <circle cx="500" cy="280" r="160" fill="#7C3AED" opacity="0.3" filter="blur(40px)" />
            <g transform="translate(500, 310)" text-anchor="middle">
              <circle cx="0" cy="10" r="70" fill="#EAE5DC" opacity="0.95" />
              <ellipse cx="0" cy="-35" rx="85" ry="45" fill="#7C3AED" />
              <path d="M-80,200 L-50,70 L50,70 L80,200 Z" fill="#D4AF37" opacity="0.85" />
            </g>
          </svg>
        </div>

        <!-- Vignette & Cinematic Shadow Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/75 pointer-events-none"></div>

        <!-- Overlaid Content (Mobile-Tailored & Desktop Reference Layout) -->
        <div class="absolute inset-0 flex flex-col justify-between items-center text-center p-5 sm:p-10 z-20 pointer-events-none">
          
          <!-- Top Kicker (Italic Serif) -->
          <div class="pt-2 sm:pt-4">
            <span class="font-serif italic text-white/90 text-lg sm:text-2xl md:text-3xl tracking-wide drop-shadow-md block">
              Member of Parliament & Deputy Minister
            </span>
          </div>

          <!-- Massive Headline Overlapping Center of Image -->
          <div class="w-full my-auto px-1 sm:px-2">
            <h1 class="font-display font-extrabold text-accent-purple text-[2.1rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight sm:leading-[0.92] uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)] select-none">
              Leadership Rooted <br class="hidden sm:inline" /> In Dignity
            </h1>
          </div>

          <!-- Layered CTA Button (Lower Third of Frame) -->
          <div class="pb-3 sm:pb-4 pointer-events-auto">
            <a
              href="#story"
              class="inline-flex items-center gap-2.5 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#FAF8F5] border-2 border-accent-purple text-accent-purple font-display font-bold text-[11px] sm:text-sm tracking-widest uppercase hover:bg-accent-purple hover:text-white transition-all duration-300 shadow-xl group/btn"
            >
              <span>Discover The Vision</span>
              <span class="group-hover/btn:translate-x-1.5 transition-transform duration-200">→</span>
            </a>
          </div>

        </div>

        <!-- Photo Credit / Archive Stamp (Bottom Right of Frame on Desktop) -->
        <div class="hidden sm:block absolute bottom-3 right-4 z-20 pointer-events-none">
          <span class="font-mono text-[9px] uppercase tracking-wider text-white/40">
            {{ isHovered || scrollCrossfade ? 'Mode: Community In Action · Jomoro' : 'Mode: Official Stateswoman Mandate' }}
          </span>
        </div>

        <!-- Interactive Hint (Top Left of Frame) -->
        <div class="absolute top-4 left-4 z-20 pointer-events-none hidden sm:block">
          <span class="font-mono text-[9px] uppercase tracking-widest text-accent-purple bg-black/50 px-2.5 py-1 border border-accent-purple/30 backdrop-blur-sm">
            Hover to Reveal Community
          </span>
        </div>

      </div>

    </div>

    <!-- Bottom Scroll Indicator (Exact match from reference screenshot: "EXPLORE" + vertical stroke line) -->
    <div class="relative z-10 flex flex-col items-center mt-6">
      <a 
        href="#story" 
        class="group flex flex-col items-center focus:outline-none"
        aria-label="Scroll to exploration"
      >
        <span class="font-display font-bold text-[11px] uppercase tracking-ultra text-accent-purple group-hover:text-accent-purple-dark transition-colors">
          Explore
        </span>
        <div class="w-[2px] h-9 bg-accent-purple mt-2 origin-top transform group-hover:scale-y-125 transition-transform duration-300"></div>
      </a>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isHovered = ref(false)
const scrollCrossfade = ref(false)

const handleScroll = () => {
  // Crossfade image automatically as user begins scrolling down
  scrollCrossfade.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
