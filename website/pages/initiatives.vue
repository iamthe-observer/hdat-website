<template>
  <div class="pt-28 pb-24 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Page Hero -->
      <div class="gsap-hero-stagger mb-16 pb-10 border-b border-[#E6E1D7]">
        <div class="hero-el inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-[11px] uppercase tracking-widest mb-4">
          <span class="w-2 h-2 rounded-full bg-accent-purple"></span>
          Lorem Ipsum // Ledger
        </div>
        <h1 class="hero-el font-serif text-4xl sm:text-6xl md:text-7xl text-[#11161B] tracking-tight leading-[1.05] max-w-4xl">
          Consectetur Adipiscing Elit Sed Do
        </h1>
        <p class="hero-el font-sans text-base md:text-xl text-[#11161B]/70 max-w-2xl mt-6 leading-relaxed">
          Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>

      <!-- Animated Stat Rollers (4 Hero Counters) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger-parent">
        <div
          v-for="stat in impactStats"
          :key="stat.label"
          class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-accent-purple"
        >
          <span class="font-mono text-[10px] uppercase text-[#11161B]/50 tracking-wider">
            {{ stat.category }}
          </span>
          <div class="my-4">
            <span
              class="stat-counter font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-accent-purple tracking-tight block"
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

      <!-- Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar stagger-parent">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          class="stagger-item px-5 py-2.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-200 border"
          :class="[
            activeCategory === category
              ? 'bg-accent-purple text-white border-accent-purple shadow-md'
              : 'bg-[#FAF8F5] text-[#11161B]/70 border-[#E6E1D7] hover:border-accent-purple hover:text-accent-purple'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid with Staggered Entry & 3D Card Hover -->
      <div ref="projectsGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-parent">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="stagger-item tilt-3d card-3d-interactive bg-[#FFFFFF] border border-[#E6E1D7] flex flex-col justify-between p-8 shadow-sm hover:border-accent-purple group cursor-pointer"
          @click="selectedProject = project"
        >
          <div>
            <div class="flex items-center justify-between mb-4 pb-4 border-b border-[#F2EFE9]">
              <span class="font-mono text-[10px] text-accent-purple font-semibold uppercase tracking-widest bg-accent-purple/5 px-2.5 py-1">
                {{ project.tag }}
              </span>
              <span class="font-mono text-xs text-[#11161B]/40">
                {{ project.location }}
              </span>
            </div>

            <h3 class="font-serif text-2xl text-[#11161B] mb-3 group-hover:text-accent-purple transition-colors">
              {{ project.title }}
            </h3>
            <p class="font-sans text-sm text-[#11161B]/75 leading-relaxed mb-6">
              {{ project.description }}
            </p>
          </div>

          <div class="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
            <span class="font-mono text-xs text-[#11161B]/50">
              Status: {{ project.verificationStatus }}
            </span>
            <span class="text-xs font-display font-bold text-accent-purple group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
              View Details →
            </span>
          </div>
        </div>
      </div>

    </div>

    <!-- Slide-Out Verification Ledger Modal Drawer -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        @click.self="selectedProject = null"
      >
        <div class="bg-[#FAF8F5] border-2 border-accent-purple w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 sm:p-10 shadow-2xl relative">
          
          <button
            @click="selectedProject = null"
            class="absolute top-6 right-6 text-xl text-[#11161B]/60 hover:text-accent-purple font-mono"
            aria-label="Close Ledger"
          >
            ✕
          </button>

          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <span class="font-mono text-xs bg-accent-purple text-white px-3 py-1 tracking-widest uppercase">
                Lorem Record
              </span>
              <span class="font-mono text-xs text-[#11161B]/50">
                REF: {{ selectedProject.refCode }}
              </span>
            </div>

            <h3 class="font-serif text-3xl sm:text-4xl text-[#11161B]">
              {{ selectedProject.title }}
            </h3>

            <div class="grid grid-cols-2 gap-4 py-4 border-y border-[#E6E1D7] font-mono text-xs">
              <div>
                <span class="text-[#11161B]/40 block uppercase">Location</span>
                <span class="font-semibold text-[#11161B]">{{ selectedProject.location }}</span>
              </div>
              <div>
                <span class="text-[#11161B]/40 block uppercase">Status</span>
                <span class="text-accent-purple font-semibold">{{ selectedProject.verificationStatus }}</span>
              </div>
              <div>
                <span class="text-[#11161B]/40 block uppercase">Category</span>
                <span class="font-semibold text-[#11161B]">{{ selectedProject.beneficiaries }}</span>
              </div>
              <div>
                <span class="text-[#11161B]/40 block uppercase">Reference</span>
                <span class="font-semibold text-[#11161B]">{{ selectedProject.partner }}</span>
              </div>
            </div>

            <div class="space-y-3 font-sans text-sm text-[#11161B]/80 leading-relaxed">
              <h4 class="font-display font-bold text-xs uppercase tracking-wider text-[#11161B]">
                Lorem Ipsum Details
              </h4>
              <p>{{ selectedProject.fullReport }}</p>
            </div>

            <div class="p-4 bg-[#F2EFE9] border border-[#E6E1D7] flex items-center justify-between text-xs font-mono">
              <span class="text-[#11161B]/70">Duis aute irure dolor in reprehenderit</span>
              <button
                @click="selectedProject = null"
                class="text-accent-purple font-bold hover:underline"
              >
                Close
              </button>
            </div>
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
  title: 'Initiatives'
})

const activeCategory = ref('All')
const selectedProject = ref<any>(null)
const projectsGridRef = ref<HTMLElement | null>(null)

const selectCategory = async (category: string) => {
  activeCategory.value = category
  await nextTick()
  if (projectsGridRef.value) {
    const cards = projectsGridRef.value.querySelectorAll('.stagger-item')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 36, rotationX: 8, scale: 0.96, transformPerspective: 1000 },
      { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 0.75, stagger: 0.08, ease: 'expo.out' }
    )
  }
}

const categories = ['All', 'Category Alpha', 'Category Beta', 'Category Gamma', 'Category Delta']

const impactStats = [
  { target: 30, suffix: '+', label: 'Lorem Ipsum Dolor', category: 'Category Alpha' },
  { target: 5, suffix: '', label: 'Consectetur Adipiscing', category: 'Category Beta' },
  { target: 200, suffix: '+', label: 'Sed Do Eiusmod', category: 'Category Gamma' },
  { target: 4, suffix: '', label: 'Tempor Incididunt', category: 'Category Delta' }
]

const projects = [
  {
    id: 1,
    tag: 'Category Alpha',
    category: 'Category Alpha',
    location: 'Location One',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    verificationStatus: 'Verified Record',
    refCode: 'LIP-001',
    beneficiaries: 'Duis aute irure dolor in reprehenderit',
    partner: 'Excepteur Sint Occaecat',
    fullReport: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    tag: 'Category Beta',
    category: 'Category Beta',
    location: 'Location Two',
    title: 'Sed Do Eiusmod Tempor Incididunt',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    verificationStatus: 'Verified Record',
    refCode: 'LIP-002',
    beneficiaries: 'Excepteur sint occaecat cupidatat non',
    partner: 'Sunt In Culpa Qui Officia',
    fullReport: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    tag: 'Category Beta',
    category: 'Category Beta',
    location: 'Location Three',
    title: 'Ut Enim Ad Minim Veniam Quis',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
    verificationStatus: 'Verified Record',
    refCode: 'LIP-003',
    beneficiaries: 'Nemo enim ipsam voluptatem quia voluptas',
    partner: 'Voluptatem Sequi Nesciunt',
    fullReport: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
  },
  {
    id: 4,
    tag: 'Category Gamma',
    category: 'Category Gamma',
    location: 'Location Four',
    title: 'Duis Aute Irure Dolor In Reprehenderit',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    verificationStatus: 'Verified Record',
    refCode: 'LIP-004',
    beneficiaries: 'Blanditiis praesentium voluptatum deleniti',
    partner: 'Dignissimos Ducimus Qui',
    fullReport: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
  },
  {
    id: 5,
    tag: 'Category Delta',
    category: 'Category Delta',
    location: 'Location Five',
    title: 'Excepteur Sint Occaecat Cupidatat',
    description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
    verificationStatus: 'Verified Record',
    refCode: 'LIP-005',
    beneficiaries: 'Temporibus autem quibusdam et aut officiis',
    partner: 'Necessitatibus Saepe Eveniet',
    fullReport: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.'
  },
  {
    id: 6,
    tag: 'Category Alpha',
    category: 'Category Alpha',
    location: 'Location Six',
    title: 'Nemo Enim Ipsam Voluptatem Quia',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    verificationStatus: 'Verified Record',
    refCode: 'LIP-006',
    beneficiaries: 'Cum soluta nobis est eligendi optio',
    partner: 'Maxime Placeat Facere',
    fullReport: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>
