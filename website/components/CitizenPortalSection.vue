<template>
  <section id="citizen-portal" class="py-28 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left: Open Governance & Information -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <span class="font-mono text-xs text-accent-purple tracking-widest uppercase block mb-1">
              Lorem Ipsum // Dolor Sit
            </span>
            <h2 class="font-serif text-4xl md:text-5xl text-[#11161B] tracking-tight">
              Consectetur Adipiscing Elit
            </h2>
          </div>

          <p class="font-sans text-sm md:text-base text-[#11161B]/75 leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>

          <!-- Office Locations -->
          <div class="space-y-4 pt-4 border-t border-[#E6E1D7]">
            <div class="p-6 bg-[#F2EFE9] border border-[#E6E1D7]">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold block mb-1">
                Location Alpha
              </span>
              <p class="font-serif text-lg text-[#11161B]">Lorem Ipsum Dolor Sit</p>
              <p class="font-sans text-xs text-[#11161B]/60 mt-1">Consectetur adipiscing elit sed do</p>
            </div>

            <div class="p-6 bg-[#F2EFE9] border border-[#E6E1D7]">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold block mb-1">
                Location Beta
              </span>
              <p class="font-serif text-lg text-[#11161B]">Eiusmod Tempor Incididunt</p>
              <p class="font-sans text-xs text-[#11161B]/60 mt-1">Labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>

        <!-- Right: The Submission Form -->
        <div class="lg:col-span-7 bg-[#FFFFFF] border-2 border-[#E6E1D7] p-8 sm:p-12 shadow-sm relative">
          <div class="absolute top-0 right-0 bg-accent-purple text-white px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest">
            Lorem Portal
          </div>

          <h3 class="font-serif text-2xl text-[#11161B] mb-6">
            Lorem Ipsum Dolor Sit Amet
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Lorem Name *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Lorem Ipsum"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                />
              </div>

              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Lorem Phone *
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="+00 000 000 0000"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Lorem Location *
                </label>
                <input
                  v-model="form.location"
                  type="text"
                  required
                  placeholder="Dolor Sit Amet"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                />
              </div>

              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Lorem Category *
                </label>
                <select
                  v-model="form.category"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                >
                  <option value="Category Alpha">Category Alpha</option>
                  <option value="Category Beta">Category Beta</option>
                  <option value="Category Gamma">Category Gamma</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                Lorem Message *
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-4 bg-accent-purple text-white font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-purple-dark transition-all duration-200 shadow-md"
            >
              Submit Dispatch →
            </button>

            <!-- Success Feedback -->
            <div
              v-if="submitted"
              class="p-4 bg-accent-purple/10 border border-accent-purple text-accent-purple font-mono text-xs flex items-center justify-between"
            >
              <span>Lorem ipsum dolor sit amet #LIP-{{ Math.floor(100000 + Math.random() * 900000) }}.</span>
              <button @click="submitted = false" class="font-bold">✕</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  location: '',
  category: 'Category Alpha',
  message: ''
})

const handleSubmit = () => {
  submitted.value = true
  form.name = ''
  form.phone = ''
  form.location = ''
  form.message = ''
}
</script>
