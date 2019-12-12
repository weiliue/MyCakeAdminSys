<template>
	<div class="content-box">
		<!-- 配送信息 -->
		<div class="delivery-info">
			<div class="delivery-info-title">配送信息</div>
			<div class="address-info-content">
				<div class="add-address-button">
					<img src="../assets/add-address.png" alt="">
					<span @click="addNewAddress()">添加新地址</span>
				</div>
				<!-- <div class="add-address-button">
					<img src="../assets/add-address.png" alt="">
					<span>选择新地址</span>
				</div> -->
				<!-- 添加地址表单 -->
				<div class="edit-address">
					<div class="pop-window">
						<div class="add-address-title">添加地址</div>
						<div class="address-choose">
							<ul>
								<li>
									<label class="label-title">
										<span>*</span>所在地区：
									</label>
									<div class="select-city">
										<div class="city-choose">上海/金山区</div>
										<img src="https://www.21cake.com/themes/site/img/bottom.png" alt="">
									</div>
									<div class="city-list">
										<div class="city-select">
											<div class="city-name">
												<select name="city" id="new-input-city-select" placeholder="请选择">
													<option value="1" selected="selected">上海</option>
													<option value="2">北京</option>
													<option value="3">天津</option>
													<option value="4">杭州</option>
													<option value="5">无锡</option>
													<option value="6">苏州</option>
													<option value="7">广州</option>
													<option value="8">深圳</option>
												</select>
											</div>
										</div>
										<div class="city-list-show">
											<div id="city-select">
												<span class="country-name-list">宝山区</span>
												<span class="country-name-list">长宁区</span>
												<span class="country-name-list">奉贤区</span>
												<span class="country-name-list">虹口区</span>
												<span class="country-name-list">黄浦区</span>
												<span class="country-name-list">嘉定区</span>
												<span class="country-name-list">金山区</span>
												<span class="country-name-list">静安区</span>
											</div>
										</div>
									</div>
								</li>
								<li>
									<label class="label-title">
										<span>*</span>详细地址
									</label>
									<div class="address-detail">
										<span class="areaName">上海 金山区</span>
										<input type="text" placeholder="请填写街道,门牌号等">
									</div>
								</li>
								<li>
									<div class="customer-msg">
										<div class="user-msg-left">
											<label class="label-title">
												<span>*</span>收货人
											</label>
											<div class="user-msg-left-input" >
												<input type="text" placeholder="收货人姓名">
											</div>
										</div>
										<div class="user-msg-right">
											<label class="label-title">
												<span>*</span>手机号码
											</label>
											<div class="user-msg-left-input" >
												<input type="text" placeholder="收货人手机">
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="bottom-btn">
										<div class="btn-box">
											<button>取消</button>
											<button>确定</button>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="delivery-address">
					<div class="left-info">
						<h3>王先生</h3>
						<span class="phone-number">15052466983</span>
						<span class="address">广东广州市天河区时尚天河商业广场</span>
					</div>
					<div class="right-button">
						<a href="">切换地址</a>
						<a href="">+添加新地址</a>
					</div>
				</div>
				<div class="delivery-time">
					<span>配送时间</span>
					<el-date-picker v-model="value1" type="date" placeholder="选择日期">
					</el-date-picker>
					<el-time-picker arrow-control v-model="value2" :picker-options="{
					      selectableRange: '18:30:00 - 20:30:00'
					    }"
					 placeholder="任意时间点">
					</el-time-picker>
					<!-- <input type="text" name="ship-date" id="ship-date" autocomplete="off" placeholder="请选择配送日期" class="hasDatepicker"> -->
					<!-- <select name="ship-time" id="ship-time">
						<option value="">时间</option>
					</select> -->
					<span>配送时间受实时路况影响，会有前后15分钟的误差，请谅解。</span>
				</div>
			</div>
		</div>
		<!-- 商品信息 -->
		<div class="cart-goods-info">
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
					<tbody>
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
										<span class="numb">{{item.count}}</span>
									</div>
								</div>
							</td>
							<td class="subtotal">
								<div>
									<div>{{item.price * item.count}}</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!-- 留言信息 -->
		<div class="leave-message"></div>
		<!-- 选择优惠卷信息 -->
		<!-- <div class="select-coupons-info"></div> -->
		<!-- 支付信息 -->
		<div class="payment-info">
			<div class="left-pay">
				<h3>支付方式</h3>
				<a href="#" class="online-pay">在线支付</a>
				<a href="#" class="other-pay">
					<img src="../assets/add-pay.png" alt="">
					使用果实币（余额：0.00 元）
				</a>
				<a href="#" class="other-pay">
					<img src="../assets/add-pay.png" alt="">
					使用代金卡
				</a>
			</div>
			<div class="right-pay">
				<ul>
					<li>
						<span>商品金额</span>
						<span class="redco">￥{{totalAmount}}</span>
					</li>
					<li>
						<span>配送费</span>
						<span class="redco">￥0.00</span>
					</li>
					<li>
						<span>优惠抵扣</span>
						<span class="redco">￥0.00</span>
					</li>
					<li>
						<span>果实币抵扣</span>
						<span class="redco">￥0.00</span>
					</li>
					<li>
						<span>代金卡抵扣</span>
						<span class="redco">￥0.00</span>
					</li>
				</ul>
				<div class="total-amount">
					您总共需要支付
					<span id="total-amount">{{totalAmount}}</span>
				</div>
				<button class="go-pay">下单结算</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CheckOut",
		data() {
			return {
				value1: '',
				value2: new Date(2016, 9, 10, 18, 40),
				cartlist: [],
			}
		},
		computed: {
			totalAmount() {
				if (this.cartlist.length > 0) {
					let totalAmount = 0;
					this.cartlist.forEach((item) => {
						totalAmount += item.price * item.count;
					})
					return totalAmount;
				}
			}
		},
		methods: {
			addNewAddress() {

			}
		},
		mounted() {
			this.$http.post("http://localhost:8888/showCart", {
				user_id: localStorage.getItem("userID")
			}).then((response) => {
				console.log(response.data);
				this.cartlist = response.data;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	@import url("../css/shopcart.css");
	@import url("../css/checkout.css");
</style>
