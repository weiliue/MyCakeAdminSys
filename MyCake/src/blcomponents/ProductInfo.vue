<template>
	<div class="out-box">
		<div class="img-area">
			<img :src="list.pro_img" alt="">
		</div>
		<div class="pro-detail-box">
			<div class="left">
				<div class="title-area">
					<div class="p-name"><span>{{list.pro_name}}</span><span class="price">￥{{list.pro_price}}</span>
					</div>
					<div class="p-detail">{{list.pro_infor}}</div>
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
								@click="addToCart($route.query.proid,$route.query.proname)">加入购物车+</button>
							<div v-if="isLogin">
								<div class="tip" v-if="isAdd"><span>加入购物车成功</span><button class="confirm"
										@click="jump()">确定</button></div>
								<!-- <div class="tip" v-else><span>加入购物车错误</span></div> -->
							</div>
							<div class="tip" v-else>
								<router-link to="/login">请先登录</router-link>
							</div>

						</div>

						<button class="btn buy-btn"
							@click="jumpToCart($route.query.proid,$route.query.proname)">立即购买</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProductInfo",
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
			jumpToCart(produId, proName) {
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
								that.$http.get(`http://localhost:8888/insertCartInfor?id=${produId}&&userId=${userId}`)
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
			// console.log(this.$route.query.proid);
			this.isAdd = false;
			this.$http.post("http://localhost:8888/showPro", {
				pro_id: this.$route.query.proid
			}).then((response) => {
				console.log(response.data);
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

	.img-area {
		width: 1200px;
		height: 520px;
		margin: 0 auto;
	}

	.img-area img {
		width: 1200px;
		height: 520px;
	}

	.pro-detail-box {
		width: 1200px;
		padding: 0 30px 30px;
		margin: 0 auto;
		color: #3E3E3E;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		/* background-color: #fff; */
		border-top: 1px solid #FF4001;
	}

	.pro-detail-box .left {
		width: 551px;
		padding: 20px 0 10px;
	}

	.pro-detail-box .left .title-area {
		width: 100%;
	}

	.title-area .p-name {
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title-area .p-name span:first-of-type {
		color: #3e3e3e;
		font-size: 16px;
	}

	.title-area .p-name span:nth-of-type(2) {
		color: #FF4001;
		font-size: 20px;
	}

	.title-area a {
		display: block;
		width: 550px;
		height: 40px;
		margin-top: 15px;
	}

	.title-area .p-detail {
		text-align: left;
	}

	.promotion-activity {
		width: 100%;
		padding: 10px 0 14px;
		color: #3E3E3E;
		font-size: 12px;
	}

	.promotion-activity .ac-title {
		width: 100%;
		height: 32px;
		text-align: left;
	}

	.promotion-activity .tag {
		font-size: 12px;
		color: #3E3E3E;
		padding: 5px 7px;
		background-color: #FFFFFF;
		text-align: left;
	}

	.promotion-activity .tag span {
		display: inline-block;
		color: #FFFFFF;
		padding: 2px 4px;
		margin-right: 4px;
		background-color: #FF4001;
		border-radius: 1px;
	}

	.promotion-activity h6 {
		text-align: center;
		color: #525252;
		padding-top: 10px;
		text-decoration: underline;
	}

	.pro-detail-box .right {
		width: 551px;
		height: 236px;
		padding: 20px 0 10px;
		font-size: 12px;
		color: #3E3E3E;
	}

	.pro-detail-box .eat-num .eat-suggest {
		height: 20px;
		text-align: left;
	}

	.clear-fix ul {
		display: flex;
	}

	.clear-fix ul,
	li {
		list-style: none;
	}

	.clear-fix ul li {
		width: 137px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		margin-right: 1px;
		background-color: #f9f9f9;
		cursor: pointer;
		border-bottom: 1px solid #FF4001;
	}

	.clear-fix ul li a {
		text-decoration: none;
		color: #FF4001;
	}

	.current.first {
		border: 1px solid #FF4001;
		border-bottom: none;
		background-color: #fff;
	}

	.btn-box {
		width: 100%;
		height: 50px;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}

	.add-btn-box {
		position: relative;
	}

	.add-btn-box .tip {
		width: 262px;
		height: 120px;
		line-height: 120px;
		color: #FF4001;
		font-size: 13px;
		font-weight: 700;
		border: 1px solid #F9F9F9;
		border-radius: 2px;
		background-color: rgb(249, 249, 249);
		border-radius: 2px;
		text-align: center;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.add-btn-box .tip .confirm {
		width: 50px;
		height: 25px;
		color: #FFFFFF;
		border: 0;
		border-radius: 2px;
		background-color: #FF4001;
		position: absolute;
		right: 10px;
		bottom: 10px;
	}

	.add-btn-box .tip .confirm:focus {
		outline: none;
	}

	.add-btn-box .tip a {
		color: #FF4001;
	}

	.btn-box .btn {
		width: 262px;
		height: 50px;
		color: #FF4001;
		font-size: 18px;
		background-color: #FFFFFF;
		border-radius: 2px;
		border: 1px solid #ff4001;
	}

	.btn-box .buy-btn {
		color: #FFFFFF;
		background-color: #FF4001;
	}

	.btn-box .btn:focus {
		outline: none;
	}
</style>