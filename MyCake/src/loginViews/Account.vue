<template>
	<div>
		<div class="middle">
			<el-input class="inp" placeholder="请输入您的账号" v-model="acInput" ref="username" clearable></el-input>
			<el-input class="psw" placeholder="请输入密码" v-model="pswInput" ref="password" show-password></el-input>
			<button class="btn" @click="check">登录</button>
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
	import axios from "axios"
	
	export default{
		name:"Account",
		data(){
			return {
				acInput:'',
				pswInput:''
			}
		},
		methods: {
			check: function() {
				let username = this.$refs.username.value;
				let passwd = this.$refs.password.value;
				if(username != '' && username != ''){
					// ajax请求
					// alert("ajax请求");
					axios.post("http://localhost:8888/login",{
						passwd,
						username
					}).then((response)=>{
						console.log(response.data);
						if(response.data.login==1){
							// this.$store.commit("change");
							localStorage.setItem("isLogin",true);
							localStorage.setItem("userID",response.data.userID);
							localStorage.setItem("userName",response.data.userName);
							
							// this.$router.push({path:"/"});
							location.reload(this.$router.push({path:"/"}));
						}else if(response.data.login==0){
							alert("您输入的密码错误");
						}else{
							alert("账号不存在,请先注册");
							this.$router.push({path:"/register"});
						}
					}).catch(function(error){
						console.log(error);
					})
				}else{
					if (username == '') {
						this.userFlag = true;
					}else{
						this.userFlag = false;
					}
					if (passwd == '') {
						this.pswFlag = true;
					}else{
						this.pswFlag = false;
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
		width: 302px;
		height: 38px;
		margin-bottom: 42px;
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
	.middle .btn:focus{
		outline: none;
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
