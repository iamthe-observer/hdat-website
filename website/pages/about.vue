<template>
  <div class="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      
      <!-- Page Hero / Masthead -->
      <div class="gsap-hero-stagger mb-14 sm:mb-20 pb-8 sm:pb-10 border-b border-[#E6E1D7]">
        <div class="hero-el inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 sm:mb-4">
          <span class="w-2 h-2 rounded-full bg-accent-purple"></span>
          Lorem Ipsum // Dolor Sit
        </div>
        <h1 class="hero-el font-serif text-[1.95rem] leading-[1.08] sm:text-5xl md:text-7xl text-[#11161B] tracking-tight sm:leading-[1.05] max-w-4xl">
          Consectetur Adipiscing Elit Sed Do Eiusmod Tempor
        </h1>
        <p class="hero-el font-sans text-sm sm:text-base md:text-xl text-[#11161B]/70 max-w-2xl mt-4 sm:mt-6 leading-relaxed">
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>

      <!-- Section 1: The Foundations -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16 sm:mb-28">
        
        <!-- Left: Editorial Visual Frame with 3D Tilt & Scroll Parallax -->
        <div class="lg:col-span-5 tilt-3d reveal-3d">
          <div class="relative aspect-[4/5] bg-[#11161B] border-2 border-accent-purple/30 p-2 shadow-2xl overflow-hidden card-3d-interactive">
            <img src="/images/datt.png" alt="Hon. Dorcas Affo-Toffey" class="gsap-parallax-img w-full h-full object-cover object-top" />
            <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 bg-black/75 backdrop-blur-md border border-white/10 text-white">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest block">
                Lorem Ipsum
              </span>
              <p class="font-serif text-base sm:text-lg font-semibold mt-0.5">Dolor Sit Amet Consectetur</p>
              <span class="font-sans text-[11px] text-white/60">Sed do eiusmod tempor</span>
            </div>
          </div>
        </div>

        <!-- Right: Text Narrative with Staggered Paragraph Reveal -->
        <div class="lg:col-span-7 space-y-5 sm:space-y-6 stagger-parent">
          <span class="stagger-item font-mono text-[11px] sm:text-xs text-accent-purple uppercase tracking-widest font-semibold block">
            Lorem Ipsum // Foundations
          </span>
          <h2 class="stagger-item font-serif text-2xl sm:text-3xl md:text-4xl text-[#11161B] leading-snug">
            Duis Aute Irure Dolor In Reprehenderit
          </h2>
          <p class="stagger-item font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p class="stagger-item font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p class="stagger-item font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
          </p>
        </div>

      </div>

      <!-- Section 2: Enterprise -->
      <div class="mb-16 sm:mb-28">
        <div class="mb-8 sm:mb-12 border-b border-[#E6E1D7] pb-5 sm:pb-6 reveal-3d">
          <span class="font-mono text-[11px] sm:text-xs text-accent-purple uppercase tracking-widest block mb-1">
            Lorem Ipsum // Acumen
          </span>
          <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl text-[#11161B] leading-snug">
            Tempor Incididunt Ut Labore Et Dolore
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 stagger-parent">
          
          <div class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span class="font-mono text-xs text-accent-purple block mb-2.5 sm:mb-3">01 // LOREM ALPHA</span>
              <h3 class="font-serif text-xl sm:text-2xl text-[#11161B] mb-3 sm:mb-4">
                Dolor Sit Amet
              </h3>
              <p class="font-sans text-sm text-[#11161B]/75 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div class="mt-6 sm:mt-8 pt-4 border-t border-[#F2EFE9] font-mono text-[11px] text-[#11161B]/50">
              Duis Aute Irure · 2002–2012
            </div>
          </div>

          <div class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span class="font-mono text-xs text-accent-purple block mb-2.5 sm:mb-3">02 // LOREM BETA</span>
              <h3 class="font-serif text-xl sm:text-2xl text-[#11161B] mb-3 sm:mb-4">
                Consectetur Adipiscing
              </h3>
              <p class="font-sans text-sm text-[#11161B]/75 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
              </p>
            </div>
            <div class="mt-6 sm:mt-8 pt-4 border-t border-[#F2EFE9] font-mono text-[11px] text-[#11161B]/50">
              Nemo Enim Ipsam · 2012–Present
            </div>
          </div>

          <div class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span class="font-mono text-xs text-accent-purple block mb-2.5 sm:mb-3">03 // LOREM GAMMA</span>
              <h3 class="font-serif text-xl sm:text-2xl text-[#11161B] mb-3 sm:mb-4">
                Eiusmod Tempor
              </h3>
              <p class="font-sans text-sm text-[#11161B]/75 leading-relaxed">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
              </p>
            </div>
            <div class="mt-6 sm:mt-8 pt-4 border-t border-[#F2EFE9] font-mono text-[11px] text-[#11161B]/50">
              Similique Sunt In Culpa
            </div>
          </div>

        </div>
      </div>

      <!-- Section 3: Credentials Matrix -->
      <div class="gsap-scrub-card bg-[#11161B] text-white p-6 sm:p-12 border-2 border-accent-purple/40 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div class="lg:col-span-8">
            <div class="max-w-3xl space-y-3 sm:space-y-4 reveal-3d">
              <span class="font-mono text-[11px] sm:text-xs text-accent-purple uppercase tracking-widest block">
                Lorem Ipsum Dolor
              </span>
              <h2 class="font-serif text-2xl sm:text-4xl text-[#FAF8F5] leading-snug">
                Sed Ut Perspiciatis Unde Omnis
              </h2>
              <p class="font-sans text-sm sm:text-base text-[#EAE5DC]/80 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur:
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 font-sans text-sm stagger-parent">
              <div class="stagger-item tilt-3d card-3d-interactive flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-accent-purple/60">
                <span class="text-accent-purple text-lg">■</span>
                <div>
                  <strong class="text-white block font-display">Lorem Ipsum Dolor Sit Amet</strong>
                  <span class="text-white/60 text-xs">Consectetur adipiscing elit (2024)</span>
                </div>
              </div>

              <div class="stagger-item tilt-3d card-3d-interactive flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-accent-purple/60">
                <span class="text-accent-purple text-lg">■</span>
                <div>
                  <strong class="text-white block font-display">Sed Do Eiusmod Tempor Incididunt</strong>
                  <span class="text-white/60 text-xs">Ut labore et dolore magna aliqua</span>
                </div>
              </div>

              <div class="stagger-item tilt-3d card-3d-interactive flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-accent-purple/60">
                <span class="text-accent-purple text-lg">■</span>
                <div>
                  <strong class="text-white block font-display">Ut Enim Ad Minim Veniam</strong>
                  <span class="text-white/60 text-xs">Quis nostrud exercitation ullamco</span>
                </div>
              </div>

              <div class="stagger-item tilt-3d card-3d-interactive flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-accent-purple/60">
                <span class="text-accent-purple text-lg">■</span>
                <div>
                  <strong class="text-white block font-display">Duis Aute Irure Dolor In Reprehenderit</strong>
                  <span class="text-white/60 text-xs">Excepteur sint occaecat cupidatat</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Executive Portrait Frame (HDAT2.jpg) -->
          <div class="lg:col-span-4">
            <div class="tilt-3d card-3d-interactive relative aspect-[3/4] max-w-[280px] mx-auto lg:max-w-none bg-[#192027] border border-accent-purple/40 p-2 overflow-hidden shadow-xl">
              <img
                src="/images/HDAT2.jpg"
                alt="Hon. Dorcas Affo-Toffey"
                class="gsap-parallax-img w-full h-full object-cover object-top"
              />
              <div class="absolute inset-x-2 bottom-2 bg-black/75 backdrop-blur-md p-3 border-t border-white/10">
                <span class="font-mono text-[9px] text-accent-purple uppercase tracking-widest block">
                  Executive Profile
                </span>
                <span class="font-serif text-sm text-white block mt-0.5">
                  Hon. Dorcas Affo-Toffey
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About'
})
</script>
