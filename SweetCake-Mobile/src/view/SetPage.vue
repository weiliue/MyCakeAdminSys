<template>
	<div class="main">
		<!-- 头部 -->
		<div class="header">个人中心</div>
		<div v-if="isLogin" class="logout" @click="clearStroage()">退出登录</div>
		<div v-else class="logout" @click="toLogin">去登录~</div>
	</div>
</template>

<script>
	export default {
		name:"SetPage",
		data(){
			return {
				isLogin:localStorage.getItem("isLogin")
			}
		},
		methods:{
			clearStroage(){
				localStorage.removeItem("userID");
				localStorage.removeItem("isLogin");
				location.reload(true);
			},
			toLogin(){
				this.$router.push("/login");
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
		color: #fff;
		font-size: 1rem;
	}
	
	.logout{
		width: 100%;
		height: 2.1875rem;
		line-height: 2.1875rem;
		margin-top: 0.9375rem;
		background-color: #FDC687;
		color: #FFFFFF;
		text-align: center;
	}
</style>
