require('./bootstrap');

import Index from './index.vue';
import router from './router';
import Router from 'vue-router';
Vue.use(Router);

const app = new Vue({
    el: '#app',
    components : {Index},
    router,
});
