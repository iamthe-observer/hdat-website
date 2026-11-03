<template>
  <div class="min-h-screen bg-[#FAF8F5] text-[#11161B] selection:bg-accent-purple selection:text-white flex flex-col justify-between">
    <!-- Intro loading animation — SSR-rendered immediately on frame 0 before page is visible -->
    <AppLoader @reveal="pageRevealed = true" @done="loaderDone = true" />

    <!-- Underlying page stays hidden until loader covers the screen and begins zooming out into HeroCard -->
    <div
      class="flex flex-col justify-between min-h-screen transition-opacity duration-300"
      :class="pageRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'"
    >
      <!-- Executive Sticky Header -->
      <AppHeader />

      <!-- Multi-Page View Container with Page Transition -->
      <main class="flex-grow">
        <NuxtPage />
      </main>

      <!-- Stately Editorial Footer -->
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppLoader from '~/components/AppLoader.vue'

const pageRevealed = ref(false)
const loaderDone = ref(false)

useHead({
  titleTemplate: '%s · Hon. Dorcas Affo-Toffey',
  meta: [
    {
      name: 'description',
      content: 'Official digital platform of Hon. Dorcas Affo-Toffey, MP for Jomoro and Deputy Minister of Transport.'
    }
  ]
})
</script>
