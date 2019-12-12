<template>
	<div>
		<div class="header-title">
			<span>购物车</span>
			<span v-if="!isShow" @click="change" class="change-box">管理</span>
			<span v-if="isShow" @click="change" class="change-box">完成</span>
		</div>
		<div class="cart-containter" v-if="isLogin">
			<ul class="cart-pro-list">
				<li v-for="(item, index) in cartlist" :key="item.id">
					<div class="cart-pro-box">
						<div class="chekbox-box">
							<input type="checkbox" v-model="isSelected" :value="index">
						</div>
						<div class="cart-pro-box-left">
							<img :src="item.cart_img" alt="">
						</div>
						<div class="cart-pro-box-right">
							<p class="pro-name">{{item.name}}</p>
							<p class="pro-price">￥{{item.price}}</p>
							<div class="number-box">
								<button @click="sub(index)" :disabled="item.number === 1">-</button>
								<span>{{item.count}}</span>
								<button @click="add(index)">+</button>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="bottom-box">
				<div class="selectall-btn">
					<input type="checkbox" @click="checkAll" v-model="checkall">全选
				</div>
				<div class="right"  v-if="!isShow">
					<div class="total-price">
						合计：<span>￥{{totalPrice}}</span>
					</div>
					<button class="cart-total-submit" @click="jumpToCheckOut()">结算</button>
				</div>
				<div class="right" v-if="isShow">
					<button class="delete-btn" @click="deleSelectItem()">删除</button>
				</div>
			</div>
		</div>
		<div v-else>请先登录~</div>
	</div>
</template>

<script>
	export default {
		name: "ShopCart",
		data() {
			return {
				total: 0,
				cartlist: [],
				isLogin: localStorage.getItem("isLogin"),
				checkall: false,
				isSelected: [],
				isShow: false
			}
		},
		methods: {
			change(){
				if(this.isShow){
					this.isShow=false;
				}else{
					this.isShow=true;
				}
			},
			checkAll() {
				if (this.checkall) {
					// 实现反选
					this.isSelected = [];
				} else {
					// 实现全选
					this.isSelected = [];
					for (let i = 0; i < this.cartlist.length; i++) {
						this.isSelected.push(i);
					}
					// this.cartlist.forEach((item)=>{
					// 	this.isSelected.push(item.id);
					// })
				}
				if (this.isSelected.length === this.cartlist.length) {
					this.checkall = true;
				}
			},
			sub(index) {
				if (this.cartlist[index].count == 1) {
					return;
				}
				this.cartlist[index].count--;
				// 把数据库里的记录也同时更新
				this.$http.post("http://localhost:8888/updateCount", {
					pro_name: this.cartlist[index].name,
					pro_count: this.cartlist[index].count,
					user_id: this.cartlist[index].user_id
				}).then((response) => {
					// console.log(response.data);
				}).catch(function(error) {
					console.log(error);
				})
			},
			add(index) {
				this.cartlist[index].count++;
				// 把数据库里的记录也同时更新
				// console.log(this.cartlist[index].user_id)
				this.$http.post("http://localhost:8888/updateCount", {
					pro_name: this.cartlist[index].name,
					pro_count: this.cartlist[index].count,
					user_id: this.cartlist[index].user_id
				}).then((response) => {
					// console.log(response.data);
				}).catch(function(error) {
					console.log(error);
				})
			},
			dele(index) {
				// 把数据库里的记录也同时更新
				this.$http.post("http://localhost:8888/deleteRecord", {
					pro_name: this.cartlist[index].name,
					user_id: this.cartlist[index].user_id
				}).then((response) => {
					// console.log(response.data);
				}).catch(function(error) {
					console.log(error);
				})

				this.cartlist.splice(index, 1);

			},
			deleSelectItem() {
				if (!this.isSelected) {
					return;
				};
				// 对选中的下标进行排序
				this.isSelected.sort();
				// 把选中的项从数据库里删除   倒着删
				for (let i = this.isSelected.length-1; i >=0 ; i--) {
					let value = this.isSelected[i];
					console.log(this.isSelected);
					console.log(value);
					this.dele(value);
					// this.isSelected.splice(value, 1);
				}
				// 同时将选中的复选框改为不选中状态
				this.isSelected=[];
			},
			clear() {
				// 把数据库里的记录也同时更新
				this.$http.post("http://localhost:8888/deleteAllRecord", {
					user_id: localStorage.getItem("userID")
				}).then((response) => {
					console.log(response.data);
				}).catch(function(error) {
					console.log(error);
				})

				this.cartlist.splice(0);
			},
			jumpToCheckOut() {
				this.$router.push("/checkout");
			}
		},
		computed: {
			totalPrice: function() {
				this.total = 0;
				if (!this.isSelected) {
					return;
				}
				this.isSelected.forEach((index) => {
					this.total += this.cartlist[index].price * this.cartlist[index].count;
				})
				return this.total;
			}
		},
		mounted() {
			this.$http.post("http://localhost:8888/showCart", {
				user_id: localStorage.getItem("userID")
			}).then((response) => {
				// console.log(response.data);
				this.cartlist = response.data;
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

	.header-title {
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1200;
	}
	.header-title span:first-of-type{
		margin-left: 0.9375rem;
	}
	.header-title .change-box{
		position: absolute;
		right: 0.9375rem;
	}
	.cart-containter {
		max-width: 26.25rem;
		min-height: 38.6875rem;
		padding-bottom: 4.25rem;
		background-color: #F8F8F8;
		padding-top: 0.9375rem
	}

	.cart-pro-list li {
		width: 100%;
		padding: 0rem 1.25rem 0.9375rem;
		margin-bottom: 0.9375rem;
		color: #442818;
		font-size: 0.75rem;
		background-color: #FFFFFF;
	}

	.cart-pro-box {
		display: flex;
		justify-content: flex-start;
		/* align-items: center; */
	}

	.chekbox-box {
		margin-top: 1.25rem;
	}

	.cart-pro-box-left {
		width: 6.8125rem;
		height: 7.5rem;
	}

	.cart-pro-box-left img {
		width: 100%;
		height: 100%;
	}

	.cart-pro-box-right {
		width: 60%;
		margin-left: 1.875rem;
		position: relative;
	}

	.cart-pro-box-right p {
		display: block;
		width: 100%;
		line-height: 1.25rem;
		margin-top: 0.9375rem;
		font-size: 0.875rem;
	}

	.cart-pro-box-right .pro-price {
		color: #FF4001;
		margin-top: 0.625rem;
	}

	.number-box {
		position: absolute;
		right: 0.9375rem;
		bottom: 0.9375rem;
	}

	.number-box button {
		display: inline-block;
		width: 1.625rem;
		height: 1.125rem;
		line-height: 1.125rem;
		text-align: center;
		border: 1px solid #E1E1E1;
		background-color: #FFFFFF;
	}

	.number-box span {
		display: inline-block;
		width: 1.875rem;
		height: 1.125rem;
		line-height: 1.125rem;
		text-align: center;
		border-top: 0.0625rem solid #E1E1E1;
		border-bottom: 0.0625rem solid #E1E1E1;
	}

	.bottom-box {
		width: 100%;
		height: 3.125rem;
		position: fixed;
		right: 0;
		bottom: 3.125rem;
		background-color: #FFFFFF;
		border-top: 0.0625rem solid #E1E1E1;
		border-bottom: 0.0625rem solid #E1E1E1;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bottom-box .right {
		display: flex;
		align-items: center;
	}

	.bottom-box .total-price {
		margin-right: 0.9375rem;
	}

	.bottom-box .total-price span {
		color: #FF4001;
	}

	.bottom-box .cart-total-submit,.delete-btn {
		width: 5rem;
		height: 2.1875rem;
		border-radius: 2.1875rem;
		color: #FFFFFF;
		background-color: #FF4001;
		border: 0;
		margin-right: 0.9375rem;
	}

	.bottom-box .selectall-btn {
		padding-left: 0.9375rem;
		font-size: 0.875rem;
	}

	.bottom-box .selectall-btn input {
		vertical-align: middle;
	}
</style>
