// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Hon. Dorcas Affo-Toffey | Member of Parliament & Deputy Minister of Transport',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Official digital platform of Hon. Dorcas Affo-Toffey, Member of Parliament for Jomoro Constituency and Deputy Minister of Transport, Republic of Ghana.'
        },
        { name: 'theme-color', content: '#FAF8F5' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap']
  }
})
