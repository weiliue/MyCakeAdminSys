<template>
	<div>
		<div class="middle">
			<el-input class="inp" placeholder="请输入您的手机号" v-model="acInput" clearable></el-input>
			<div class="code-box">
				<el-input class="psw" placeholder="短信验证码" v-model="pswInput" show-password></el-input>
				<button class="get-code">获取验证码</button>
			</div>
			<button class="btn">登录</button>
		</div>
		<div class="bottom">
			<div class="left">
				<input type="checkbox" checked="checked">记住账号
			</div>
			<div class="right">
				<router-link to="/account">忘记密码</router-link>
				<router-link to="/register">去注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"MessageCode",
		data(){
			return {
				acInput:'',
				pswInput:''
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	.middle{
		padding-top: 15px;
	}
	.middle .inp {
		width: 302px;
		height: 38px;
		color: #442818;
		margin-bottom: 10px;
	}
	
	.middle .psw {
		width: 140px;
		height: 38px;
		margin-bottom: 42px;
	}
	
	.middle .code-box{
		display: flex;
		justify-content: space-between;
	}
	.middle .get-code:hover{
		outline: none;
	}
	.middle .get-code{
		width: 151px;
		height: 38px;
		font-size: 12px;
		color: #442818;
		border-radius: 2px;
		background-color: #fafafa;
		border: 0;
	}
	.middle .btn {
		width: 302px;
		height: 48px;
		line-height: 48px;
		background-color: #442818;
		color: #FFFFFF;
		font-size: 20px;
		padding: 0 5px;
		border: none;
		border-radius: 2px;
		cursor: pointer;
	}
	.bottom{
		width: 302px;
		padding-bottom: 40px;
		margin-top: 15px;
		font-size: 12px;
		color: #684029;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.bottom a{
		text-decoration: none;
		color: #442818;
	}
	.bottom a:first-of-type{
		margin-right: 7px;
	}
</style>
