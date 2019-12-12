<template>
	<div class="cart-area">
		<div class="headerBox">
			<ul>
				<li class="h-title">商品</li>
				<li class="h-card">生日牌</li>
				<li class="h-price">单价</li>
				<li class="h-number">数量</li>
				<li class="h-sub">小计</li>
			</ul>
		</div>
		<div class="table-box">
			<table border="0" cellspacing="0" cellpadding="10" width="1200px">
				<!-- 如果登录状态为true且购物车有数据则显示 -->
				<tbody v-if="isLogin == 'true' && cartlist.length">
					<tr class="containter" v-for="(item, index) in cartlist" :key="item.id">
						<td>
							<div class="img-box">
								<img class="goods-img" :src="item.cart_img" alt="">
							</div>
						</td>
						<td class="infor-box">
							<div>
								<p class="name">{{item.name}}</p>
								<p class="size">规格：908g(2.0磅)</p>
								<p class="present">赠送 10 套餐具</p>
							</div>
						</td>
						<td class="select-box">
							<div>
								<select name="" id="">
									<option value="" selected unabled>选择生日牌</option>
									<option value="">生日快乐</option>
									<option value="">节日快乐</option>
									<option value="">Happy Birthday</option>
									<option value="">纪念日快乐</option>
									<option value="">七夕快乐</option>
								</select>
							</div>
						</td>
						<td class="price">
							<div>
								<div>{{item.price}}</div>
							</div>
						</td>
						<td class="num-box">
							<div>
								<div class="num">
									<button class="sub" @click="sub(index)" :disabled="item.number === 1">-</button>
									<span class="numb">{{item.count}}</span>
									<button class="add" @click="add(index)">+</button>
								</div>
							</div>
						</td>
						<td class="subtotal">
							<div>
								<div>{{item.price * item.count}}</div>
							</div>
						</td>
						<td class="del">
							<div>
								<div @click="dele(index)">x</div>
							</div>
						</td>
					</tr>
				</tbody>
				<!-- 如果登录状态为true且购物车没有数据则显示为空 -->
				<div v-else-if="isLogin == 'true' && !cartlist.length">
					<div class="empty">
						<span>购物车空空如也~</span>
					</div>
				</div>
				<!-- 没有登录则显示需要先登录 -->
				<div v-else>
					<div class="not-login">
						<router-link to="/login">请先登录~</router-link>
					</div>
				</div>
			</table>
		</div>
		<div class="goods-submit">
			<div class="cart-total-detail">
				<div class="clear-box">
					<img @click="clear" src="../assets/del.png" alt="">
					<span>全部清空</span>
				</div>
				<div>商品金额：￥{{totalPrice}}</div>
			</div>
			<div class="cart-active">
				<span>活动优惠：￥0.00</span>
			</div>
			<div class="cart-total">
				<span>合计：￥{{totalPrice}}</span>
			</div>
			<div class="cart-total-submit">
				<button @click="jumpToCheckOut()">去结算</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShopCart",
		data() {
			return {
				total: 0,
				cartlist: [],
				isLogin:localStorage.getItem("isLogin")
			}
		},
		methods: {
			sub(index) {
				if (this.cartlist[index].count == 1) {
					return;
				}
				this.cartlist[index].count--;
				// 把数据库里的记录也同时更新
				this.$http.post("http://localhost:8888/updateCount",{
					pro_name: this.cartlist[index].name,
					pro_count: this.cartlist[index].count,
					user_id: this.cartlist[index].user_id
				}).then((response)=>{
					// console.log(response.data);
				}).catch(function(error){
					console.log(error);
				})
			},
			add(index) {
				this.cartlist[index].count++;
				// 把数据库里的记录也同时更新
				console.log(this.cartlist[index].user_id)
				this.$http.post("http://localhost:8888/updateCount",{
					pro_name: this.cartlist[index].name,
					pro_count: this.cartlist[index].count,
					user_id: this.cartlist[index].user_id
				}).then((response)=>{
					// console.log(response.data);
				}).catch(function(error){
					console.log(error);
				})
			},
			dele(index) {
				// 把数据库里的记录也同时更新
				this.$http.post("http://localhost:8888/deleteRecord",{
					pro_name: this.cartlist[index].name,
					user_id: this.cartlist[index].user_id
				}).then((response)=>{
					console.log(response.data);
				}).catch(function(error){
					console.log(error);
				})
				
				this.cartlist.splice(index, 1);
				
			},
			clear() {
				// 把数据库里的记录也同时更新
				this.$http.post("http://localhost:8888/deleteAllRecord",{
					user_id: localStorage.getItem("userID")
				}).then((response)=>{
					console.log(response.data);
				}).catch(function(error){
					console.log(error);
				})
				
				this.cartlist.splice(0);
			},
			jumpToCheckOut(){
				this.$router.push("/checkout");
			}
		},
		computed: {
			totalPrice: function() {
				this.total = 0;
				if(!this.cartlist){
					return;
				}
				this.cartlist.forEach((item) => {
					// console.log(item.number);
					this.total += item.price * item.count;
				})
				return this.total;
			}
		},
		mounted() {
			this.$http.post("http://localhost:8888/showCart",{
				user_id: localStorage.getItem("userID")
			}
			).then((response) => {
				console.log(response.data);
				this.cartlist = response.data;
			}).catch(function(error){
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	@import url("../css/shopcart.css");
</style>
