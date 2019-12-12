<template>
	<div>
		<router-view></router-view>
		<van-tabbar v-model="active" :route="true" :fixed="true" :z-index="1100">
			<van-tabbar-item to="/index"> 
				<span>首页</span>
				<img slot="icon" slot-scope="props" :src="props.active ? icon.indexActive : icon.indexNormal">
			</van-tabbar-item>
			<van-tabbar-item to="/cake">
				<span>分类</span>
				<img slot="icon" slot-scope="props" :src="props.active ? icon.sortActive : icon.sortNormal">
			</van-tabbar-item>
			<van-tabbar-item to="/shopcart">
				<span>购物车</span>
				<img slot="icon" slot-scope="props" :src="props.active ? icon.cartActive : icon.cartNormal">
			</van-tabbar-item>
			<van-tabbar-item to="/mine">
				<span>个人中心</span>
				<img slot="icon" slot-scope="props" :src="props.active ? icon.personalActive : icon.personalNormal">
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import indexNormal from "../assets/indexNormal.png"
	import indexActive from "../assets/indexActive.png"
	import sortActive from "../assets/sortActive.png"
	import sortNormal from "../assets/sortNormal.png"
	import personalActive from "../assets/personalActive.png"
	import personalNormal from "../assets/personalNormal.png"
	import cartActive from "../assets/cartActive.png"
	import cartNormal from "../assets/cartNormal.png"
	export default {
		name: "Home",
		data() {
			return {
				active: 0,
				icon: {
					indexNormal,
					indexActive,
					sortActive,
					sortNormal,
					personalActive,
					personalNormal,
					cartActive,
					cartNormal
				}
			}
		}
	}
</script>

<style scoped>
	.van-tabbar{
		width: 23.4375rem;
	}
	.van-tabbar-item--active {
	    color: #d81e06;
	}
	.space{
		width: 100%;
		height: 3rem;
	}
</style>
