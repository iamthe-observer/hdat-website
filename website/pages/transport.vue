<template>
  <div class="pt-28 pb-24 bg-[#11161B] text-[#FAF8F5] relative overflow-hidden">
    <!-- Subtle Violet Specular Lighting Bar -->
    <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-purple via-accent-purple-light to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Page Hero -->
      <div class="gsap-hero-stagger mb-20 pb-10 border-b border-white/10">
        <div class="hero-el inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/20 border border-accent-purple/40 text-accent-purple font-mono text-[11px] uppercase tracking-widest mb-4">
          <span class="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></span>
          Lorem Ipsum // Portfolio
        </div>
        <h1 class="hero-el font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] max-w-4xl">
          Consectetur Adipiscing Elit Sed Do Eiusmod
        </h1>
        <p class="hero-el font-sans text-base md:text-xl text-[#EAE5DC]/70 max-w-2xl mt-6 leading-relaxed">
          Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>

      <!-- Distinction Spotlight -->
      <div class="gsap-scrub-card p-8 sm:p-12 bg-[#192027] border-2 border-accent-purple/40 mb-24 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-accent-purple block">
              Lorem Ipsum Recognition
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-white">
              Dolor Sit Amet Consectetur (2026)
            </h2>
            <p class="font-sans text-sm sm:text-base text-[#EAE5DC]/80 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="lg:col-span-4 lg:text-right">
            <div class="tilt-3d card-3d-interactive inline-block p-6 bg-black/40 border border-accent-purple text-center">
              <span class="font-display font-extrabold text-5xl text-accent-purple block">2026</span>
              <span class="font-mono text-xs text-white uppercase tracking-wider block mt-1">Lorem Honours</span>
              <span class="font-sans text-[11px] text-[#EAE5DC]/60 block mt-1">Dolor Sit Amet</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Transformation Pillars with 3D Tilt -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 stagger-parent">
        
        <div class="stagger-item tilt-3d card-3d-interactive bg-[#192027]/80 border border-white/10 p-8 flex flex-col justify-between shadow-lg">
          <div>
            <span class="font-mono text-xs text-accent-purple block mb-3">PILLAR 01 // LOREM</span>
            <h3 class="font-serif text-2xl text-white mb-4">
              Tempor Incididunt Ut Labore
            </h3>
            <p class="font-sans text-sm text-[#EAE5DC]/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-white/40">
            Duis Aute Irure
          </div>
        </div>

        <div class="stagger-item tilt-3d card-3d-interactive bg-[#192027]/80 border border-white/10 p-8 flex flex-col justify-between shadow-lg">
          <div>
            <span class="font-mono text-xs text-accent-purple block mb-3">PILLAR 02 // IPSUM</span>
            <h3 class="font-serif text-2xl text-white mb-4">
              Voluptate Velit Esse Cillum
            </h3>
            <p class="font-sans text-sm text-[#EAE5DC]/70 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-white/40">
            Nemo Enim Ipsam
          </div>
        </div>

        <div class="stagger-item tilt-3d card-3d-interactive bg-[#192027]/80 border border-white/10 p-8 flex flex-col justify-between shadow-lg">
          <div>
            <span class="font-mono text-xs text-accent-purple block mb-3">PILLAR 03 // DOLOR</span>
            <h3 class="font-serif text-2xl text-white mb-4">
              Quis Nostrud Exercitation
            </h3>
            <p class="font-sans text-sm text-[#EAE5DC]/70 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-white/40">
            Similique Sunt In Culpa
          </div>
        </div>

      </div>

      <!-- Committee Portfolios -->
      <div class="border border-white/10 p-8 bg-black/40 reveal-3d">
        <span class="font-mono text-xs uppercase tracking-widest text-accent-purple block mb-4">
          Lorem Ipsum Committee Assignments
        </span>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-[#EAE5DC]/80 stagger-parent">
          <div class="stagger-item tilt-3d card-3d-interactive p-4 border border-white/10 bg-white/5 hover:border-accent-purple/60">
            <span class="text-accent-purple font-bold block mb-1">01.</span>
            <span>Lorem Ipsum Committee</span>
          </div>
          <div class="stagger-item tilt-3d card-3d-interactive p-4 border border-white/10 bg-white/5 hover:border-accent-purple/60">
            <span class="text-accent-purple font-bold block mb-1">02.</span>
            <span>Dolor Sit Amet Committee</span>
          </div>
          <div class="stagger-item tilt-3d card-3d-interactive p-4 border border-white/10 bg-white/5 hover:border-accent-purple/60">
            <span class="text-accent-purple font-bold block mb-1">03.</span>
            <span>Consectetur Adipiscing</span>
          </div>
          <div class="stagger-item tilt-3d card-3d-interactive p-4 border border-white/10 bg-white/5 hover:border-accent-purple/60">
            <span class="text-accent-purple font-bold block mb-1">04.</span>
            <span>Sed Do Eiusmod Committee</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Transport'
})
</script>
