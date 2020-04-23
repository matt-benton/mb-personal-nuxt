export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Matt Benton | Web Developer',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'I am a full stack web developer from Birmingham, Alabama.  I create web applications that focus on clean interfaces, intuitive user experiences and reliability.',
            },
        ],
        link: [
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
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@/assets/scss/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/vue-lazyload', '~/plugins/cloudinary-vue'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
}
