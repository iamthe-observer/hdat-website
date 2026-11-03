<template>
  <div>
    <!-- Hero Section (Intact, as requested) -->
    <HeroSection />

    <!-- Section 01: Pinned Story Teaser with 3D Reveal -->
    <PinnedStorySection />

    <!-- Section 02: Verified Impact Ledger Highlights with Animated Number Rollers -->
    <section class="py-24 bg-[#FAF8F5] border-b border-[#E6E1D7] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E6E1D7] reveal-3d">
          <div>
            <span class="font-mono text-xs text-accent-purple uppercase tracking-widest block mb-1">
              Lorem Ipsum // Dolor Sit
            </span>
            <h2 class="font-serif text-3xl md:text-5xl text-[#11161B] tracking-tight">
              Consectetur Adipiscing Elit Sed Do
            </h2>
          </div>
          <NuxtLink
            to="/initiatives"
            class="mt-4 md:mt-0 font-display font-bold text-xs text-accent-purple hover:text-accent-purple-dark uppercase tracking-widest inline-flex items-center gap-1 group"
          >
            <span>Explore Details</span>
            <span class="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </NuxtLink>
        </div>

        <!-- 4 Animated Stats Cards with 3D Perspective Tilt -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-parent">
          <div
            v-for="stat in quickStats"
            :key="stat.label"
            class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-accent-purple transition-all"
          >
            <span class="font-mono text-[10px] uppercase text-[#11161B]/50 tracking-wider">
              {{ stat.tag }}
            </span>
            <div class="my-4">
              <span
                class="stat-counter font-display font-extrabold text-4xl sm:text-5xl text-accent-purple tracking-tight block"
                :data-target="stat.target"
                :data-suffix="stat.suffix"
              >
                0{{ stat.suffix }}
              </span>
            </div>
            <span class="font-sans text-xs sm:text-sm font-medium text-[#11161B]/80">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 03: Executive Transport Mandate Teaser -->
    <TransportPolicySection />

    <!-- Section 04: Newsroom Teaser -->
    <NewsroomSection />

    <!-- Section 05: Citizen Direct Desk Teaser -->
    <section class="py-20 bg-[#FAF8F5] border-t border-[#E6E1D7]">
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center reveal-3d">
        <span class="font-mono text-xs text-accent-purple uppercase tracking-widest block mb-2">
          Lorem Ipsum Dolor
        </span>
        <h2 class="font-serif text-3xl md:text-5xl text-[#11161B] max-w-2xl mx-auto mb-6">
          Consectetur Adipiscing Elit Sed Do Eiusmod?
        </h2>
        <p class="font-sans text-sm md:text-base text-[#11161B]/70 max-w-xl mx-auto mb-8">
          Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 bg-accent-purple text-white font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-purple-dark hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300"
        >
          <span>Lorem Ipsum Action</span>
          <span>→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import PinnedStorySection from '~/components/PinnedStorySection.vue'
import TransportPolicySection from '~/components/TransportPolicySection.vue'
import NewsroomSection from '~/components/NewsroomSection.vue'

useHead({
  title: 'Leadership Rooted In Dignity'
})

const quickStats = [
  { target: 30, suffix: '+', tag: 'Category Alpha', label: 'Lorem Ipsum Dolor' },
  { target: 5, suffix: '', tag: 'Category Beta', label: 'Consectetur Adipiscing' },
  { target: 200, suffix: '+', tag: 'Category Gamma', label: 'Sed Do Eiusmod' },
  { target: 4, suffix: '', tag: 'Category Delta', label: 'Tempor Incididunt' }
]
</script>
