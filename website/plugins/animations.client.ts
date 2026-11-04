import { nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  gsap.registerPlugin(ScrollTrigger)

  let ctx: gsap.Context | null = null
  let isInitialLoad = true

  const initAnimations = () => {
    // Clean up previous page's GSAP tweens & ScrollTriggers before re-initializing
    if (ctx) {
      ctx.revert()
      ctx = null
    }

    ctx = gsap.context(() => {
      // ── 0. Page Masthead Hero Stagger & Scroll Parallax (.gsap-hero-stagger) ─
      const heroHeaders = gsap.utils.toArray<HTMLElement>('.gsap-hero-stagger')
      heroHeaders.forEach((header) => {
        const els = header.querySelectorAll<HTMLElement>('.hero-el')
        if (els.length && header.dataset.heroAnimated !== 'true') {
          header.dataset.heroAnimated = 'true'
          gsap.fromTo(
            els,
            {
              opacity: 0,
              y: 36,
              rotationX: 10,
              scale: 0.98,
              transformPerspective: 1100,
              transformOrigin: '0% 100%'
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 1.05,
              stagger: 0.1,
              ease: 'expo.out',
              clearProps: 'rotationX,scale,transformPerspective,transformOrigin'
            }
          )
        }

        // Subtle scroll-reactive parallax as user scrolls past the page masthead
        gsap.fromTo(
          header,
          { y: 0 },
          {
            y: -26,
            ease: 'none',
            scrollTrigger: {
              trigger: header,
              start: 'top top+=100',
              end: 'bottom top',
              scrub: 0.7
            }
          }
        )
      })

      // ── 1. Viewport-Entry 3D Editorial Reveals (.reveal-3d) ────────────────
      const elements3D = gsap.utils.toArray<HTMLElement>('.reveal-3d')
      elements3D.forEach((el, index) => {
        if (el.dataset.revealAnimated === 'true') return
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 52,
            rotationX: 10,
            scale: 0.97,
            transformPerspective: 1100,
            transformOrigin: '50% 100%'
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.15,
            delay: (index % 2) * 0.08,
            ease: 'expo.out',
            clearProps: 'rotationX,scale,transformPerspective,transformOrigin',
            onStart: () => {
              el.dataset.revealAnimated = 'true'
            },
            scrollTrigger: {
              trigger: el,
              start: 'top 89%',
               once: true
            }
          }
        )
      })

      // ── 2. Staggered Card & Element Grids (.stagger-parent -> .stagger-item)
      const staggerContainers = gsap.utils.toArray<HTMLElement>('.stagger-parent')
      staggerContainers.forEach((container) => {
        if (container.dataset.staggerAnimated === 'true') return
        const items = container.querySelectorAll<HTMLElement>('.stagger-item')
        if (!items.length) return

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 54,
            rotationX: 9,
            scale: 0.96,
            transformPerspective: 1100,
            transformOrigin: '50% 100%'
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.1,
            ease: 'expo.out',
            clearProps: 'rotationX,scale,transformPerspective,transformOrigin',
            onStart: () => {
              container.dataset.staggerAnimated = 'true'
            },
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              once: true
            }
          }
        )
      })

      // ── 3. Scroll-Reactive Hero Card Parallax & Depth (#hero-card-frame) ───
      const heroFrame = document.querySelector<HTMLElement>('#hero-card-frame')
      if (heroFrame) {
        const heroImages = heroFrame.querySelectorAll<HTMLElement>('img, svg')
        if (heroImages.length) {
          gsap.fromTo(
            heroImages,
            { scale: 1, yPercent: 0 },
            {
              scale: 1.12,
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: heroFrame,
                start: 'top top+=120',
                end: 'bottom top',
                scrub: 0.7
              }
            }
          )
        }

        gsap.fromTo(
          heroFrame,
          { scale: 1, y: 0 },
          {
            scale: 0.965,
            y: 28,
            ease: 'none',
            scrollTrigger: {
              trigger: heroFrame,
              start: 'top top+=120',
              end: 'bottom top',
              scrub: 0.7
            }
          }
        )
      }

      // ── 4. Scroll-Scrubbed Timeline Spine (.gsap-progress-spine) ───────────
      const spines = gsap.utils.toArray<HTMLElement>('.gsap-progress-spine')
      spines.forEach((spine) => {
        const track = spine.closest('.timeline-track') || spine.parentElement
        gsap.fromTo(
          spine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: track,
              start: 'top 70%',
              end: 'bottom 45%',
              scrub: 0.5
            }
          }
        )
      })

      // ── 5. Scroll-Reactive Milestone & Feature Cards (.gsap-scrub-card) ────
      const scrubCards = gsap.utils.toArray<HTMLElement>('.gsap-scrub-card')
      scrubCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            rotationX: 10,
            scale: 0.96,
            transformPerspective: 1100
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 89%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // ── 6. Scroll-Scrubbed Parallax Images (.gsap-parallax-img) ────────────
      const parallaxImgs = gsap.utils.toArray<HTMLElement>('.gsap-parallax-img')
      parallaxImgs.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.1, yPercent: -5 },
          {
            scale: 1,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement || img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8
            }
          }
        )
      })

      // ── 7. Animated Stat Number Rollers (.stat-counter) ────────────────────
      const counters = gsap.utils.toArray<HTMLElement>('.stat-counter')
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0')
        const suffix = counter.getAttribute('data-suffix') || ''
        const prefix = counter.getAttribute('data-prefix') || ''
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 2.0,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            counter.textContent = `${prefix}${Math.floor(obj.val)}${suffix}`
          }
        })
      })

      // ── 8. Footer Choreography (.gsap-footer) ──────────────────────────────
      const footer = document.querySelector<HTMLElement>('.gsap-footer')
      if (footer) {
        const specularLine = footer.querySelector<HTMLElement>('.gsap-line-center')
        if (specularLine) {
          gsap.fromTo(
            specularLine,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1.5,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: footer,
                start: 'top 92%',
                toggleActions: 'play none none none'
              }
            }
          )
        }

        const linkLists = footer.querySelectorAll<HTMLElement>('.footer-links-list')
        linkLists.forEach((list) => {
          const links = list.querySelectorAll<HTMLElement>('.footer-link-item')
          if (links.length) {
            gsap.fromTo(
              links,
              { opacity: 0, x: -16 },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                stagger: 0.06,
                ease: 'expo.out',
                scrollTrigger: {
                  trigger: list,
                  start: 'top 92%',
                  toggleActions: 'play none none none'
                }
              }
            )
          }
        })

        const bottomBar = footer.querySelector<HTMLElement>('.footer-bottom-bar')
        if (bottomBar) {
          gsap.fromTo(
            bottomBar,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: bottomBar,
                start: 'top 96%',
                toggleActions: 'play none none none'
              }
            }
          )
        }
      }

      // ── 9. 60fps Magnetic 3D Card Tilt (.tilt-3d) ──────────────────────────
      // Only enable mouse-driven 3D tilt on devices with a fine hover pointer
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const tiltCards = gsap.utils.toArray<HTMLElement>('.tilt-3d')
        tiltCards.forEach((card) => {
          gsap.set(card, { transformPerspective: 1100 })

          const xTo = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power3.out' })
          const yTo = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power3.out' })
          const liftTo = gsap.quickTo(card, 'y', { duration: 0.45, ease: 'power3.out' })

          const onMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const relX = (e.clientX - rect.left) / rect.width - 0.5
            const relY = (e.clientY - rect.top) / rect.height - 0.5

            xTo(relX * 7)
            yTo(relY * -7)
            liftTo(-5)
          }

          const onLeave = () => {
            xTo(0)
            yTo(0)
            liftTo(0)
          }

          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
        })
      }
    })

    ScrollTrigger.refresh()
  }

  // Clean up previous page's animations when route leave starts
  nuxtApp.hook('page:start', () => {
    if (!isInitialLoad && ctx) {
      ctx.revert()
      ctx = null
    }
  })

  // Run once on initial mount
  nuxtApp.hook('app:mounted', () => {
    nextTick(() => {
      initAnimations()
      isInitialLoad = false
    })
  })

  // Run once when a new page mounts during client-side navigation
  nuxtApp.hook('page:finish', () => {
    if (isInitialLoad) return
    nextTick(() => {
      initAnimations()
    })
  })

  // Only refresh ScrollTrigger positions after CSS transition settles (never re-trigger entry animations)
  nuxtApp.hook('page:transition:finish', () => {
    ScrollTrigger.refresh()
  })
})
