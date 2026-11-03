<template>
  <section id="transport" class="py-28 md:py-36 bg-[#11161B] text-white relative overflow-hidden">
    <!-- Subtle Geometric Accent Line in Imperial Purple -->
    <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-purple via-accent-purple-light to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 border-b border-white/10 pb-8 reveal-3d">
        <div class="lg:col-span-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/20 border border-accent-purple/40 text-accent-purple font-mono text-[11px] uppercase tracking-widest mb-3">
            <span>★</span> Lorem Ipsum Dolor
          </div>
          <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] tracking-tight">
            Consectetur Adipiscing Elit Sed Do Eiusmod
          </h2>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <div class="tilt-3d card-3d-interactive inline-block p-4 border border-accent-purple/40 bg-accent-purple/10 text-left">
            <span class="font-mono text-[10px] uppercase text-accent-purple block tracking-widest">
              Lorem Ipsum 2026
            </span>
            <span class="font-display font-bold text-lg text-white block mt-0.5">
              Dolor Sit Amet Consectetur
            </span>
            <span class="font-sans text-xs text-[#EAE5DC]/60">
              Adipiscing elit sed do eiusmod
            </span>
          </div>
        </div>
      </div>

      <!-- Core Transformation Pillars (3 Editorial Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 stagger-parent">
        
        <!-- Pillar 1 -->
        <div class="stagger-item tilt-3d card-3d-interactive border border-white/10 bg-[#192027]/70 p-8 hover:border-accent-purple flex flex-col justify-between">
          <div>
            <span class="font-mono text-xs text-accent-purple block mb-3">01 // LOREM IPSUM</span>
            <h3 class="font-serif text-2xl text-white mb-4">
              Tempor Incididunt Ut Labore
            </h3>
            <p class="font-sans text-sm text-[#EAE5DC]/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-white/10">
            <span class="font-mono text-xs text-white/50">Duis Aute Irure Dolor</span>
          </div>
        </div>

        <!-- Pillar 2 -->
        <div class="stagger-item tilt-3d card-3d-interactive border border-white/10 bg-[#192027]/70 p-8 hover:border-accent-purple flex flex-col justify-between">
          <div>
            <span class="font-mono text-xs text-accent-purple block mb-3">02 // DOLOR SIT AMET</span>
            <h3 class="font-serif text-2xl text-white mb-4">
              Voluptate Velit Esse Cillum
            </h3>
            <p class="font-sans text-sm text-[#EAE5DC]/70 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-white/10">
            <span class="font-mono text-xs text-white/50">Nemo Enim Ipsam Voluptatem</span>
          </div>
        </div>

        <!-- Pillar 3 -->
        <div class="stagger-item tilt-3d card-3d-interactive border border-white/10 bg-[#192027]/70 p-8 hover:border-accent-purple flex flex-col justify-between">
          <div>
            <span class="font-mono text-xs text-accent-purple block mb-3">03 // CONSECTETUR ADIPISCING</span>
            <h3 class="font-serif text-2xl text-white mb-4">
              Quis Nostrud Exercitation
            </h3>
            <p class="font-sans text-sm text-[#EAE5DC]/70 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-white/10">
            <span class="font-mono text-xs text-white/40">Blanditiis Praesentium Voluptatum</span>
          </div>
        </div>

      </div>

      <!-- Quote Bar with Scroll-Scrubbed Parallax & Entry Reveal -->
      <div class="reveal-3d gsap-scrub-card bg-[#192027] border-l-4 border-accent-purple p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-1">
          <p class="font-serif italic text-xl md:text-2xl text-[#FAF8F5]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”
          </p>
          <span class="font-mono text-xs text-accent-purple block pt-2">
            — Lorem Ipsum Dolor Sit Amet
          </span>
        </div>
        <NuxtLink
          to="/contact"
          class="shrink-0 px-6 py-3 border border-accent-purple text-accent-purple font-mono text-xs uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all"
        >
          Lorem Ipsum →
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
