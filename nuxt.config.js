import { find, set } from 'lodash'
const path = require('path')

module.exports = {
  env: {
    SITE_URL: '',
    API_ROOT: ''
  },
  buildDir: 'dist',
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  debug: true,
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FFFFFF' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      let rootDir = this.buildContext._builder.options.rootDir

      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // Remove SVG from default rules
      // config.module.rules.forEach((rule) => {
      //   if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp|avif)$/i') {
      //     // rule.test = /\.(png|jpe?g|gif)$/
      //     // rule.exclude = [path.join(rootDir, 'assets/icons'), path.join(rootDir, 'assets/svg')]
      //     rule.include = [path.join(rootDir, 'assets/images'), path.join(rootDir, 'node_modules')]
      //     rule.use[0].options.limit = 0
      //     rule.use[0].options.esModule = false
      //   }
      // })

      // Add svg inline loader configuration
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      //   include: [path.join(rootDir, 'assets/icons')]
      // })

      // config.module.rules.push({
      //   test: /\.svg$/,
      //   loader: 'file-loader',
      //   include: [path.join(rootDir, 'assets/fonts'), path.join(rootDir, 'node_modules')]
      // })

      config.module.rules.push({
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        include: [path.join(rootDir, 'assets/images')],
        options: {
          esModule: false
        }
      })

      // Aliases
      config.resolve.alias['@src'] = path.join(rootDir, '')
      config.resolve.alias['@components'] = path.join(rootDir, 'components')
      config.resolve.alias['@layouts'] = path.join(rootDir, 'layouts')
      config.resolve.alias['@pages'] = path.join(rootDir, 'pages')
      config.resolve.alias['@store'] = path.join(rootDir, 'store')
      config.resolve.alias['@modules'] = path.join(rootDir, 'modules')
      config.resolve.alias['@utils'] = path.join(rootDir, 'utils')
      config.resolve.alias['@storeModules'] = path.join(rootDir, 'storeModules')
      config.resolve.alias['@api'] = path.join(rootDir, 'api')
      config.resolve.alias['@mixins'] = path.join(rootDir, 'mixins')
      config.resolve.alias['@plugins'] = path.join(rootDir, 'plugins')
      config.resolve.alias['@assets'] = path.join(rootDir, 'assets')
    }
    // babel: {
    //   presets: ['@babel/preset-env']
    // }
  },
  presets: [
    ['@babel/env', { modules: false }]
  ],
  modules: [
    'nuxt-vuex-router-sync',
    '@nuxtjs/device',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/sentry'
  ],
  sentry: {
    dsn: '',
    config: {},
  },
  // gtm: {
  //   id: 'GTM-TM2XFKS',
  //   enabled: true
  // },
  css: [
    // { src: '@assets/styles/responsive.css', lang: 'css' }
    // '@assets/styles/main.scss'
  ],
  plugins: [
    '@plugins/bus',
    '@plugins/index-mixin',
    '@plugins/directives',
    '@plugins/cookies',
    { src: '@plugins/directives', ssr: false },
    { src: '@plugins/swiper', ssr: false },
    '@plugins/axios',
    { src: '@plugins/vuex-persist', ssr: true },
    '@plugins/global-components',
    { src: '@plugins/vuelidate', ssr: true }
    // '@plugins/logger',
  ],
  router: {
    // linkActiveClass: 'active',
    // middleware: ['common'],
    extendRoutes (routes, resolve) {
      let updateRoute = (name, cb) => {
        let route = find(routes, route => route.name === name)
        cb(route)
      }

      // updateRoute('menu', (route) => {
      //   route.path = '/menu/:category/:subcategory?'
      // })

      // updateRoute('success', (route) => {
      //   route.path = '/success/:type'
      //   set(route, 'meta.hideSubheader', true)
      // })

      // updateRoute('404', (route) => {
      //   route.path = '*'
      //   set(route, 'meta.hideSubheader', true)
      // })
    }
  },
  cache: false
}

