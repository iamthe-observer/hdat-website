<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-[#FAF8F5]/92 backdrop-blur-md py-4 border-b border-[#E6E1D7]/80 shadow-sm'
        : 'bg-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
      <!-- Left: Executive Brand / Wordmark -->
      <NuxtLink to="/" class="group flex flex-col focus:outline-none">
        <span class="font-serif text-2xl md:text-3xl tracking-tight text-[#11161B] group-hover:text-accent-purple transition-colors">
          Hon. Dorcas Affo-Toffey
        </span>
        <span class="font-mono text-[10px] tracking-widest uppercase text-[#11161B]/60 flex items-center gap-2 mt-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse"></span>
          MP · Jomoro | Dep. Minister of Transport
        </span>
      </NuxtLink>

      <!-- Center: Desktop Navigation Links Matching Site Pages -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          class="font-sans text-xs uppercase tracking-widest font-medium transition-colors relative py-1"
          :class="[
            route.path === link.href
              ? 'text-accent-purple font-semibold after:w-full'
              : 'text-[#11161B]/80 hover:text-accent-purple after:w-0 hover:after:w-full'
          ]"
        >
          {{ link.name }}
          <span class="absolute bottom-0 left-0 h-[2px] bg-accent-purple transition-all duration-300"></span>
        </NuxtLink>
      </nav>

      <!-- Right: Action CTA & Editorial Hamburger Menu (Inspired by Screenshot) -->
      <div class="flex items-center gap-5">
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-accent-purple text-white text-xs uppercase font-sans tracking-widest font-semibold border border-accent-purple hover:bg-accent-purple-dark hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-200"
        >
          Get Involved →
        </NuxtLink>

        <!-- Minimal 2-Line Hamburger Menu Icon (Directly matching '=' from screenshot) -->
        <button
          @click="menuOpen = !menuOpen"
          aria-label="Toggle Navigation Curtain"
          class="p-2 text-[#11161B] hover:text-accent-purple focus:outline-none transition-colors group"
        >
          <div class="w-7 h-3.5 relative flex flex-col justify-between">
            <span
              class="w-full h-[2px] bg-current transition-all duration-300"
              :class="menuOpen ? 'rotate-45 translate-y-1.5 bg-accent-purple' : 'group-hover:w-5 self-end'"
            ></span>
            <span
              class="w-full h-[2px] bg-current transition-all duration-300"
              :class="menuOpen ? '-rotate-45 -translate-y-1.5 bg-accent-purple' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Full-Screen Luxury Curtain Menu Overlay -->
    <transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between p-8 sm:p-16 overflow-y-auto"
      >
        <!-- Curtain Header -->
        <div class="flex items-center justify-between pb-8 border-b border-[#E6E1D7]">
          <div>
            <span class="font-serif text-2xl text-[#11161B]">Hon. Dorcas Affo-Toffey</span>
            <span class="font-mono text-[10px] uppercase text-accent-purple tracking-widest block mt-0.5">
              Official Platform Directory
            </span>
          </div>
          <button
            @click="menuOpen = false"
            class="p-3 text-2xl text-[#11161B] hover:text-accent-purple font-mono"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <!-- Curtain Navigation Links (Oversized Editorial Typography) -->
        <nav class="my-auto py-12 flex flex-col gap-6 max-w-4xl mx-auto w-full">
          <NuxtLink
            v-for="(link, idx) in allLinks"
            :key="link.name"
            :to="link.href"
            @click="menuOpen = false"
            class="group flex items-baseline justify-between py-2 border-b border-[#E6E1D7]/60 hover:border-accent-purple transition-colors"
          >
            <div class="flex items-baseline gap-6">
              <span class="font-mono text-xs text-accent-purple font-semibold">
                0{{ idx + 1 }} //
              </span>
              <span class="font-serif text-3xl sm:text-5xl md:text-6xl text-[#11161B] group-hover:text-accent-purple transition-colors tracking-tight">
                {{ link.name }}
              </span>
            </div>
            <span class="font-sans text-xs uppercase tracking-widest text-[#11161B]/40 group-hover:text-accent-purple group-hover:translate-x-2 transition-all">
              {{ link.desc }} →
            </span>
          </NuxtLink>
        </nav>

        <!-- Curtain Footer -->
        <div class="pt-8 border-t border-[#E6E1D7] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#11161B]/60">
          <div class="flex items-center gap-6">
            <span>PARLIAMENT OF GHANA</span>
            <span>·</span>
            <span>JOMORO MUNICIPALITY</span>
            <span>·</span>
            <span>MINISTRY OF TRANSPORT</span>
          </div>
          <div class="flex items-center gap-4 text-accent-purple font-semibold">
            <a href="https://facebook.com/dorcastoffey" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com/dorcasaffotoffey" target="_blank" rel="noopener">Instagram</a>
            <a href="https://twitter.com/AfoDorcas" target="_blank" rel="noopener">X</a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

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
  { name: 'Citizen Desk', href: '/contact', desc: 'Direct Inquiries & Volunteerism' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
