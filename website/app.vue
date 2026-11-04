<template>
  <div class="min-h-screen bg-[#FAF8F5] text-[#11161B] selection:bg-accent-purple selection:text-white flex flex-col justify-between">
    <!-- Intro loading animation — SSR-rendered on the home page to morph directly into HeroCard -->
    <AppLoader v-if="showLoader" @reveal="pageRevealed = true" @done="loaderDone = true" />

    <!-- Underlying page stays hidden only while the home-page loader is covering the screen -->
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

const route = useRoute()
const showLoader = ref(route.path === '/')
const pageRevealed = ref(route.path !== '/')
const loaderDone = ref(route.path !== '/')

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
