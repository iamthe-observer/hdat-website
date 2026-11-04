<template>
  <div class="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      
      <!-- Page Hero -->
      <div class="gsap-hero-stagger mb-12 sm:mb-16 pb-8 sm:pb-10 border-b border-[#E6E1D7]">
        <div class="hero-el inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 sm:mb-4">
          <span class="w-2 h-2 rounded-full bg-accent-purple"></span>
          Direct MP Access // Open Governance
        </div>
        <h1 class="hero-el font-serif text-[1.95rem] leading-[1.08] sm:text-5xl md:text-7xl text-[#11161B] tracking-tight sm:leading-[1.05] max-w-4xl">
          Citizen Direct Access & Constituency Secretariat
        </h1>
        <p class="hero-el font-sans text-sm sm:text-base md:text-xl text-[#11161B]/70 max-w-2xl mt-3 sm:mt-4 leading-relaxed">
          Submit constituent requests, community infrastructure petitions, transport feedback, or investor proposals directly to the office.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        
        <!-- Left: Office Locations & Channels -->
        <div class="lg:col-span-5 space-y-6 sm:space-y-8">
          <div class="space-y-4 stagger-parent">
            
            <div class="stagger-item tilt-3d card-3d-interactive p-6 sm:p-8 bg-[#FFFFFF] border border-[#E6E1D7] shadow-sm">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold block mb-1.5 sm:mb-2">
                Parliamentary Office (Accra)
              </span>
              <p class="font-serif text-xl sm:text-2xl text-[#11161B]">Parliament House, Osu</p>
              <p class="font-sans text-xs sm:text-sm text-[#11161B]/70 mt-1">
                8th Parliament of the 4th Republic · Deputy Minister of Transport Liaison Desk
              </p>
            </div>

            <div class="stagger-item tilt-3d card-3d-interactive p-6 sm:p-8 bg-[#FFFFFF] border border-[#E6E1D7] shadow-sm">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold block mb-1.5 sm:mb-2">
                Half-Assini Secretariat (Jomoro)
              </span>
              <p class="font-serif text-xl sm:text-2xl text-[#11161B]">Municipal Headquarters</p>
              <p class="font-sans text-xs sm:text-sm text-[#11161B]/70 mt-1">
                Half-Assini Central Desk · Serving Coastal & Agrarian Communities
              </p>
            </div>

            <div class="stagger-item tilt-3d card-3d-interactive p-6 sm:p-8 bg-[#FFFFFF] border border-[#E6E1D7] shadow-sm">
              <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest font-semibold block mb-1.5 sm:mb-2">
                Elubo Border Secretariat
              </span>
              <p class="font-serif text-xl sm:text-2xl text-[#11161B]">Trade & Cross-Border Desk</p>
              <p class="font-sans text-xs sm:text-sm text-[#11161B]/70 mt-1">
                Elubo Gateway Office · Transport & Commercial Trade Liaison
              </p>
            </div>

          </div>

          <!-- Direct Channels -->
          <div class="reveal-3d p-5 sm:p-6 bg-[#11161B] text-white space-y-3">
            <span class="font-mono text-[10px] text-accent-purple uppercase tracking-widest block">
              Official Media & Digital Channels
            </span>
            <div class="font-mono text-xs space-y-2 text-[#EAE5DC]/80">
              <p>Email: <span class="text-white">office@dorcasaffotoffey.com</span></p>
              <p>Phone / WhatsApp: <span class="text-white">+233 24 300 5695</span></p>
              <p>Facebook: <a href="https://facebook.com/dorcastoffey" target="_blank" class="text-accent-purple hover:underline">fb.com/dorcastoffey</a></p>
            </div>
          </div>
        </div>

        <!-- Right: Dispatch Submission Form -->
        <div class="lg:col-span-7 bg-[#FFFFFF] border-2 border-[#E6E1D7] p-5 sm:p-12 pt-10 sm:pt-12 shadow-lg relative gsap-scrub-card stagger-parent">
          <div class="stagger-item absolute top-0 right-0 bg-accent-purple text-white px-3.5 py-1.5 sm:px-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
            Verified Ingestion Desk
          </div>

          <h3 class="stagger-item font-serif text-2xl sm:text-3xl text-[#11161B] mb-2">
            Submit a Citizen Dispatch
          </h3>
          <p class="stagger-item font-sans text-xs text-[#11161B]/60 mb-8">
            Every submission is logged into our constituent management system and assigned a trackable reference ID.
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="stagger-item grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Full Name *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                />
              </div>

              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="+233 XX XXX XXXX"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                />
              </div>
            </div>

            <div class="stagger-item grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Community / Town *
                </label>
                <input
                  v-model="form.location"
                  type="text"
                  required
                  placeholder="e.g. Bonyere, Elubo, Tikobo No. 1"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                />
              </div>

              <div>
                <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                  Inquiry Nature *
                </label>
                <select
                  v-model="form.category"
                  class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors"
                >
                  <option value="Constituency Welfare & Healthcare">Constituency Welfare & Healthcare</option>
                  <option value="Education & Scholarships">Education & Student Support</option>
                  <option value="Transport & Road Infrastructure">Transport Corridors & Road Safety</option>
                  <option value="Industrial Investment">Business & Industrial Investment</option>
                  <option value="Media & Press">Media & Press Interview</option>
                </select>
              </div>
            </div>

            <div class="stagger-item">
              <label class="block font-mono text-[11px] uppercase tracking-wider text-[#11161B]/70 mb-2">
                Dispatch Description / Details *
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Please state details clearly, including specific community locations..."
                class="w-full bg-[#FAF8F5] border border-[#E6E1D7] px-4 py-3 text-sm font-sans focus:outline-none focus:border-accent-purple transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="stagger-item w-full py-4 bg-accent-purple text-white font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-purple-dark hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-200"
            >
              Log Official Dispatch →
            </button>

            <!-- Success Notification -->
            <div
              v-if="submitted"
              class="p-5 bg-accent-purple/10 border-2 border-accent-purple text-accent-purple font-mono text-xs flex items-center justify-between"
            >
              <div>
                <strong class="block text-sm font-display mb-1">Dispatch Successfully Registered!</strong>
                <span>Your tracking reference is: <strong>#{{ trackingId }}</strong>. Our secretariat responds within 48 hours.</span>
              </div>
              <button @click="submitted = false" class="text-base font-bold ml-4">✕</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

useHead({
  title: 'Citizen Direct Access Desk'
})

const submitted = ref(false)
const trackingId = ref('')

const form = reactive({
  name: '',
  phone: '',
  location: '',
  category: 'Constituency Welfare & Healthcare',
  message: ''
})

const handleSubmit = () => {
  trackingId.value = `DAT-${Math.floor(100000 + Math.random() * 900000)}`
  submitted.value = true
  form.name = ''
  form.phone = ''
  form.location = ''
  form.message = ''
}
</script>
