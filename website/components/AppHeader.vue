<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-[#FAF8F5]/92 backdrop-blur-md py-4 border-b border-[#E6E1D7]/80 shadow-sm'
        : 'bg-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
      <!-- Left: Executive Brand / Wordmark -->
      <NuxtLink to="/" class="group flex flex-col focus:outline-none shrink-0">
        <span class="font-serif text-2xl md:text-3xl tracking-tight text-[#11161B] group-hover:text-accent-purple transition-colors">
          Hon. Dorcas Affo-Toffey
        </span>
        <span class="font-mono text-[10px] tracking-widest uppercase text-[#11161B]/60 flex items-center gap-2 mt-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse"></span>
          MP · Jomoro | Dep. Minister of Transport
        </span>
      </NuxtLink>

      <!-- Center: Navigation Links Matching Site Pages -->
      <nav class="flex items-center gap-5 md:gap-8 overflow-x-auto no-scrollbar">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          class="font-sans text-xs uppercase tracking-widest font-medium transition-colors relative py-1 whitespace-nowrap"
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

      <!-- Right: Action CTA -->
      <div class="hidden sm:flex items-center shrink-0">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center px-5 py-2.5 bg-accent-purple text-white text-xs uppercase font-sans tracking-widest font-semibold border border-accent-purple hover:bg-accent-purple-dark hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-200"
        >
          Get Involved →
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'Transport', href: '/transport' },
  { name: 'Newsroom', href: '/newsroom' },
  { name: 'Contact', href: '/contact' }
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
