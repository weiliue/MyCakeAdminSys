<template>
	<div class="containter">
		<van-nav-bar :title="list.pro_name" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" :fixed="true" />
		<div class="img-box">
			<img :src="list.pro_img" alt="">
		</div>
		<div class="detail-outer-box">
			<div class="detail-box">
				<p class="name">{{list.pro_name}}</p>
				<p class="desc">{{list.pro_infor}}</p>
				<p class="price">{{list.pro_price}}</p>
			</div>
			<div class="taste">
				<ul>
					<li>
						<img src="https://static.21cake.com/themes/wap/img/goods/icon/micon-30.png" alt="">
						<span>蔓越莓流心酱</span>
					</li>
					<li>
						<img src="https://static.21cake.com/themes/wap/img/goods/icon/micon-06.png" alt="">
						<span>坚果碎</span>
					</li>
					<li>
						<img src="https://static.21cake.com/themes/wap/img/goods/icon/micon-03.png" alt="">
						<span>蔓越莓味伏加特</span>
					</li>
				</ul>
			</div>
			<div class="select-card">
				<div class="select-spec">
					已选择：454g(1.0磅)
					<img src="https://static.21cake.com/themes/wap/img/Page-go.png" alt="">
				</div>
				<div class="details-options-card">
					<div class="details-options">
						<ul>
							<li class="details-options-size">
								<i></i>
								12x12cm
							</li>
							<li class="details-options-laid">
								<i></i>
								含5套餐具(蜡烛需单独订购)
							</li>
							<li class="details-options-number">
								<i></i>
								适合3-4人分享
							</li>
							<li class="details-options-time">
								<i></i>
								最早今天16：00配送
							</li>
						</ul>
					</div>
				</div>
				<ul class="store-info">
					<li>
						<img src="https://static.21cake.com/themes/wap/img/fresh.png" alt="">
						<span>保鲜条件</span>
						<span>0－4℃保藏12小时，5℃食用为佳</span>
					</li>
					<li>
						<img src="https://m.21cake.com/themes/wap/img/sweet.png" alt="">
						<span>参考甜度</span>
						<p class="sweet-list">
							<i class="active"></i>
							<i class="active"></i>
							<i class="active"></i>
							<i></i>
							<i></i>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
			<van-goods-action-icon icon="cart-o" text="购物车" @click="jumpToCart" />
			<van-goods-action-button type="warning" text="加入购物车" @click="addToCart(list.id,list.pro_name)" />
			<van-goods-action-button type="danger" text="立即购买" @click="jumpToCartPage($route.query.proid,$route.query.proname)" />
		</van-goods-action>
		<div v-if="flag&&isShow" class="add-success-msg">
		    <span @click="hiddenBox()">成功添加购物车</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProductInfo",
		data() {
			return {
				isLogin: localStorage.getItem("isLogin"),
				list:{},
				flag:false,
				isShow:false
			}
		},
		methods: {
			hiddenBox(){
				this.isShow = false;
			},
			onClickIcon() {

			},
			jumpToCart() {
				this.$router.push({
					path: "/shopcart"
				})
			},
			onClickLeft() {
				// this.$router.push({
				// 	path: "/"
				// })
				this.$router.go(-1);
			},
			onClickRight() {

			},
			addToCart(produId, proName) {
				// console.log(produId)
				this.isShow = true;
				if (localStorage.getItem("isLogin")) {
					this.flag = true;
					let that = this;
					let userId = localStorage.getItem("userID");
					//发送ajax请求，查看购物车是否存在数据
					this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`) //查询购物车的商品
						.then((response) => {
							let result = response.data;
							// console.log(result)

							if (result.msg == 0) {
								that.$http.get(`http://localhost:8888/insertCartInfor?id=${produId}&&userId=${userId}`)
									.then((response) => {
										// console.log(response.data)
									})
									.catch(function(error) {
										console.log(error);
									});
							} else if (result.msg == 1) {
								if (result.cartData[0].name == proName) {
									result.cartData[0].count++;
									// console.log(result.cartData[0].count)
									that.$http.get(
											`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
										.then((response) => {
											// console.log(response.data)
										})
										.catch(function(error) {
											console.log(error);
										});
								}
							} else {
								alert("数据错误");
							}
						})
						.catch(function(error) {
							console.log(error);
						});
				} else {
					alert("亲，您还没登录哦~~");
				}

			},
			jumpToCartPage(produId, proName){
				// console.log(produId,proName);
				if (localStorage.getItem("isLogin")) {
					let that = this;
					let userId = localStorage.getItem("userID");
			
					//发送ajax请求，查看购物车是否存在数据
					this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`) //查询购物车的商品
						.then((response) => {
							let result = response.data;
			
							if (result.msg == 0) {
								that.$http.get(`http://localhost:8888/insertCartInfor?id=${produId}&&userId=${userId}`)
									.then((response) => {
										// console.log(response.data);
										this.$router.push({ path: "/shopcart" });
									})
									.catch(function (error) {
										console.log(error);
									});
							} else if (result.msg == 1) {
								if (result.cartData[0].name == proName) {
									result.cartData[0].count++;
									// console.log(result.cartData[0].count)
									that.$http.get(`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
										.then((response) => {
											// console.log(response.data);
											this.$router.push({ path: "/shopcart" })
										})
										.catch(function (error) {
											console.log(error);
										});
								}
							} else {
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
			// console.log(this.$route.query.proid);
			this.isAdd = false;
			this.$http.post("http://localhost:8888/showPro", {
				pro_id: this.$route.query.proid
			}).then((response) => {
				// console.log(response.data);
				this.list = response.data[0];
			}).catch(function (error) {
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

	.van-nav-bar__text {
		color: #442818;
	}

	.van-icon-arrow-left:before {
		font-size: 1.25rem;
		color: #442818;
	}

	.containter {
		width: 100%;
		font-size: 0.75rem;
		color: #442818;
	}

	.containter .img-box {
		width: 100%;
		height: 20rem;
		background-color: #EEEEEE;
	}

	.containter .img-box img {
		width: 100%;
		height: 100%;
	}

	.detail-outer-box {
		width: 100%;
		padding: 0 24px;
	}

	.detail-box .name {
		font-size: 1.5rem;
		color: #333333;
		padding-top: 0.625rem;
	}

	.detail-box .desc {
		font-size: 14px;
		color: #333333;
	}

	.detail-box .price {
		color: #FF480C;
		font-size: 1.25rem;
		margin-top: 0.25rem;
	}

	.detail-outer-box .taste {
		width: 100%;
		height: 5.875rem;
		padding-top: 1.25rem;
	}

	.detail-outer-box .taste ul {
		width: 100%;
		height: 100%;
	}

	.detail-outer-box .taste li {
		display: inline-block;
		width: 40%;
		height: 2rem;
		color: #442818;
		font-size: 0.75rem;
		line-height: 2rem;
		margin: 0 1.25rem 0.625rem 0;
	}

	.detail-outer-box .taste li img {
		width: 2rem;
		height: 2rem;
		margin-right: 0.5rem;
		vertical-align: middle;
	}

	.select-card {
		width: 100%;
		height: 12.5rem;
		color: #442818;
		font-size: 0.75rem;
		background-color: #FFFFFF;
		border-radius: 0.25rem;
		overflow: hidden;
		box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.10);
		margin-top: 0.9375rem;
		margin-bottom: 1.25rem;
	}

	.select-card .select-spec {
		width: 100%;
		height: 2.8125rem;
		line-height: 2.8125rem;
		color: #442818;
		font-size: 0.8125rem;
		background-color: rgba(199, 178, 153, 0.2);
		padding-left: 0.875rem;
	}

	.select-card .select-spec img {
		width: 0.625rem;
		height: 0.9375rem;
		float: right;
		margin: 0.9375rem 0.9375rem 0 0;
	}

	.select-card .details-options-card {
		margin: 1.125rem 0.875rem 0.5rem;
	}

	.details-options-card .details-options ul {
		width: 100%;
		overflow: hidden;
	}

	.details-options-card .details-options ul li {
		width: 50%;
		min-height: 1.5rem;
		float: left;
		list-style: none;
		margin-bottom: 0.25rem;
	}

	.details-options i {
		margin-right: 0.5rem;
		background-position: -1.6875rem 0.1875rem;
	}

	.details-options-size i {
		background-image: url() no-repeat center;
	}

	.details-options-laid i {
		background: url() no-repeat center;
	}

	.store-info {
		margin-bottom: 0.875rem;
	}

	.store-info li img {
		height: 0.9375rem;
		width: auto;
		margin-left: 1.0625rem;
		vertical-align: middle;
	}

	.store-info li span {
		width: 3.4375rem;
		height: 1rem;
		margin: 0 0.625rem;
	}

	.sweet-list {
		display: inline-block;
		vertical-align: middle;
	}

	.sweet-list i {
		display: inline-block;
		width: 0.875rem;
		height: 0.875rem;
		margin-right: 0.625rem;
		background-image: url(https://static.21cake.com/themes/wap/img/sweet-01.png);
		background-size: 100%;
	}

	.sweet-list .active {
		background-image: url(https://static.21cake.com/themes/wap/img/sweet-02.png);
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
