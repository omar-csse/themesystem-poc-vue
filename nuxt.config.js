export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'themesystem',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        script: [{
                src: '/jquery-3.5.1.slim.min.js'
            },
            {
                src: '/popper.min.js'
            },
            {
                src: '/bootstrap.min.js'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: '/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'codemirror/lib/codemirror.css'
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'codemirror/lib/codemirror.css',
        'codemirror/theme/base16-dark.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [{
        src: '~plugins/nuxt-codemirror-plugin',
        ssr: false
    }],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
