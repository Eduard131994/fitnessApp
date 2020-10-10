require('./bootstrap');

import router from './router';
import Router from 'vue-router';
import Ripple from 'vue-ripple-directive';
import toastrMixin from './shared/functions/toastr';


Vue.use(Router);
Vue.directive('ripple', Ripple);
Vue.mixin(toastrMixin);



import TheHeader from './components/TheHeader';

const app = new Vue({
    el: '#app',
    components : {TheHeader},
    router
});
