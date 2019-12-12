<template>
	<div>
		<mHeader></mHeader> 
		<van-tabs v-model="activeName" animated >
		  <van-tab v-for="item in sortNav" :name="item.name" :title="item.title" :to="'/' + item.name">
		    <div class="list-pro-box">
		    	<!-- <h2 class="list-pro-title">{{item.title}}</h2> -->
				<router-view></router-view>
		    </div>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import mHeader from "./mHeader"
	export default {
		name:"SortPage",
		components: {
			mHeader
		},
		data() {
			return {
				activeName: 'cake',
				sortNav:[{
					title:"蛋糕",
					name:'cake'
				},{
					title: '冰淇淋',
					name: 'icecream'
				},{
					title: '咖啡下午茶',
					name: 'coffee'
				},{
					title: '面包',
					name: 'bread'
				}],
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.list-pro-box{
		width: 100%;
		color: #442818;
		font-size: 0.75rem;
	}
	.list-pro-title{
		width: 100%;
		height: 2.9375rem;
		font-size: 0.9375rem;
		text-align: center;
		background-color: rgba(213,191,167,0.1);
		padding: 0.5rem 0;
	}
</style>
