<template>
	<div class="tag-container">
		<mHeader></mHeader>
		<img src="https://m.21cake.com/upload/images/7e0b37d9030d72f029b1feb97cdd667f.jpg" alt="">
		<h2>{{tagTitle}}</h2>
		<div class="pro-list">
			<div class="pro-item" v-for="item in proList">
				<img :src="item.pro_img" alt=""  @click="jumpToProductInfo(item.id,item.pro_name)">
				<p class="pro-name">{{item.pro_name}}</p>
				<div class="pro-bottom">
					<span class="pro-price">{{item.pro_price}}</span>
					<img src="https://static.21cake.com//themes/wap/img/list-cart.png" alt="" @click="addToCart(item.id,item.pro_name)">
				</div>
			</div>
		</div>
		<div v-if="flag&&isShow" class="add-success-msg">
		    <span @click="hiddenBox()">成功添加购物车</span>
		</div>
	</div>
</template>

<script>
	import mHeader from "./mHeader"
	export default {
		name: "TagPage",
		components: {
			mHeader
		},
		data(){
			return{
				tagTitle:'',
				proList:[],
				flag:false,
				isShow:false
			}
		},
		methods:{
			hiddenBox(){
				this.isShow = false;
			},
			jumpToProductInfo(id,pro_name){
				this.$router.push({path:"/productinfo",query:{proid:id,proname:pro_name}})
			},
			addToCart(produId, proName) {
			    // console.log(produId)
				this.isShow = true;
			    if (localStorage.getItem("isLogin")) {
			        this.flag = true;
			        let that = this;
			        let userId = localStorage.getItem("userID");
			        //发送ajax请求，查看购物车是否存在数据
			        this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`)     //查询购物车的商品
			            .then((response) => {
			                let result = response.data;
			                // console.log(result)
			
			                if (result.msg == 0) {
			                    that.$http.get(`http://localhost:8888/insertCartInfor?id=${produId}&&userId=${userId}`)
			                        .then((response) => {
			                            console.log(response.data)
			                        })
			                        .cath(function (error) {
			                            console.log(error);
			                        });
			                }
			                else if (result.msg == 1) {
			                    if (result.cartData[0].name == proName) {
			                        result.cartData[0].count++;
			                        // console.log(result.cartData[0].count)
			                        that.$http.get(`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
			                            .then((response) => {
			                                // console.log(response.data)
			                            })
			                            .catch(function (error) {
			                                console.log(error);
			                            });
			                    }
			                }
			                else {
			                    alert("数据错误");
			                }
			            })
			            .catch(function (error) {
			                console.log(error);
			            });
			    }
			    else {
			        alert("亲，您还没登录哦~~");
			    }
			
			}
		},
		mounted() {
			// 根据分类id获取分类的标题名
			this.$http.get(`http://localhost:8888/queryTagInfor?id=${this.$route.query.tag_id}`)
			.then((response)=>{
				// console.log(response.data);
				this.tagTitle = response.data[0].tag_title;
			})
			// 按分类id查询商品
			this.$http.get(`http://localhost:8888/querySortProByTagId?id=${this.$route.query.tag_id}`)
				.then((response) => {
					// console.log(response.data);
					this.proList = response.data;
				}).catch(function(error) {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.tag-container {
		width: 100%;
		color: #442818;
		font-size: 0.75rem;
	}

	.tag-container>img {
		width: 100%;
		height: 9.375rem;
	}

	.tag-container>h2 {
		display: block;
		height: 2.9375rem;
		text-align: center;
		font-size: 0.9375rem;
		background-color: rgba(213, 191, 167, 0.1);
		padding: 0.5rem 0;
		border-bottom: 1px solid #E9E9E9;
	}

	.tag-container .pro-list {
		width: 100%;
		padding: 0 0.3125rem 0 0.3125rem;
		display: flex;
		flex-wrap: wrap;
	}

	.tag-container .pro-list .pro-item {
		width: 10.9375rem;
		text-align: center;
		padding-left: 0.625rem;
		margin-bottom: 0.9375rem;
		margin-left: 0.3125rem;
		border: 1px solid #F2EAE4;
		box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
	}

	.tag-container .pro-list .pro-item img {
		width: 10rem;
		height: 11rem;
	}
	.tag-container .pro-list .pro-item p{
		text-align: left;
	}
	.tag-container .pro-list .pro-item .pro-bottom{
		display: flex;
		justify-content: space-between;
	}
	.tag-container .pro-list .pro-item .pro-price {
		display: inline-block;
		color: #BB9772;
		font-size: 0.875rem;
		margin-top: 0.3125rem;
	}
	.tag-container .pro-list .pro-item .pro-bottom img{
		width: 1.375rem;
		height: 1.375rem;
		margin: -0.625rem 1.25rem 0 0;
	}
	.add-success-msg{
		width: 100%;
		height: 41.6875rem;
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 12030;
	}
	.add-success-msg span{
		display: block;
		width: 9.375rem;
		height: 3.125rem;
		line-height: 3.125rem;
		text-align: center;
		font-size: 0.8125rem;
		color: #FD482C;
		background-color: #FFFFFF;
		border-radius: 0.1875rem;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
</style>
