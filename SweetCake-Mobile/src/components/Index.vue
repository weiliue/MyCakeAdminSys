<template>
	<div>
		<mHeader></mHeader> 
		<!-- 轮播图 -->
		<van-swipe :autoplay="2000" indicator-color="white">
			<van-swipe-item><img src="http://img5.imgtn.bdimg.com/it/u=4225539594,2901673509&fm=26&gp=0.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="http://i1.chuimg.com/e115784ca7a111e5ba16e0db5512b208.jpg@2o_50sh_1pr_1l_600w_90q_1wh" alt=""></van-swipe-item>
			<van-swipe-item><img src="http://image001.ytexpress.cn/20170610/4291715171f7d4bd32ff3e5425da7a6a.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="http://b-ssl.duitang.com/uploads/blog/201510/20/20151020195406_Rud5n.jpeg" alt=""></van-swipe-item>
		</van-swipe>
		<!-- 导航 -->
		<van-grid icon-size="52px">
			<van-grid-item icon="https://static.21cake.com//upload/images/b24fa9c0d277b79493fead122afe8e73.png" text="蛋糕" to="/cake" />
			<van-grid-item icon="https://static.21cake.com//upload/images/d667fa5ec4aa0ddef127902518202f1a.png" text="面包" to="/bread" />
			<van-grid-item icon="https://static.21cake.com//upload/images/dda23404c8cba348580acd684114ade3.png" text="下午茶" to="/coffee" />
			<van-grid-item icon="https://static.21cake.com//upload/images/6d777e1d3aa1681d58ea1640f53e2920.png" text="冰淇淋" to="/icecream" />
		</van-grid>
		<!-- 按分类展示商品 -->
		<div class="goods">
			<div class="goods-content" v-for="item in tagList">
				<div class="sort-title">
					<span>{{item.tag_title}}</span>
					<div @click="jumpToTagPage(item.id)">更多></div>
				</div>
				<div class="goods-box" v-for="proItem in item.proInfor">
					<img :src="proItem.pro_img" alt="" @click="jumpToProductInfo(proItem.id,proItem.pro_name)">
					<div class="bottom-box">
						<div class="goods-name-price">
							<span class="goods-name">{{proItem.pro_name}}</span>
							<span class="goods-price">{{proItem.pro_price}}元</span>
						</div>
						<p class="goods-desc">{{proItem.pro_infor}}</p>
						<div class="add-to-cart" @click="addToCart(proItem.id,proItem.pro_name)">
							<van-icon name="cart" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="flag&&isShow" class="add-success-msg">
		    <span @click="hiddenBox()">成功添加购物车</span>
		</div>
		<mFooter></mFooter>
	</div>
</template>

<script>
	import mHeader from "./mHeader"
	import mFooter from "./mFooter"
	export default {
		name: "Index",
		data() {
			return {
				tagList: [],
				flag:false,
				isShow:false
			}
		},
		components: {
			mHeader,
			mFooter
		},
		methods:{
			hiddenBox(){
				this.isShow = false;
			},
			jumpToTagPage(tag_id){
				this.$router.push({path:'/tagpage',query:{ tag_id : tag_id }})
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
			                        .catch(function (error) {
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
			// 从服务器请求产品数据渲染页面
			this.$http.get("http://localhost:8888/queryProByTagId")
				.then((response) => {
					// console.log(response.data);
					this.tagList = response.data
				})
				.catch(function(error) {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	.van-swipe {
		width: 23.4375rem;
	}

	.van-swipe img {
		width: 23.4375rem;
		height: 12.5rem;
	}

	.van-grid {
		width: 23.4375rem;
	}

	.goods {
		width: 23.4375rem;
		padding-top: 0.625rem;
	}

	.goods-content {
		border-top: 1px solid #E5E5E5;
		font-size: 0.75rem;
		color: #442818;
		width: 20.9375rem;
		margin: 0 auto;
	}

	.goods-content .sort-title {
		height: 1.875rem;
		padding-top: 0.625rem;
		margin-bottom: 0.625rem;
		line-height: 1.875rem;
		display: flex;
		justify-content: space-between;
	}

	.goods-content .sort-title span {
		display: inline-block;
		/* width: 2.875rem; */
		height: 1.25rem;
		line-height: 1.25rem;
		background-color: #F4EBE2;
		font-size: 0.8125rem;
		color: #322418;
		padding: 0 0.625rem;
		border-radius: 6.25rem;
		/* float: left; */
	}

	.goods-content .sort-title div {
		/* float: right; */
		line-height: 1.25rem;
		color: #808080;
	}

	.goods-box {
		background-color: #FFFFFF;
		border: 1px solid #F2EAE4;
		box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
		border-radius: 5px;
		overflow: hidden;
		margin-bottom: 1.25rem;
	}

	.goods-box img {
		width: 20.8125rem;
		height: 11.125rem;
	}

	.bottom-box {
		position: relative;
		border-top: 1px solid #F2EAE4;
	}

	.goods-name-price {
		width: 100%;
		height: 1.25rem;
		margin: 0.625rem 0.625rem 0;
		color: #A6A6A6;
		font-size: 0.75rem;
		padding-bottom: 0.875rem;
	}

	.goods-name-price .goods-name {
		color: #322418;
		font-size: 0.9375rem;
		margin-right: 0.5rem;
	}

	.goods-price {
		color: #C69C6D;
		font-size: 0.9375rem;
	}

	.goods-box .goods-desc {
		color: #442818;
		font-size: 0.75rem;
		margin: 0.4375rem 0 0 0.625rem;
		padding-bottom: 0.875rem;
	}

	.goods-box .add-to-cart {
		position: absolute;
		bottom: 0.9375rem;
		right: 0.75rem;
	}

	.add-to-cart {
		width: 2.8125rem;
		height: 2.8125rem;
		line-height: 2.8125rem;
		text-align: center;
		border: 1px solid #F2EAE4;
		box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.06);
		border-radius: 2.8125rem;
	}

	.add-to-cart .van-icon-cart {
		font-size: 1.25rem;
		line-height: 2.8125rem;
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
