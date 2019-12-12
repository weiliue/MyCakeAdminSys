<template>
	<div class="main">

		<!-- 头部 -->
		<div class="header">个人中心</div>


		<!-- 头像区域 -->
		<div class="imgs" @click="login()">
			<div class="tou">
				<img v-if="isLogin"  src="../assets/images/tou.jpg" alt="">
			</div>
			<p v-if="isLogin" class="login">用户ID:{{userID}}</p>
			<p v-else class="login">未登录</p>
		</div>

		<!-- info -->
		<div class="infor">
			<div class="item">
				<span>个人信息</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="item">
				<span>我的订单</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="item">
				<span>我的地址</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="item">
				<span @click="set">设置</span>
				<i class="el-icon-arrow-right"></i>
			</div>

		</div>


	</div>
</template>

<script>
	export default {
		name: 'Mine',
		data(){
			return{
				isLogin:localStorage.getItem("isLogin"),
				userID:localStorage.getItem("userID")
			}
		},
		methods: {
			login() {
				// console.log("dd")
				this.$router.push('/login')
			},
			set(){
				this.$router.push("/setpage");
			}
		}
	}
</script>

<style scoped>
	.main {
		/* margin-left: -8px !important; */
		width: 100%;
	}

	.header {
		width: 100%;
		height: 48px;
		background: #FDC687;
		position: fixed;
		top: 0;
		text-align: center;
		line-height: 48px;
		/* color: #fff; */
		font-size: 1rem;
	}

	.imgs {
		margin-top: 4rem;
		width: 100%;
		height: 10rem;
		background: #FDC687;
		text-align: center;
		padding-top: 47px;
	}

	.tou {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-top: 0.8rem;
		background-color: #FFFFFF;
		margin: auto;
		overflow: hidden;
	}
	.tou img{
		width: 100%;
		height: 100%;
	}
	.login {
		/* color: white; */
		margin-top: 0.53333rem;
		font-size: 1rem;
	}

	.infor {
		margin-top: 2rem;

	}
	.item {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		margin-bottom: 1rem;
	}

</style>
