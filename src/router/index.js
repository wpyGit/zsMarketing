import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import AddProduct from '../components/AddProduct.vue'
import ProductList from '../components/ProductList.vue'
import AddWindowTpl from '../components/AddWindowTpl.vue'
import WindowTplList from '../components/WindowTplList.vue'

import _404 from '../components/_404.vue'
Vue.use(Router)

let router = new Router({
  routes: [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        redirect: '/login',
    },
    {   //商品管理
        path:'/index',
        navShow:true,
        component:Index,
        navName:'商品管理',
        children:[
            {
                path:'/addProduct',
                navShow:true,
                name:'AddProduct',
                navName:'添加商品',
                component:AddProduct
            },
            {
                path:'/productList',
                navShow:true,
                name:'ProductList',
                navName:'商品列表',
                component:ProductList
            },
        ]
    },
    {   //专柜管理
        path:'/index',
        navShow:true,
        component:Index,
        navName:'专柜管理',
        children:[
            {
                path:'/addWindowTpl',
                navShow:true,
                name:'AddWindowTpl',
                navName:'添加橱窗模板',
                component:AddWindowTpl
            },
            {
                path:'/windowTplList',
                navShow:true,
                name:'WindowTplList',
                navName:'橱窗模板列表',
                component:WindowTplList
            },
        ]
    },




    {   //404
        path:'/404',
        name:'404',
        component:_404
    }
    // {
    //     path:'/index',
    //     navShow:true,
    //     component:Index,
    //     navName:'系统设置',
    //     children:[
    //         {
    //             path:'/editPwd',
    //             navShow:true,
    //             navName:'修改密码',
    //             component:EditPwd
    //         },
    //     ]
    // },
    // {
    //     path:'/index',
    //     navShow:true,
    //     oneLevel:true,
    //     component:Index,
    //     navName:'1级目录',
    //     children:[
    //         {
    //             path:'/oneLevel',
    //             navShow:true,
    //             navName:'一级目录',
    //             component:CommodityList
    //         },
    //     ]
    // },
  ]
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  console.log(to)
  next()
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }else if(!sessionStorage.user){
    console.log("无登录用户")
    next({ path: '/login' })
  }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

export default router