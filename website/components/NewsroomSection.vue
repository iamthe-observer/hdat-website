<template>
  <section id="newsroom" class="py-28 md:py-36 bg-[#F2EFE9] border-t border-b border-[#E6E1D7] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Editorial Masthead Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-[#11161B] pb-6 reveal-3d">
        <div>
          <span class="font-mono text-xs text-accent-purple tracking-widest uppercase block mb-1">
            Lorem Ipsum // Newsroom
          </span>
          <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl text-[#11161B] tracking-tight">
            Dolor Sit Amet Consectetur
          </h2>
        </div>
        <div class="mt-4 md:mt-0 font-mono text-xs text-[#11161B]/60 text-right">
          <span>LOREM IPSUM DOLOR SIT AMET</span>
        </div>
      </div>

      <!-- Articles Grid (3 Editorial Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-parent">
        
        <article
          v-for="item in newsItems"
          :key="item.id"
          class="stagger-item tilt-3d card-3d-interactive bg-[#FAF8F5] border border-[#E6E1D7] p-8 flex flex-col justify-between hover:border-accent-purple group cursor-pointer"
          @click="openModal(item)"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold bg-accent-purple/10 px-2 py-0.5">
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

          <div class="pt-4 border-t border-[#E6E1D7] flex items-center justify-between">
            <span class="font-mono text-[11px] text-[#11161B]/50">
              {{ item.readTime }}
            </span>
            <span class="font-display font-bold text-xs text-accent-purple group-hover:translate-x-1 transition-transform uppercase tracking-wider inline-flex items-center gap-1">
              Read More →
            </span>
          </div>
        </article>

      </div>

    </div>

    <!-- Read Statement Modal -->
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

          <h3 class="font-serif text-3xl text-[#11161B] mb-4">
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
              class="px-4 py-2 bg-accent-purple text-white text-xs font-mono uppercase tracking-widest"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeStatement = ref<any>(null)

const openModal = (item: any) => {
  activeStatement.value = item
}

const newsItems = [
  {
    id: 1,
    category: 'Category One',
    date: 'Date Placeholder',
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    readTime: '3 Min Read',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 2,
    category: 'Category Two',
    date: 'Date Placeholder',
    title: 'Adipiscing Elit Sed Do Eiusmod Tempor',
    readTime: '4 Min Read',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    fullText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  },
  {
    id: 3,
    category: 'Category Three',
    date: 'Date Placeholder',
    title: 'Incididunt Ut Labore Et Dolore Magna',
    readTime: '5 Min Read',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
    fullText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
  }
]
</script>
