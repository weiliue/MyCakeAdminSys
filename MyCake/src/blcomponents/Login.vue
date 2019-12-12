<template>
	<div>
		<div class="main-box">
			<div class="content-box">
				<div class="login-form-box">
					<div class="login-nav">
						<router-link to="/account" @click.native="changeStyle(0)" class="login-nav-btn current">账号密码登录</router-link>
						<div class="separate"></div>
						<router-link to="/messagecode" @click.native="changeStyle(1)" class="login-nav-btn">手机验证码登录</router-link>
					</div>
					<router-view></router-view>
				</div>
			</div>
		</div>
		<!-- <myfooter></myfooter> -->
	</div>
	
</template>

<script>
	import MyFooter from "@/components/MyFooter"
	export default {
		name: "Login",
		data() {
			return {
			}
		},
		components:{
			"myfooter":MyFooter
		},
		methods:{
			changeStyle(position){
				let btn = document.querySelectorAll(".login-nav-btn");
				for(let i=0;i<2;i++){
					if(position==i){
						btn[i].style.color="#482618";
					}else{
						btn[i].style.color="#c9c9c9";
					}
				}
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.main-box {
		width: 100%;
		height: 554px;
		background-image: url(../assets/passport-banner.jpg);
		background-repeat: no-repeat;
		background-position: top center;
	}

	.content-box {
		width: 1200px;
		height: 604px;
		color: #684029;
		font-size: 12px;
		padding-bottom: 50px;
		position: relative;
		margin: 0 auto;
	}
	.login-form-box {
		position: absolute;
		width: 388px;
		top: 114px;
		right: 0;
		padding: 28px 42px;
		border: 1px #E9E9E9 solid;
		background: #fff;
	}
	
	.login-nav {
		display: flex;
	}

	.login-nav a {
		font-size: 18px;
		color: #c9c9c9;
		text-decoration: none;
		display: inline-block;
		width: 150px;
		height: 25px;
		line-height: 25px;
	}
	.login-nav .current{
		color: #482618;
	}
	.login-nav a:first-of-type {
		border-right: 1px solid #DCDCDC;

	}
</style>
