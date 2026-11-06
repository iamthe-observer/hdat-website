<template>
  <div class="inline-flex items-center justify-center shrink-0" :class="wrapperClass">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full select-none"
    >
      <defs>
        <!-- Polished Imperial Gold -->
        <linearGradient :id="`gold-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFDF0" />
          <stop offset="15%" stop-color="#F5D77F" />
          <stop offset="35%" stop-color="#D4AF37" />
          <stop offset="65%" stop-color="#996515" />
          <stop offset="85%" stop-color="#E5C158" />
          <stop offset="100%" stop-color="#FFF5D2" />
        </linearGradient>

        <linearGradient :id="`purple-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A855F7" />
          <stop offset="50%" stop-color="#7C3AED" />
          <stop offset="100%" stop-color="#4C1D95" />
        </linearGradient>
      </defs>

      <!-- Optional Circular Shield Frame -->
      <circle
        v-if="variant === 'seal' || variant === 'badge'"
        cx="256"
        cy="256"
        r="246"
        :stroke="colorMode === 'white' ? '#FAF8F5' : colorMode === 'purple' ? `url(#purple-${uid})` : `url(#gold-${uid})`"
        stroke-width="2"
        stroke-opacity="0.4"
        fill="none"
      />
      <circle
        v-if="variant === 'seal'"
        cx="256"
        cy="256"
        r="236"
        :stroke="colorMode === 'white' ? '#FAF8F5' : colorMode === 'purple' ? `url(#purple-${uid})` : `url(#gold-${uid})`"
        stroke-width="1"
        stroke-opacity="0.3"
        stroke-dasharray="3 6"
        fill="none"
      />

      <!-- Sovereign DAT Monogram Glyph Group (Center Normalized) -->
      <g transform="translate(256, 264) scale(0.66) translate(-600, -475)">
        <!-- Black Star of Ghana at Apex -->
        <g transform="translate(600, 140)">
          <polygon
            points="0,-24 6,-7 24,-7 10,4 15,22 0,11 -15,22 -10,4 -24,-7 -6,-7"
            :fill="colorMode === 'white' ? '#D4AF37' : colorMode === 'purple' ? '#D4AF37' : `url(#gold-${uid})`"
          />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>

        <!-- 1. LETTER "D" -->
        <path
          d="M 285 315 L 345 315 L 345 665 L 285 665 L 285 680 L 395 680 L 395 665 L 365 665 L 365 330 L 395 330 L 395 315 L 285 315 Z"
          :fill="fillColor"
        />
        <path
          d="M 365 315 C 490 315, 530 390, 530 495 C 530 600, 490 680, 365 680 L 365 655 C 465 655, 498 585, 498 495 C 498 405, 465 340, 365 340 Z"
          :fill="fillColor"
        />

        <!-- 2. LETTER "A" -->
        <polygon points="595,232 600,210 605,232 460,680 436,680" :fill="fillColor" />
        <polygon points="590,210 626,210 758,665 788,665 788,680 710,680 710,665 730,665 636,320 590,210" :fill="fillColor" />
        <path d="M 574 210 L 626 210 L 600 192 Z" :fill="fillColor" />
        <rect x="475" y="525" width="220" height="15" rx="1.5" :fill="fillColor" />

        <!-- 3. LETTER "T" -->
        <path
          d="M 680 315 L 915 315 L 915 352 L 902 352 L 902 332 L 816 332 L 816 665 L 846 665 L 846 680 L 760 680 L 760 665 L 790 665 L 790 332 L 693 332 L 693 352 L 680 352 Z"
          :fill="fillColor"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: number | string
    variant?: 'mark' | 'seal' | 'badge'
    colorMode?: 'gold' | 'white' | 'purple' | 'current'
    wrapperClass?: string
  }>(),
  {
    size: 40,
    variant: 'mark',
    colorMode: 'gold',
    wrapperClass: ''
  }
)

const uid = Math.random().toString(36).substring(2, 8)

const fillColor = computed(() => {
  if (props.colorMode === 'white') return '#FAF8F5'
  if (props.colorMode === 'purple') return `url(#purple-${uid})`
  if (props.colorMode === 'current') return 'currentColor'
  return `url(#gold-${uid})`
})
</script>
