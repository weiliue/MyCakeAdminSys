import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/components/Home"
import Index from "@/components/Index"
import TagPage from "@/components/TagPage"
import SortPage from "@/components/SortPage"
import Cake from "@/sortViews/Cake"
import Icecream from "@/sortViews/Icecream"
import Coffee from "@/sortViews/Coffee"
import Bread from "@/sortViews/Bread"
import ProductInfo from "@/components/ProductInfo"
import IceInfo from "@/components/IceInfo"
import BreInfo from "@/components/BreInfo"
import CoffInfo from "@/components/CoffInfo"
import ShopCart from "@/components/ShopCart"

// msf
import Mine from '@/view/Mine'
import Login from '@/view/Login'
import Register from '@/view/Register'
import SetPage from '@/view/SetPage'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
			path: '/',
			name: "Home",
			component: Home,
			redirect: "/index",
			children: [{
					path: '/index',
					name: "Index",
					component: Index
				},
				{
					path: '/tagpage',
					name: "TagPage",
					component: TagPage
				},
				{
					path: '/sortpage',
					name: "SortPage",
					component: SortPage,
					redirect: "/cake",
					children: [{
							path: '/cake',
							name: "Cake",
							component: Cake
						},
						{
							path: '/icecream',
							name: "Icecream",
							component: Icecream
						},
						{
							path: '/coffee',
							name: "Coffee",
							component: Coffee
						}, {
							path: '/bread',
							name: "Bread",
							component: Bread
						}
					]
				},
				{
					path: '/shopcart',
					name: "ShopCart",
					component: ShopCart
				},
				{
					path: '/mine',
					name: 'Mine',
					component: Mine
				},
				{
					path: '/login',
					name: 'Login',
					component: Login
				},
				{
					path: '/register',
					name: 'Register',
					component: Register
				},
				{
					path: '/setpage',
					name: 'SetPage',
					component: SetPage
				}
			]
		},
		{
			path: '/productinfo',
			name: "ProductInfo",
			component: ProductInfo
		},
		{
			path: '/iceinfo',
			name: "IceInfo",
			component: IceInfo
		},
		{
			path: '/breinfo',
			name: "BreInfo",
			component: BreInfo
		},
		{
			path: '/coffinfo',
			name: "CoffInfo",
			component: CoffInfo
		}
	]
})
