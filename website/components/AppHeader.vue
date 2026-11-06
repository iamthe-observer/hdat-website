<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-[background-color,padding,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="[
      menuOpen
        ? 'bg-[#FAF8F5] py-3 sm:py-3.5 border-b border-[#E6E1D7] shadow-[0_12px_34px_-12px_rgba(17,22,27,0.08)]'
        : isScrolled
          ? isTransportPage
            ? 'bg-[#192027] py-3 sm:py-3.5 border-b border-white/10 shadow-[0_12px_34px_-12px_rgba(0,0,0,0.5)]'
            : 'bg-[#FAF8F5] py-3 sm:py-3.5 border-b border-[#E6E1D7] shadow-[0_12px_34px_-12px_rgba(17,22,27,0.08)]'
          : 'bg-transparent py-4 sm:py-6 border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3 relative">
      <!-- Left: Executive Brand / Wordmark -->
      <NuxtLink to="/" class="group flex flex-col focus:outline-none shrink-0 z-30" @click="closeMenu">
        <span
          class="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight group-hover:text-accent-purple transition-colors duration-300 leading-none"
          :class="isTransportPage && !menuOpen ? 'text-white' : 'text-[#11161B]'"
        >
          Hon. Dorcas Affo-Toffey
        </span>
        <span
          class="font-mono text-[8.5px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase flex items-center gap-1.5 sm:gap-2 mt-1 transition-colors duration-300"
          :class="isTransportPage && !menuOpen ? 'text-white/75' : 'text-[#11161B]/60'"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse shrink-0"></span>
          <span class="truncate">MP · Jomoro | Dep. Minister of Transport</span>
        </span>
      </NuxtLink>

      <!-- Center & Right Container -->
      <div class="flex items-center justify-end flex-1 relative z-30">
        <!-- Unscrolled Desktop State: Horizontal Nav Links + Action CTA -->
        <div
          ref="navGroupRef"
          class="hidden md:flex items-center gap-5 md:gap-8"
          :class="isScrolled ? 'pointer-events-none' : 'pointer-events-auto'"
        >
          <nav class="flex items-center gap-6 lg:gap-8">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.name"
              :to="link.href"
              class="nav-stagger-link font-sans text-xs uppercase tracking-widest font-medium transition-colors relative py-1 whitespace-nowrap inline-block"
              :class="[
                isTransportPage
                  ? route.path === link.href
                    ? 'text-white font-semibold after:w-full'
                    : 'text-white/85 hover:text-white after:w-0 hover:after:w-full'
                  : route.path === link.href
                    ? 'text-accent-purple font-semibold after:w-full'
                    : 'text-[#11161B]/80 hover:text-accent-purple after:w-0 hover:after:w-full'
              ]"
            >
              {{ link.name }}
              <span class="absolute bottom-0 left-0 h-[2px] bg-accent-purple transition-all duration-300"></span>
            </NuxtLink>
          </nav>

          <div class="nav-stagger-link flex items-center shrink-0">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-5 py-2.5 bg-accent-purple text-white text-xs uppercase font-sans tracking-widest font-semibold border border-accent-purple hover:bg-accent-purple-dark hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-200"
            >
              Get Involved →
            </NuxtLink>
          </div>
        </div>

        <!-- Scrolled State (or Mobile): Stylish Architectural Hamburger Button in Accent Purple -->
        <button
          ref="hamburgerBtnRef"
          @click="toggleMenu"
          aria-label="Toggle Navigation Menu"
          class="md:opacity-0 md:pointer-events-none md:absolute md:right-0 inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-accent-purple hover:bg-accent-purple-dark text-white border border-accent-purple hover:border-accent-purple-dark hover:shadow-lg hover:shadow-accent-purple/25 transition-colors duration-300 group focus:outline-none shadow-md z-30"
        >
          <span class="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-white font-semibold select-none">
            {{ menuOpen ? 'Close' : 'Menu' }}
          </span>
          <div class="w-4 sm:w-5 h-3 relative flex flex-col justify-between items-end">
            <span
              class="h-[1.5px] bg-current transition-all duration-300 origin-center"
              :class="menuOpen ? 'w-4 sm:w-5 rotate-45 translate-y-[5.25px]' : 'w-4 sm:w-5 group-hover:w-3.5'"
            ></span>
            <span
              class="h-[1.5px] bg-current transition-all duration-300 origin-center"
              :class="menuOpen ? 'w-0 opacity-0' : 'w-3 sm:w-3.5 group-hover:w-5'"
            ></span>
            <span
              class="h-[1.5px] bg-current transition-all duration-300 origin-center"
              :class="menuOpen ? 'w-4 sm:w-5 -rotate-45 -translate-y-[5.25px]' : 'w-3.5 sm:w-4 group-hover:w-5'"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Stylish Full-Screen Editorial Curtain Menu (100dvh, Strictly Non-Scrollable, Fits Everything) -->
    <Transition
      @enter="onMenuEnter"
      @leave="onMenuLeave"
      :css="false"
    >
      <div
        v-if="menuOpen"
        data-lenis-prevent
        @wheel.prevent
        @touchmove.prevent
        class="fixed inset-0 w-screen h-[100dvh] z-20 bg-white/95 backdrop-blur-xl flex flex-col justify-between pt-20 sm:pt-24 pb-5 sm:pb-6 px-5 sm:px-12 md:px-20 overflow-hidden select-none"
        style="background-color: rgba(255, 255, 255, 0.97);"
      >
        <!-- Subtle background grid -->
        <div class="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#7C3AED_0.75px,transparent_0.75px)] [background-size:24px_24px]"></div>

        <nav class="relative z-10 flex-1 flex flex-col justify-evenly max-w-5xl mx-auto w-full divide-y divide-[#E6E1D7]/80 my-1">
          <NuxtLink
            v-for="(link, idx) in allLinks"
            :key="link.name"
            :to="link.href"
            @click="closeMenu"
            class="curtain-item group flex items-center justify-between py-1.5 sm:py-2.5 hover:pl-3 transition-all duration-300"
          >
            <div class="flex items-baseline gap-3.5 sm:gap-8">
              <span class="font-mono text-[10px] sm:text-xs text-accent-purple font-semibold">
                0{{ idx + 1 }} //
              </span>
              <div>
                <span
                  class="font-serif text-[1.65rem] sm:text-4xl lg:text-[2.6rem] leading-none text-[#11161B] group-hover:text-accent-purple transition-colors tracking-tight block"
                  :class="route.path === link.href ? 'text-accent-purple italic font-semibold' : ''"
                >
                  {{ link.name }}
                </span>
                <span class="sm:hidden font-mono text-[9px] uppercase tracking-widest text-[#11161B]/45 block mt-0.5">
                  {{ link.desc }}
                </span>
              </div>
            </div>
            <span class="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#11161B]/45 group-hover:text-accent-purple group-hover:translate-x-1.5 transition-all">
              <span class="hidden sm:inline">{{ link.desc }} </span>→
            </span>
          </NuxtLink>
        </nav>

        <!-- Curtain Footer Bar -->
        <div class="curtain-footer relative z-10 max-w-5xl mx-auto w-full pt-3 sm:pt-4 border-t border-[#E6E1D7] flex flex-row items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] text-[#11161B]/60 shrink-0">
          <div class="flex flex-wrap items-center gap-2 sm:gap-4 uppercase tracking-wider text-[9px] sm:text-[11px]">
            <span>Parliament of Ghana</span>
            <span class="hidden sm:inline">·</span>
            <span class="hidden sm:inline">Jomoro Constituency</span>
            <span>·</span>
            <span>Ministry of Transport</span>
          </div>
          <NuxtLink
            to="/contact"
            @click="closeMenu"
            class="shrink-0 px-4 py-2 sm:px-5 sm:py-2 bg-accent-purple text-white text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold hover:bg-accent-purple-dark transition-colors"
          >
            Get Involved →
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'

const nuxtApp = useNuxtApp()
const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

const isTransportPage = computed(() => route.path.startsWith('/transport'))

const navGroupRef = ref<HTMLElement | null>(null)
const hamburgerBtnRef = ref<HTMLElement | null>(null)

let navTl: gsap.core.Timeline | null = null

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'Transport', href: '/transport' },
  { name: 'Newsroom', href: '/newsroom' },
  { name: 'Contact', href: '/contact' }
]

const allLinks = [
  { name: 'Home', href: '/', desc: 'Landing & Vision' },
  { name: 'About Dorcas', href: '/about', desc: 'Roots, Heritage & Leadership' },
  { name: 'Initiatives', href: '/initiatives', desc: 'Verified Impact Ledger' },
  { name: 'Transport Policy', href: '/transport', desc: 'National Portfolio & Reforms' },
  { name: 'Newsroom', href: '/newsroom', desc: 'Speeches, Statements & Press' },
  { name: 'Citizen Desk', href: '/contact', desc: 'Direct Inquiries & Secretariat' }
]

const setScrollLock = (locked: boolean) => {
  if (!import.meta.client) return
  const lenis = (nuxtApp as any).$lenis
  if (locked) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
    if (lenis && typeof lenis.stop === 'function') lenis.stop()
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
    if (lenis && typeof lenis.start === 'function') lenis.start()
  }
}

const animateNavState = (scrolled: boolean) => {
  if (!navGroupRef.value || !hamburgerBtnRef.value) return
  if (window.innerWidth < 768) {
    gsap.set(hamburgerBtnRef.value, { clearProps: 'all' })
    return
  }

  const links = navGroupRef.value.querySelectorAll<HTMLElement>('.nav-stagger-link')
  const burger = hamburgerBtnRef.value

  if (navTl) navTl.kill()
  navTl = gsap.timeline()

  if (scrolled) {
    // 1. Stagger nav links out to the right with opacity -> 0
    navTl.to(
      links,
      {
        x: 42,
        opacity: 0,
        duration: 0.55,
        stagger: { each: 0.045, from: 'end' },
        ease: 'expo.out',
        overwrite: 'auto'
      },
      0
    )

    // 2. Stylishly animate the hamburger button into view FROM the right after a slight delay
    navTl.fromTo(
      burger,
      {
        x: 48,
        opacity: 0,
        scale: 0.85,
        pointerEvents: 'none'
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        pointerEvents: 'auto',
        duration: 0.65,
        ease: 'expo.out',
        overwrite: 'auto'
      },
      0.32
    )
  } else {
    // Close menu if open when returning to top
    if (menuOpen.value) menuOpen.value = false

    // 1. Animate hamburger out to the right
    navTl.to(
      burger,
      {
        x: 48,
        opacity: 0,
        scale: 0.85,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto'
      },
      0
    )

    // 2. Stagger nav links back in from the right to their resting place
    navTl.to(
      links,
      {
        x: 0,
        opacity: 1,
        duration: 0.65,
        stagger: { each: 0.05, from: 'start' },
        ease: 'expo.out',
        overwrite: 'auto'
      },
      0.1
    )
  }
}

watch(isScrolled, (val) => {
  animateNavState(val)
})

watch(menuOpen, (open) => {
  setScrollLock(open)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const onMenuEnter = (el: Element, done: () => void) => {
  const items = el.querySelectorAll('.curtain-item')
  const footer = el.querySelector('.curtain-footer')

  const tl = gsap.timeline({ onComplete: done })
  tl.fromTo(
    el,
    { opacity: 0, y: -16 },
    { opacity: 1, y: 0, duration: 0.45, ease: 'expo.out' },
    0
  )
  if (items.length) {
    tl.fromTo(
      items,
      { opacity: 0, x: -24, rotateX: 8 },
      { opacity: 1, x: 0, rotateX: 0, duration: 0.55, stagger: 0.05, ease: 'expo.out' },
      0.06
    )
  }
  if (footer) {
    tl.fromTo(
      footer,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'expo.out' },
      0.2
    )
  }
}

const onMenuLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    y: -12,
    duration: 0.28,
    ease: 'power3.inOut',
    onComplete: done
  })
}

const handleScroll = () => {
  if (menuOpen.value) return
  isScrolled.value = window.scrollY > 45
}

const handleResize = () => {
  if (!navGroupRef.value || !hamburgerBtnRef.value) return
  if (window.innerWidth < 768) {
    gsap.set(hamburgerBtnRef.value, { clearProps: 'all' })
  } else {
    animateNavState(isScrolled.value)
  }
}

onMounted(() => {
  handleScroll()
  if (window.innerWidth >= 768 && hamburgerBtnRef.value) {
    gsap.set(hamburgerBtnRef.value, {
      opacity: isScrolled.value ? 1 : 0,
      x: isScrolled.value ? 0 : 48,
      scale: isScrolled.value ? 1 : 0.85,
      pointerEvents: isScrolled.value ? 'auto' : 'none'
    })
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  setScrollLock(false)
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
