export default defineNuxtConfig({
  mode: 'universal',

  /*
   ** Headers of the page
   */
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Matt Benton | Laravel Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'I am a full stack web developer from Birmingham, Alabama.  I create web applications using Laravel and Vue that focus on clean interfaces, intuitive user experiences and reliability.',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Muli:wght@300;400;700&display=swap',
        },
        {
          href:
            'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;1,400;1,500&display=swap',
          rel: 'stylesheet',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/favicons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/img/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/img/favicons/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/img/favicons/site.webmanifest' },
        { rel: 'mask-icon', href: '/img/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'shortcut icon', href: '/img/favicons/favicon.ico' },
      ],
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5ed0fa' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', "@nuxtjs/cloudinary", 'nuxt-lazy-load'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  content: {
    highlight: {
      theme: {
        default: 'nord',
      },
      langs: ['sql', 'php', 'javascript', 'css', 'bash', 'html'],
    },
  },

  lazyLoad: {
    images: false,
    videos: false,
    audios: false,
    iframes: false,
    native: false,
    directiveOnly: true,
    
    // Default image must be in the public folder
    // defaultImage: '/images/default-image.jpg',
  
    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    
    observerConfig: {
      // See IntersectionObserver documentation
    }
  },

  compatibilityDate: '2024-12-23',
})
