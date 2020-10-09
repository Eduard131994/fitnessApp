const { default: VueRouter } = require("vue-router");



function page(path) {
    return () => import(`./pages/${path}.vue`).then(m => m.default || m);
}



const routes = [
    { 
        name : 'home',
        path: '/', 
        component: page('Home') 
    },
    { 
        name : 'foods',
        path: '/foods', 
        component: page('Foods') 
    },
    { 
        name : 'plan',
        path: '/plan', 
        component: page('Plan') 
    },
    { 
        name : 'recepies',
        path: '/recepies', 
        component: page('Recepies') 
    },
  ]



export default new VueRouter({routes, mode: 'history'});