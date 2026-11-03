<template>
  <section id="story" class="relative py-28 md:py-36 bg-[#F2EFE9] border-t border-b border-[#E6E1D7] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Section Header Kicker -->
      <div class="mb-16 md:mb-24 flex items-center justify-between border-b border-[#DCD5C9] pb-6 reveal-3d">
        <div>
          <span class="font-mono text-xs text-accent-purple tracking-widest uppercase block mb-1">
            Lorem Ipsum // Dolor Sit Amet
          </span>
          <h2 class="font-serif text-3xl md:text-5xl text-[#11161B] tracking-tight">
            Consectetur Adipiscing Elit Sed Do Eiusmod
          </h2>
        </div>
        <span class="hidden md:block font-mono text-xs text-[#11161B]/40">
          0.0000° N, 0.0000° W [LOREM]
        </span>
      </div>

      <!-- Split Layout: Sticky Left Statement + Scrolling Milestones Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left: Sticky Anchor Quote & Title Badge -->
        <div class="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          <div class="reveal-3d tilt-3d card-3d-interactive bg-[#FAF8F5] p-8 md:p-10 border border-[#E6E1D7] shadow-sm relative">
            <div class="absolute -top-3.5 left-8 bg-accent-purple text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
              Lorem Ipsum Dolor
            </div>

            <p class="font-serif italic text-2xl md:text-3xl text-[#11161B] leading-snug">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”
            </p>

            <div class="pt-6 border-t border-[#E6E1D7] flex items-center justify-between">
              <div>
                <span class="font-display font-bold text-sm text-[#11161B] uppercase tracking-wider block">
                  Lorem Ipsum Dolor
                </span>
                <span class="font-sans text-xs text-[#11161B]/60">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div class="w-10 h-10 rounded-full border border-accent-purple/30 flex items-center justify-center text-accent-purple font-serif text-lg">
                LIP
              </div>
            </div>
          </div>

          <!-- Academic & Professional Credentials Card -->
          <div class="reveal-3d tilt-3d card-3d-interactive bg-[#11161B] text-white p-6 space-y-4">
            <span class="font-mono text-[10px] tracking-widest uppercase text-accent-purple block">
              Lorem Ipsum Dolor Sit
            </span>
            <ul class="space-y-2 text-xs font-sans text-[#EAE5DC]/80">
              <li class="flex items-start gap-2">
                <span class="text-accent-purple font-bold">✓</span>
                <span><strong>Lorem Ipsum</strong> — Consectetur Adipiscing Elit (2024)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent-purple font-bold">✓</span>
                <span><strong>Sed Do Eiusmod</strong> — Tempor Incididunt Ut Labore</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent-purple font-bold">✓</span>
                <span><strong>Dolore Magna</strong> — Aliqua Ut Enim Ad Minim</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent-purple font-bold">✓</span>
                <span><strong>Quis Nostrud (2026)</strong> — Exercitation ullamco laboris nisi</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: The 4 Chronological Milestones with Scroll-Scrubbed Progress Spine -->
        <div class="lg:col-span-7 relative pl-0 sm:pl-8 timeline-track">
          <!-- Scroll-reactive Vertical Spine -->
          <div class="hidden sm:block absolute left-0 top-2 bottom-2 w-[2px] bg-[#DCD5C9] overflow-hidden">
            <div class="gsap-progress-spine w-full h-full bg-accent-purple origin-top scale-y-0"></div>
          </div>

          <div class="space-y-10">
          <!-- Milestone 01 -->
          <div class="milestone-card gsap-scrub-card tilt-3d card-3d-interactive bg-[#FAF8F5] border border-[#E6E1D7] p-8 md:p-10 hover:border-accent-purple">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs text-accent-purple font-bold uppercase tracking-widest">
                Milestone 01 // Lorem
              </span>
              <span class="font-mono text-xs text-[#11161B]/40">Ipsum & Dolor</span>
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-[#11161B] mb-4">
              Consectetur Adipiscing Elit Sed Do
            </h3>
            <p class="font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Lorem Ipsum</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Dolor Sit</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Amet Consectetur</span>
            </div>
          </div>

          <!-- Milestone 02 -->
          <div class="milestone-card gsap-scrub-card tilt-3d card-3d-interactive bg-[#FAF8F5] border border-[#E6E1D7] p-8 md:p-10 hover:border-accent-purple">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs text-accent-purple font-bold uppercase tracking-widest">
                Milestone 02 // Ipsum
              </span>
              <span class="font-mono text-xs text-[#11161B]/40">Dolor & Sit</span>
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-[#11161B] mb-4">
              Eiusmod Tempor Incididunt Ut Labore
            </h3>
            <p class="font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Tempor Incididunt</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Magna Aliqua</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Minim Veniam</span>
            </div>
          </div>

          <!-- Milestone 03 -->
          <div class="milestone-card gsap-scrub-card tilt-3d card-3d-interactive bg-[#FAF8F5] border border-[#E6E1D7] p-8 md:p-10 hover:border-accent-purple">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs text-accent-purple font-bold uppercase tracking-widest">
                Milestone 03 // Dolor
              </span>
              <span class="font-mono text-xs text-[#11161B]/40">Amet & Elit</span>
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-[#11161B] mb-4">
              Exercitation Ullamco Laboris Nisi
            </h3>
            <p class="font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Ullamco Laboris</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Commodo Consequat</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Duis Aute</span>
            </div>
          </div>

          <!-- Milestone 04 -->
          <div class="milestone-card gsap-scrub-card tilt-3d card-3d-interactive bg-[#FAF8F5] border border-[#E6E1D7] p-8 md:p-10 hover:border-accent-purple">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs text-accent-purple font-bold uppercase tracking-widest">
                Milestone 04 // Amet
              </span>
              <span class="font-mono text-xs text-[#11161B]/40">Sed & Eiusmod</span>
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-[#11161B] mb-4">
              Voluptate Velit Esse Cillum Dolore
            </h3>
            <p class="font-sans text-sm md:text-base text-[#11161B]/80 leading-relaxed mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Velit Esse</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Cillum Dolore</span>
              <span class="px-2.5 py-1 bg-[#F2EFE9] text-[11px] font-mono text-[#11161B]/70">Fugiat Nulla</span>
            </div>
          </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
