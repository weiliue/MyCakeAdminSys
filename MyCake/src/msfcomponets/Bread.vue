<template>
	<div class="contain">
		<div class="top">
			<div class="top_list">
				<div class="sort">分类：</div>
				<div>
					<router-link to="/cake" class="rout">
						<span class="sp">全部分类</span>
					</router-link>
					<router-link to="/cake">
						<span class="sp">蛋糕</span>
					</router-link>
					<router-link to="/iceCream">
						<span class="sp">冰淇淋</span>
					</router-link>
					<router-link to="/coffee">
						<span class="sp">咖啡下午茶</span>
					</router-link>
					<router-link to="/bread">
						<span class="sp">面包</span>
					</router-link>
					<router-link to="/design">
						<span class="sp">设计师礼品</span>
					</router-link>
				</div>
			</div>
			<div class="top_list">
				<div class="sort">口味：</div>
				<div>
					<span class="sp">全部口味</span>
					<span class="sp">乳脂奶油</span>
					<span class="sp">慕斯</span>
					<span class="sp">乳酪</span>
					<span class="sp">巧克力</span>
					<span class="sp">坚果</span>
					<span class="sp">水果</span>
				</div>
			</div>

		</div>


		<!-- 商品展示区域 -->
		<div class="box">
			<ul>
				<li v-for="item in BreadList" :key='item.id'>
					<img v-bind:src="item.bre_img" alt="" @click="jump(item.id,item.bre_name)">
					<h3>{{item.bre_name}}</h3>
					<p class="list">{{item.bre_price}}</p>

					<p class="cart"><span class="shop" @click="addCart(item)"><i
								class="iconfont icon-gouwuche"></i>购物车</span></p>
					<div :class="{ 'ShowCat': true, 'trafrome': item.isSort }">
						<div class="btn" v-if="item.isSort">
							<span class="addM" @click='jumpToCart(item.id,item.bre_name)'>立即购买</span>
							<span class="clan" @click='btn_addCat(item,item.id,item.bre_name)'>加入购物车</span>
						</div>
					</div>

					<!-- 点击加入购物车 -->
					<div v-if=" item.isShowBtn&&!item.isSort" class="ShowCat trafrome seek">
						<section><span class='succe'><i class="el-icon-success" :style="{color:'green'}"></i>添加成功</span>
						</section>
						<span class="look" @click="shopCart(item)">点击查看</span>
					</div>
				</li>
			</ul>

		</div>

	</div>


</template>

<script>
	export default {
		name: 'Bread',

		// 获取数据
		data() {
			return {
				BreadList: []
			}
		},

		// 调用函数
		mounted() {
			this.getBreadList()

		},

		// 发送请求
		methods: {
			getBreadList() {
				this.$http.get("http://localhost:8888/bread")
					.then(response => {
						this.BreadList = response.data.map(data => {
							data.isSort = false;
							data.isShowBtn = false;
							return data;
						});
						// console.log(this.BreadList)
					})
					.catch(err => {
						console.log(error)
					})

			},

			addCart(item) {
				this.BreadList.map(data => {
					data.isSort = false;
					data.isShowBtn = false
				});
				item.isSort = true;
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

			btn_addCat(item,produId, proName) {
				if (localStorage.getItem("isLogin")) {
					let that = this;
					let userId = localStorage.getItem("userID");
					// console.log(userId)
					//发送ajax请求，查看购物车是否存在数据
					//查询购物车的商品
					this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`)
						.then((response) => {
							let result = response.data;
							// console.log(result)

							if (result.msg == 0) {
								that.$http.get(`http://localhost:8888/insertBreadCartInfor?id=${produId}&&userId=${userId}`)
									.then((response) => {
										// console.log(response.data)
										item.isSort = false;
										item.isShowBtn = true;
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
											item.isSort = false;
											item.isShowBtn = true;
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
							console.log(error)
						});
				}
				else{
					alert("亲，您还没有登录哦~~");
				}
			},
			// btn_addCat(item) {
			// 	console.log("123")
			// 	item.isSort = false;
			// 	item.isShowBtn = true;
			// },

			shopCart(item) {
				this.$router.push('/shopcart'); //跳转到购物车界面

			},
			jump(id,name){
				console.log(id)
				this.$router.push({ path: "/productinfobre", query: { breid: id, brename: name } });
			}

		},
	}
</script>

<style scoped>
	
</style>