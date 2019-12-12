import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/components/Home"
import Index from "@/components/views/Index"
import CountrySend from "@/components/views/CountrySend"
import EnterpriseZones from "@/components/views/EnterpriseZones"
import Sort from "@/components/views/Sort"

//bl
import Login from '@/blcomponents/Login'
import Register from '@/blcomponents/Register'
import Account from '@/loginViews/Account'
import MessageCode from '@/loginViews/MessageCode'
import ShopCart from '@/blcomponents/ShopCart'
import ProductInfo from '@/blcomponents/ProductInfo'
import ProductInfoBre from '@/blcomponents/ProductInfoBre'
import ProductInfoCoff from '@/blcomponents/ProductInfoCoff'
import ProductInfoIce from '@/blcomponents/ProductInfoIce'
import CheckOut from '@/blcomponents/CheckOut'
import Spec1 from '@/specs/Spec1'
import Spec2 from '@/specs/Spec2'
import Spec3 from '@/specs/Spec3'
import Spec4 from '@/specs/Spec4'

// msf
import Cake from '@/msfcomponets/Cake'
import IceCream from '@/msfcomponets/IceCream'
import Coffee from '@/msfcomponets/Coffee'
import Bread from '@/msfcomponets/Bread'
import Design from '@/msfcomponets/Design'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/index",
          name: "Index",
          component: Index
        },
        {
          path: "/countrysend",
          name: "CountrySend",
          component: CountrySend
        },
        {
          path: "/enterprisezones",
          name: "EnterpriseZones",
          component: EnterpriseZones
        },
        {
          path: "/sort",
          name: "Sort",
          component: Sort
        },
        { //msf
          path: '/cake',
          name: 'Cake',
          component: Cake
        },
        {
          path: '/iceCream',
          name: 'IceCream',
          component: IceCream
        },
        {
          path: '/coffee',
          name: 'Coffee',
          component: Coffee
        },
        {
          path: '/bread',
          name: 'Bread',
          component: Bread
        },
        {
          path: '/design',
          name: 'Design',
          component: Design
        },
        {//bl
          path: "/login",
          name: "Login",
          component: Login,
          redirect: "/account",
          children: [
            {
              path: "/account",
              name: "Account",
              component: Account
            },
            {
              path: "/messagecode",
              name: "MessageCode",
              component: MessageCode
            }
          ]
        },
        {
          path: "/register",
          name: "Register",
          component: Register
        },
        {
          path: "/shopcart",
          name: "ShopCart",
          component: ShopCart
        },
        {
          path: "/checkout",
          name: "CheckOut",
          component: CheckOut
        },
        {
          path: "/productinfo",
          name: "ProductInfo",
          component: ProductInfo,
          children: [
            {
              path: "/spec1",
              name: "Spec1",
              component: Spec1,
            },
            {
              path: "/spec2",
              name: "Spec2",
              component: Spec2,
            },
            {
              path: "/spec3",
              name: "Spec3",
              component: Spec3,
            },
            {
              path: "/spec4",
              name: "Spec4",
              component: Spec4,
            }
          ],
          redirect: "/spec1"
        },
        {
          path: "/productinfobre",
          name: "ProductInfoBre",
          component: ProductInfoBre,
          children: [
            {
              path: "/spec1",
              name: "Spec1",
              component: Spec1,
            }
          ]
        },
        {
          path: "/productinfocoff",
          name: "ProductInfoCoff",
          component: ProductInfoCoff,
          children: [
            {
              path: "/spec1",
              name: "Spec1",
              component: Spec1,
            } 
          ]
        },
        {
          path: "/productinfoice",
          name: "ProductInfoIce",
          component: ProductInfoIce,
          children: [
            {
              path: "/spec1",
              name: "Spec1",
              component: Spec1,
            } 
          ]
        }
      ],
      redirect: "/index"
    }
  ]
})