import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import AddProduct from '../components/AddProduct.vue'
import ProductList from '../components/ProductList.vue'
import AddColumn from '../components/AddColumn.vue'
import ColumnList from '../components/ColumnList.vue'
import _404 from '../components/_404.vue'
Vue.use(Router)

let router = new Router({
  routes: [
    {
        path: '/login',
        name: 'Login',
        component: resolve => require(['../components/Login'],resolve)
    },
    {   //栏目管理
        path:'/index',
        navShow:true,
        component: resolve => require(['../components/Index'],resolve),
        navName:'栏目管理',
        children:[
            // {
            //     path:'/addColumn',
            //     navShow:true,
            //     name:'AddColumn',
            //     navName:'添加栏目',
            //     component: resolve => require(['../components/AddColumn'],resolve)
            // },
            {
                path:'/columnList',
                navShow:true,
                name:'ColumnList',
                navName:'栏目列表',
                component: resolve => require(['../components/ColumnList'],resolve)
            },
        ]
    },
    {   //商品管理
        path:'/index',
        navShow:true,
        component: resolve => require(['../components/Index'],resolve),
        navName:'商品管理',
        children:[
            // {
            //     path:'/addProduct',
            //     navShow:true,
            //     name:'AddProduct',
            //     navName:'添加商品',
            //     component: resolve => require(['../components/AddProduct'],resolve)
            // },
            {
                path:'/productList',
                navShow:true,
                name:'ProductList',
                navName:'商品列表',
                component: resolve => require(['../components/ProductList'],resolve)
            },
        ]
    },
    {   //系统设置
        path:'/index',
        navShow:true,
        component: resolve => require(['../components/Index'],resolve),
        navName:'系统设置',
        children:[
            {
                path:'',
                navShow:true,
                noRoute:true,
                navName:'主题色',
            },
        ]
    },
    {   //404
        path:'/404',
        name:'404',
        component: resolve => require(['../components/_404'],resolve)
    },
    {
        path: '',
        redirect: '/login',
    },
    {
        path: '*',
        redirect: '/404',
    },
  ]
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
    next();
  }else if(!sessionStorage.user){
    console.log("无登录用户")
    next({ path: '/login' })
  }else{
    next();
  }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

export default router