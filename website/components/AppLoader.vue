<template>
  <Transition name="loader-fade">
    <div v-if="visible" class="loader-stage" aria-hidden="true">
      <!-- Backdrop that reveals the page around the card as it zooms out into the HeroCard -->
      <div
        class="loader-backdrop"
        :class="{
          'backdrop-reveal': phase === 'zoom-out' || phase === 'docked'
        }"
      >
        <!-- Subtle radial grid matching the HeroSection background -->
        <div class="backdrop-grid"></div>
      </div>

      <!-- Top/Bottom Editorial Status HUD (visible during rapid picture cycling) -->
      <div class="loader-hud-top" :class="{ 'hud-hidden': phase !== 'cycling' }">
        <span class="font-mono text-[10px] uppercase tracking-[0.25em] text-[#11161B]/60">
          Official Archive // Reel
        </span>
        <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-purple font-semibold">
          {{ String(currentSlide + 1).padStart(2, '0') }} / 07
        </span>
      </div>

      <!-- The Morphing Rectangle -> Fullscreen -> HeroCard -->
      <div
        class="loader-card"
        :style="cardDynamicStyle"
      >
        <!-- 7 Rapidly Cycling Placeholder Pictures -->
        <div
          v-for="(slide, idx) in slides"
          :key="idx"
          class="loader-slide"
          :class="{ 'is-active': currentSlide === idx }"
        >
          <!-- If user sets slide.image, render <img>; otherwise render rich editorial placeholder SVG -->
          <img
            v-if="slide.image"
            :src="slide.image"
            :alt="slide.label"
            class="w-full h-full object-cover object-top"
          />

          <svg
            v-else
            class="w-full h-full object-cover"
            viewBox="0 0 600 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient :id="`bg-${idx}`" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" :stop-color="slide.colors[0]" />
                <stop offset="55%" :stop-color="slide.colors[1]" />
                <stop offset="100%" :stop-color="slide.colors[2]" />
              </linearGradient>
            </defs>
            <!-- Background Canvas -->
            <rect width="600" height="800" :fill="`url(#bg-${idx})`" />

            <!-- Editorial Placeholder Composition per Slide -->
            <!-- Slide 1: Architectural Columns -->
            <g v-if="idx === 0" opacity="0.45" stroke="#FAF8F5" stroke-width="2">
              <line x1="120" y1="60" x2="120" y2="740" />
              <line x1="240" y1="60" x2="240" y2="740" />
              <line x1="360" y1="60" x2="360" y2="740" />
              <line x1="480" y1="60" x2="480" y2="740" />
              <circle cx="300" cy="360" r="110" fill="#7C3AED" fill-opacity="0.35" stroke="#D4AF37" stroke-width="1.5" />
            </g>

            <!-- Slide 2: Portrait Silhouette Frame -->
            <g v-else-if="idx === 1">
              <circle cx="300" cy="310" r="95" fill="#EAE5DC" opacity="0.85" />
              <path d="M160,680 C160,490 440,490 440,680 Z" fill="#D4AF37" opacity="0.65" />
              <rect x="90" y="90" width="420" height="620" fill="none" stroke="#FAF8F5" stroke-opacity="0.3" stroke-width="1.5" />
            </g>

            <!-- Slide 3: National Transport / Horizon Lines -->
            <g v-else-if="idx === 2" stroke="#D4AF37" opacity="0.6">
              <path d="M0,550 Q300,420 600,550" fill="none" stroke-width="3" />
              <path d="M0,610 Q300,480 600,610" fill="none" stroke-width="2" />
              <path d="M0,670 Q300,540 600,670" fill="none" stroke-width="1" />
              <circle cx="300" cy="280" r="75" fill="#FAF8F5" opacity="0.8" />
            </g>

            <!-- Slide 4: Jomoro Coastline & Sun -->
            <g v-else-if="idx === 3">
              <circle cx="300" cy="290" r="130" fill="#7C3AED" opacity="0.5" />
              <circle cx="300" cy="290" r="80" fill="#D4AF37" opacity="0.8" />
              <rect x="80" y="480" width="440" height="4" fill="#FAF8F5" opacity="0.5" />
              <rect x="130" y="510" width="340" height="2" fill="#FAF8F5" opacity="0.3" />
            </g>

            <!-- Slide 5: Geometric Editorial Grid -->
            <g v-else-if="idx === 4" stroke="#FAF8F5" stroke-opacity="0.35" stroke-width="1.5" fill="none">
              <rect x="110" y="140" width="380" height="520" />
              <line x1="110" y1="140" x2="490" y2="660" />
              <line x1="490" y1="140" x2="110" y2="660" />
              <circle cx="300" cy="400" r="120" fill="#9333EA" fill-opacity="0.4" />
            </g>

            <!-- Slide 6: Spotlight & Crown Crest -->
            <g v-else-if="idx === 5">
              <polygon points="300,150 430,520 170,520" fill="#7C3AED" opacity="0.45" />
              <circle cx="300" cy="390" r="85" fill="#FAF8F5" opacity="0.85" />
              <circle cx="300" cy="390" r="135" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="6 8" />
            </g>

            <!-- Center Camera Crosshair + Placeholder Label -->
            <g opacity="0.55">
              <line x1="285" y1="400" x2="315" y2="400" stroke="#FFFFFF" stroke-width="1.5" />
              <line x1="300" y1="385" x2="300" y2="415" stroke="#FFFFFF" stroke-width="1.5" />
            </g>
          </svg>

          <!-- Placeholder Tag Badge (hidden once zooming in) -->
          <div
            v-if="phase === 'cycling'"
            class="absolute inset-x-3 bottom-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-white/80 z-20"
          >
            <span>{{ slide.code }}</span>
            <span class="px-1.5 py-0.5 bg-black/50 border border-white/20 text-[8px]">{{ slide.label }}</span>
          </div>
        </div>

        <!-- Shutter flash on each rapid picture swap -->
        <div :key="flashKey" class="shutter-flash"></div>

        <!-- Hero Card Vignette & Shadow Overlay (matches HeroSection.vue) -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/75 pointer-events-none transition-opacity duration-500"
          :class="phase === 'cycling' ? 'opacity-60' : 'opacity-100'"
        ></div>

        <!-- Hero Card Overlaid Content — animates in as the card zooms out to become the HeroCard -->
        <div
          class="absolute inset-0 flex flex-col justify-between items-center text-center p-6 sm:p-10 z-20 pointer-events-none transition-all duration-700"
          :class="phase === 'zoom-out' || phase === 'docked' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'"
        >
          <div class="pt-4">
            <span class="font-serif italic text-white/90 text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-md">
              Member of Parliament & Deputy Minister
            </span>
          </div>

          <div class="w-full my-auto px-2">
            <h2 class="font-display font-extrabold text-accent-purple text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.92] uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] select-none">
              Leadership Rooted <br class="hidden sm:inline" /> In Dignity
            </h2>
          </div>

          <div class="pb-4">
            <span
              class="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF8F5] border-2 border-accent-purple text-accent-purple font-display font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl"
            >
              <span>Discover The Vision</span>
              <span>→</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Caption during cycling -->
      <div class="loader-hud-bottom" :class="{ 'hud-hidden': phase !== 'cycling' }">
        <div class="w-28 h-[2px] bg-[#11161B]/15 overflow-hidden">
          <div class="h-full bg-accent-purple transition-all duration-150" :style="{ width: progressPct + '%' }"></div>
        </div>
        <span class="font-mono text-[9px] uppercase tracking-[0.22em] text-[#11161B]/50 mt-2">
          Hon. Dorcas Affo-Toffey
        </span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const emit = defineEmits<{
  reveal: []
  done: []
}>()

const visible = ref(true)
const phase = ref<'cycling' | 'zoom-in' | 'zoom-out' | 'docked'>('cycling')
const currentSlide = ref(0)
const flashKey = ref(0)
const progressPct = ref(14)

/**
 * 7 slides that cycle rapidly inside the small vertical rectangle.
 * Replace `image: null` with any photo path (e.g. '/images/photo1.jpg') whenever ready.
 * Slide 7 uses the HeroCard portrait so the zoom-in -> zoom-out -> HeroCard morph is seamless.
 */
const slides = [
  {
    code: 'IMG // 01',
    label: 'Placeholder 01',
    image: null as string | null,
    colors: ['#160B28', '#3B1070', '#7C3AED']
  },
  {
    code: 'IMG // 02',
    label: 'Placeholder 02',
    image: null as string | null,
    colors: ['#11161B', '#1E3246', '#3B6998']
  },
  {
    code: 'IMG // 03',
    label: 'Placeholder 03',
    image: null as string | null,
    colors: ['#1F1406', '#5C3B10', '#D4AF37']
  },
  {
    code: 'IMG // 04',
    label: 'Placeholder 04',
    image: null as string | null,
    colors: ['#0A1914', '#163D30', '#2E7D62']
  },
  {
    code: 'IMG // 05',
    label: 'Placeholder 05',
    image: null as string | null,
    colors: ['#1E0B24', '#4A155B', '#9333EA']
  },
  {
    code: 'IMG // 06',
    label: 'Placeholder 06',
    image: '/images/datt.png',
    colors: ['#14181D', '#28303D', '#4F5D75']
  },
  {
    code: 'IMG // 07',
    label: 'Hero Portrait',
    image: '/images/HDAT.jpeg',
    colors: ['#11161B', '#2B1250', '#7C3AED']
  }
]

// Exact bounding rectangle of #hero-card-frame on the page
const targetRect = ref({
  top: 112,
  left: 120,
  width: 960,
  height: 580
})

const measureHeroCard = () => {
  const el = document.getElementById('hero-card-frame')
  if (el) {
    const r = el.getBoundingClientRect()
    targetRect.value = {
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height
    }
  } else {
    // Fallback centered hero dimensions if opened on a non-home route
    const w = Math.min(window.innerWidth - 48, 976)
    const h = Math.min(w * 0.625, 580)
    targetRect.value = {
      top: (window.innerHeight - h) / 2,
      left: (window.innerWidth - w) / 2,
      width: w,
      height: h
    }
  }
}

const cardDynamicStyle = computed(() => {
  if (phase.value === 'cycling') {
    // Small centered vertical rectangle (portrait 2:3 ratio)
    const w = 176
    const h = 252
    return {
      top: `calc(50vh - ${h / 2}px)`,
      left: `calc(50vw - ${w / 2}px)`,
      width: `${w}px`,
      height: `${h}px`,
      transition: 'all 0.3s ease'
    }
  }

  if (phase.value === 'zoom-in') {
    // Slowly zooms in to fill the entire screen
    return {
      top: '0px',
      left: '0px',
      width: '100vw',
      height: '100vh',
      transition:
        'top 1.15s cubic-bezier(0.65, 0, 0.15, 1), left 1.15s cubic-bezier(0.65, 0, 0.15, 1), width 1.15s cubic-bezier(0.65, 0, 0.15, 1), height 1.15s cubic-bezier(0.65, 0, 0.15, 1), box-shadow 0.8s ease'
    }
  }

  // phase === 'zoom-out' || phase === 'docked'
  // Zooms out from full screen to fit the exact HeroCard dimensions & position
  return {
    top: `${targetRect.value.top}px`,
    left: `${targetRect.value.left}px`,
    width: `${targetRect.value.width}px`,
    height: `${targetRect.value.height}px`,
    transition:
      'top 1.1s cubic-bezier(0.22, 1, 0.36, 1), left 1.1s cubic-bezier(0.22, 1, 0.36, 1), width 1.1s cubic-bezier(0.22, 1, 0.36, 1), height 1.1s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.8s ease'
  }
})

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

onMounted(async () => {
  window.scrollTo(0, 0)
  document.documentElement.style.overflow = 'hidden'

  // Brief initial pause on Frame 01 so the viewer registers the vertical rectangle
  await sleep(180)

  // 1. Rapidly cycle through the 7 pictures (~145ms per frame)
  for (let i = 0; i < slides.length; i++) {
    currentSlide.value = i
    flashKey.value++
    progressPct.value = Math.round(((i + 1) / slides.length) * 100)
    await sleep(145)
  }

  // Brief beat on the 7th frame before zooming in
  await sleep(180)

  // 2. Slowly zoom in to fill the entire screen
  phase.value = 'zoom-in'
  await sleep(1180)

  // Now that the loader card covers 100vw x 100vh, reveal the underlying page DOM
  // so we can measure #hero-card-frame and zoom out directly into it
  emit('reveal')
  await sleep(40)

  // Measure the real HeroCard bounding box right before zooming out into it
  measureHeroCard()

  // 3. Smoothly zoom out to fit the HeroCard's exact dimensions & position
  phase.value = 'zoom-out'
  await sleep(1120)

  // 4. Docked onto the HeroCard — fade away loader wrapper seamlessly
  phase.value = 'docked'
  document.documentElement.style.overflow = ''
  visible.value = false
  emit('done')
})
</script>

<style scoped>
.loader-stage {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: all;
  overflow: hidden;
}

/* Warm alabaster backdrop matching the site theme; fades out during zoom-out so real page + header appear around the shrinking card */
.loader-backdrop {
  position: absolute;
  inset: 0;
  background-color: #FAF8F5;
  transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1);
}

.loader-backdrop.backdrop-reveal {
  opacity: 0;
}

.backdrop-grid {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: radial-gradient(#7C3AED 0.75px, transparent 0.75px);
  background-size: 24px 24px;
}

/* The morphing card itself */
.loader-card {
  position: fixed;
  overflow: hidden;
  background: #11161B;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
  will-change: top, left, width, height;
  z-index: 2;
}

/* Slides inside the card */
.loader-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
}

.loader-slide.is-active {
  opacity: 1;
}

/* Subtle camera shutter flash on rapid slide changes */
.shutter-flash {
  position: absolute;
  inset: 0;
  background: #FFFFFF;
  opacity: 0;
  pointer-events: none;
  z-index: 15;
  animation: shutter-pop 0.14s ease-out forwards;
}

@keyframes shutter-pop {
  0% {
    opacity: 0.22;
  }
  100% {
    opacity: 0;
  }
}

/* Top & Bottom HUD captions during the rapid cycling phase */
.loader-hud-top {
  position: fixed;
  top: calc(50vh - 162px);
  left: 50%;
  transform: translateX(-50%);
  width: 176px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.loader-hud-bottom {
  position: fixed;
  top: calc(50vh + 142px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.hud-hidden {
  opacity: 0;
  transform: translate(-50%, 6px);
  pointer-events: none;
}

/* Final seamless cross-dissolve once docked directly over #hero-card-frame */
.loader-fade-leave-active {
  transition: opacity 0.28s ease-out;
}
.loader-fade-leave-to {
  opacity: 0;
}
</style>
