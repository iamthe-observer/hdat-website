<template>
  <div class="pt-28 pb-24 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Page Hero / Editorial Masthead -->
      <div class="gsap-hero-stagger mb-16 pb-10 border-b-2 border-[#11161B]">
        <div class="hero-el inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-[11px] uppercase tracking-widest mb-4">
          <span class="w-2 h-2 rounded-full bg-accent-purple"></span>
          Lorem Ipsum // Dispatches
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 class="hero-el font-serif text-4xl sm:text-6xl md:text-7xl text-[#11161B] tracking-tight leading-[1.05]">
              Dolor Sit Amet Consectetur
            </h1>
            <p class="hero-el font-sans text-base md:text-xl text-[#11161B]/70 max-w-2xl mt-4 leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
            </p>
          </div>
          <div class="hero-el font-mono text-xs text-[#11161B]/50 shrink-0">
            LOREM ARCHIVE // 2026
          </div>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar stagger-parent">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectCategory(cat)"
          class="stagger-item px-5 py-2.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-200 border"
          :class="[
            activeCategory === cat
              ? 'bg-accent-purple text-white border-accent-purple shadow-md'
              : 'bg-[#FAF8F5] text-[#11161B]/70 border-[#E6E1D7] hover:border-accent-purple hover:text-accent-purple'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Articles Grid with Staggered Entry & 3D Tilt Cards -->
      <div ref="newsGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-parent">
        
        <article
          v-for="item in filteredNews"
          :key="item.id"
          class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] p-8 flex flex-col justify-between shadow-sm hover:border-accent-purple group cursor-pointer"
          @click="openModal(item)"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold bg-accent-purple/10 px-2.5 py-1">
                {{ item.category }}
              </span>
              <span class="font-mono text-xs text-[#11161B]/40">
                {{ item.date }}
              </span>
            </div>

            <h3 class="font-serif text-2xl text-[#11161B] mb-3 group-hover:text-accent-purple transition-colors leading-snug">
              {{ item.title }}
            </h3>

            <p class="font-sans text-xs sm:text-sm text-[#11161B]/75 leading-relaxed mb-6">
              {{ item.excerpt }}
            </p>
          </div>

          <div class="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
            <span class="font-mono text-[11px] text-[#11161B]/50">
              {{ item.readTime }}
            </span>
            <span class="font-display font-bold text-xs text-accent-purple group-hover:translate-x-1.5 transition-transform uppercase tracking-wider inline-flex items-center gap-1">
              Read More →
            </span>
          </div>
        </article>

      </div>

    </div>

    <!-- Read Statement Modal Drawer -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="activeStatement"
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        @click.self="activeStatement = null"
      >
        <div class="bg-[#FAF8F5] border-2 border-accent-purple w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 sm:p-10 shadow-2xl relative">
          <button
            @click="activeStatement = null"
            class="absolute top-6 right-6 text-xl text-[#11161B]/60 hover:text-accent-purple font-mono"
            aria-label="Close"
          >
            ✕
          </button>

          <span class="font-mono text-xs bg-accent-purple text-white px-3 py-1 uppercase tracking-widest inline-block mb-4">
            {{ activeStatement.category }} · {{ activeStatement.date }}
          </span>

          <h3 class="font-serif text-3xl sm:text-4xl text-[#11161B] mb-4">
            {{ activeStatement.title }}
          </h3>

          <div class="font-sans text-sm text-[#11161B]/80 leading-relaxed space-y-4 border-t border-b border-[#E6E1D7] py-6 my-4">
            <p>{{ activeStatement.fullText }}</p>
          </div>

          <div class="flex items-center justify-between pt-2">
            <span class="font-mono text-xs text-[#11161B]/50">
              Lorem Ipsum Dolor Sit Amet
            </span>
            <button
              @click="activeStatement = null"
              class="px-5 py-2.5 bg-accent-purple text-white text-xs font-mono uppercase tracking-widest hover:bg-accent-purple-dark"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import gsap from 'gsap'

useHead({
  title: 'Newsroom'
})

const activeCategory = ref('All')
const activeStatement = ref<any>(null)
const newsGridRef = ref<HTMLElement | null>(null)

const selectCategory = async (cat: string) => {
  activeCategory.value = cat
  await nextTick()
  if (newsGridRef.value) {
    const cards = newsGridRef.value.querySelectorAll('.stagger-item')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 36, rotationX: 8, scale: 0.96, transformPerspective: 1000 },
      { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 0.75, stagger: 0.08, ease: 'expo.out' }
    )
  }
}

const openModal = (item: any) => {
  activeStatement.value = item
}

const categories = ['All', 'Category Alpha', 'Category Beta', 'Category Gamma']

const newsItems = [
  {
    id: 1,
    category: 'Category Alpha',
    date: 'Date Placeholder',
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    readTime: '3 Min Read',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 2,
    category: 'Category Beta',
    date: 'Date Placeholder',
    title: 'Adipiscing Elit Sed Do Eiusmod Tempor',
    readTime: '4 Min Read',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    fullText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  },
  {
    id: 3,
    category: 'Category Gamma',
    date: 'Date Placeholder',
    title: 'Incididunt Ut Labore Et Dolore Magna',
    readTime: '5 Min Read',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
    fullText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
  },
  {
    id: 4,
    category: 'Category Alpha',
    date: 'Date Placeholder',
    title: 'Temporibus Autem Quibusdam Et Aut Officiis',
    readTime: '4 Min Read',
    excerpt: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    fullText: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.'
  }
]

const filteredNews = computed(() => {
  if (activeCategory.value === 'All') return newsItems
  return newsItems.filter(item => item.category === activeCategory.value)
})
</script>
