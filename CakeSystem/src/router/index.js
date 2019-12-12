import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '@/components/Home'
import ProductInfor from '@/components/ProductInfor'
import Order from '@/components/Order'
import OrderInfor from '@/components/OrderInfor'
import Update from '@/components/Update'
import Add from '@/components/Add'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Account from '@/components/Account'
import Search from '@/components/Search'
import Bread from '@/components/Bread'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/home",
            name: "Home",
            component: Home,
            children: [
                {
                    path: "/productinfor",
                    name: "ProductInfor",
                    component: ProductInfor
                },
                {
                    path: "/orderinfor",
                    name: "OrderInfor",
                    component: OrderInfor
                },
                {
                    path: "/update",
                    name: "Update",
                    component: Update
                },
                {
                    path: "/add",
                    name: "Add",
                    component: Add
                },
                {
                    path: "/search",
                    name: "Search",
                    component: Search
                },
                {
                    path: "/bread",
                    name: "Bread",
                    component: Bread
                }
            ],
            redirect: "/productinfor"
        },
        {
            path: "/order",
            name: "Order",
            component: Order
        },
        {
            path: "/",
            name: "Login",
            component: Login,
            children: [
                {
                    path: "/register",
                    name: "Register",
                    component: Register
                },
                {
                    path: "/account",
                    name: "Account",
                    component: Account
                }
            ],
            redirect: "/account"
        }
    ]
})