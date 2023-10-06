// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    /*
    app: {
        head: {
            title:'LD Legenda Kozi Square Apartment Kuching for Rent & Sale | LD Legenda @ Kozi Square',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Discover Bridgelux Homes, a Bumi Lot where it is only available for bumiputera Sarawakians located at Lot 9680, Kota Samarahan near Batang Samarahan Bridge. Bridgelux Homes sits on a land size around 1990 sqft per unit and comprises of 3 bedrooom and 2 bedroom.' },
                { hid: 'keywords', name: 'keywords', content: 'Bridgelux Homes, Samarahan Residence, New Property Launch' },
                { name: 'format-detection', content: 'telephone=no' },
              ],
            script: [
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                  integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
                  crossorigin: 'anonymous',
                },
              ],
        }
    },
    runtimeConfig: {
        email: '', // can be overridden by NUXT_API_SECRET environment variable
        title:'LD Legenda Kozi Square Apartment Kuching for Rent & Sale | LD Legenda @ Kozi Square',
        emailUser: '',
    },
    */
   app:{
        head: {
            meta: [
            { hid: 'keywords', name: 'keywords', content: 'property, homes, real estate, for sale' }
            ]
        }
   }
    
})
