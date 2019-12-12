<template>
	<div class="out-box">
		<div class="img-area">
			<img :src="list.bre_img" alt="">
		</div>
		<div class="pro-detail-box">
			<div class="left">
				<div class="title-area">
					<div class="p-name"><span>{{list.bre_name}}</span><span class="price">￥{{list.bre_price}}</span></div>
					<div class="p-detail">{{list.bre_name}}</div>
					<a>
						<img src="https://newimgcdn.lapetit.cn/web/images/aha/aha_link.png?01" alt="">
					</a>
				</div>
				<div class="promotion-activity">
					<div class="ac-title">优惠促销</div>
					<p class="tag">
						<span>限时加购</span>
						+39元享啪啪脸蛋糕
					</p>
					<h6>查看促销详情</h6>
				</div>
			</div>
			<div class="right">
				<div class="eat-num">
					<div class="eat-suggest">
						<span>建议食用人数</span>
					</div>
					<div class="clear-fix">
						<ul>
							<li id="myli" class="current first" @click="change(0)">
								<router-link to="/spec1">2-4人食</router-link>
							</li>
							<li id="myli" @click="change(1)">
								<router-link to="/spec2">5-8人食</router-link>
							</li>
							<li id="myli" @click="change(2)">
								<router-link to="/spec3">10-12人食</router-link>
							</li>
							<li id="myli" @click="change(3)">
								<router-link to="/spec4">15-20人食</router-link>
							</li>
						</ul>
					</div>
					<router-view></router-view>
					<div class="btn-box">
						<div class="add-btn-box">
							<button class="btn add-btn"
								@click="addToCart($route.query.breid,$route.query.brename)">加入购物车+</button>
							<div v-if="isLogin">
								<div class="tip" v-if="isAdd"><span>加入购物车成功</span><button class="confirm"
										@click="jump()">确定</button></div>
								<!-- <div class="tip" v-else><span>加入购物车错误</span></div> -->
							</div>
							<div class="tip" v-else>
								<router-link to="/login">请先登录</router-link>
							</div>

						</div>

						<button class="btn buy-btn" @click="jumpToCart($route.query.breid,$route.query.brename)">立即购买</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProductInfoBre",
		data() {
			return {
				list: [],
				isAdd: false,
				isLogin: localStorage.getItem("isLogin")
			}
		},
		methods: {
			jump() {
				this.$router.push({ path: "/shopcart" })
			},
			jumpToCart(produId, proName){
				if (localStorage.getItem("isLogin")) {
					let that = this;
					let userId = localStorage.getItem("userID");

					//发送ajax请求，查看购物车是否存在数据
					this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`) //查询购物车的商品
						.then((response) => {
							let result = response.data;

							if (result.msg == 0) {
								that.$http.get(`http://localhost:8888/insertBreadCartInfor?id=${produId}&&userId=${userId}`)
									.then((response) => {
										// 插入购物车成功，吧isAdd的状态改为true
										
										this.$router.push({ path: "/shopcart" });
									})
									.cath(function (error) {
										console.log(error);
									});
							} else if (result.msg == 1) {
								if (result.cartData[0].name == proName) {
									result.cartData[0].count++;
									console.log(result.cartData[0].count)
									that.$http.get(`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
										.then((response) => {
											// 更改数量成功，吧isAdd的状态改为true
											
											this.$router.push({ path: "/shopcart" })
										})
										.cath(function (error) {
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
			},
			addToCart(produId, proName) {
				if (localStorage.getItem("isLogin")) {
					let that = this;
					let userId = localStorage.getItem("userID");

					//发送ajax请求，查看购物车是否存在数据
					this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`) //查询购物车的商品
						.then((response) => {
							let result = response.data;
							console.log(result)

							if (result.msg == 0) {
								that.$http.get(`http://localhost:8888/insertBreadCartInfor?id=${produId}&&userId=${userId}`)
									.then((response) => {
										console.log(response.data)
										// 插入购物车成功，吧isAdd的状态改为true
										this.isAdd = true;
									})
									.catch(function (error) {
										console.log(error);
									});
							} else if (result.msg == 1) {
								if (result.cartData[0].name == proName) {
									result.cartData[0].count++;
									console.log(result.cartData[0].count)
									that.$http.get(`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
										.then((response) => {
											// console.log(response.data)
											// 更改数量成功，吧isAdd的状态改为true
											this.isAdd = true;
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

			},
			change(position) {
				var nodeList = document.querySelectorAll("#myli");
				// console.log(nodeList);
				for (let i = 0; i < nodeList.length; i++) {
					if (position == i) {
						nodeList[i].style.border = "1px solid #FF4001";
						nodeList[i].style.borderBottom = "none";
						nodeList[i].style.background = "#fff"
					} else {
						nodeList[i].style.border = "none";
						nodeList[i].style.borderBottom = "1px solid #FF4001";
						nodeList[i].style.background = "#f9f9f9"
					}
				}
			}
		},
		mounted() {
			console.log(this.$route.query.breid)
			// console.log(this.$route.query.proid);
			this.isAdd = false;
			this.$http.post("http://localhost:8888/showBread", {
				bre_id: this.$route.query.breid
			}).then((response) => {
				console.log(response);
				this.list = response.data[0];
			}).catch(function (error) {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	.out-box {
		width: 1200px;
		margin: 0 auto;
		background-color: #fff;
	}

	@import url("../css/productinfo.css");
</style>