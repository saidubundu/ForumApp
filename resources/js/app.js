/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuetify)

Vue.component('vue-simplemde', VueSimplemde)
import User from './Helpers/User'
import Exception from "./Helpers/Exception";
window.Exception  = Exception
window.User = User
window.EventBus = new Vue();





/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-home', require('./components/AppHome').default);
Vue.component('tool-bar', require('./components/ToolBar').default);
Vue.component('login', require('./components/Auth/Login').default);
Vue.component('forum', require('./components/forum/Forum').default);
Vue.component('read-question', require('./components/forum/ReadQuestion').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import router from './Router/route'
const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});
