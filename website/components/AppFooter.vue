<template>
  <footer class="gsap-footer bg-[#11161B] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
    <!-- Subtle Violet Specular Lighting on Footer Edge -->
    <div class="gsap-line-center absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-purple to-transparent origin-center"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Top Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 stagger-parent">
        
        <!-- Left: Brand Statement -->
        <div class="md:col-span-6 space-y-4 stagger-item">
          <NuxtLink to="/" class="font-serif text-3xl text-white tracking-tight block hover:text-accent-purple transition-colors">
            Hon. Dorcas Affo-Toffey
          </NuxtLink>
          <p class="font-mono text-xs uppercase text-accent-purple tracking-widest">
            Member of Parliament, Jomoro · Deputy Minister of Transport
          </p>
          <p class="font-sans text-xs text-[#EAE5DC]/60 max-w-md leading-relaxed pt-2">
            Dedicated to the principle that public service must deliver verifiable dignity to every community, farmer, mother, and youth across Ghana.
          </p>
        </div>

        <!-- Center: Multi-Page Navigation -->
        <div class="md:col-span-3 space-y-3 font-mono text-xs stagger-item">
          <span class="text-white/40 uppercase tracking-widest block mb-4">Explore Platform</span>
          <ul class="space-y-2.5 footer-links-list">
            <li class="footer-link-item"><NuxtLink to="/" class="text-white/80 hover:text-accent-purple transition-colors inline-block hover:translate-x-1 duration-200">Home Portal</NuxtLink></li>
            <li class="footer-link-item"><NuxtLink to="/about" class="text-white/80 hover:text-accent-purple transition-colors inline-block hover:translate-x-1 duration-200">Roots & Mandate</NuxtLink></li>
            <li class="footer-link-item"><NuxtLink to="/initiatives" class="text-white/80 hover:text-accent-purple transition-colors inline-block hover:translate-x-1 duration-200">Verified Impact Ledger</NuxtLink></li>
            <li class="footer-link-item"><NuxtLink to="/transport" class="text-white/80 hover:text-accent-purple transition-colors inline-block hover:translate-x-1 duration-200">Transport Policy</NuxtLink></li>
            <li class="footer-link-item"><NuxtLink to="/newsroom" class="text-white/80 hover:text-accent-purple transition-colors inline-block hover:translate-x-1 duration-200">Speeches & Statements</NuxtLink></li>
            <li class="footer-link-item"><NuxtLink to="/contact" class="text-white/80 hover:text-accent-purple transition-colors inline-block hover:translate-x-1 duration-200">Citizen Direct Desk</NuxtLink></li>
          </ul>
        </div>

        <!-- Right: Official Digital Channels -->
        <div class="md:col-span-3 space-y-3 font-mono text-xs stagger-item">
          <span class="text-white/40 uppercase tracking-widest block mb-4">Official Channels</span>
          <ul class="space-y-2.5 footer-links-list">
            <li class="footer-link-item">
              <a href="https://facebook.com/dorcastoffey" target="_blank" rel="noopener" class="text-white/80 hover:text-accent-purple transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>↗</span> Facebook: /dorcastoffey
              </a>
            </li>
            <li class="footer-link-item">
              <a href="https://instagram.com/dorcasaffotoffey" target="_blank" rel="noopener" class="text-white/80 hover:text-accent-purple transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>↗</span> Instagram: @dorcasaffotoffey
              </a>
            </li>
            <li class="footer-link-item">
              <a href="https://twitter.com/AfoDorcas" target="_blank" rel="noopener" class="text-white/80 hover:text-accent-purple transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>↗</span> X (Twitter): @AfoDorcas
              </a>
            </li>
            <li class="footer-link-item">
              <NuxtLink to="/contact" class="text-accent-purple hover:underline flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>✉</span> Constituent Inquiries
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom-bar pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4">
        <div>
          © {{ new Date().getFullYear() }} Office of Hon. Dorcas Affo-Toffey. All Rights Reserved.
        </div>
        <div class="flex items-center gap-6">
          <a href="#" @click.prevent="scrollToTop" class="text-accent-purple hover:underline flex items-center gap-1 group">
            <span>Back to Top</span>
            <span class="group-hover:-translate-y-1 transition-transform duration-200">↑</span>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
