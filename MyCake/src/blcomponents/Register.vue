<template>
	<div class="main-box">
		<div class="content-box">
			<div class="login-form-box">
				<div class="top">
					<h2>用户注册</h2>
				</div>
				<div class="middle">
					<input class="inp" ref="username" placeholder="请输入账号(3-6位的字母/数字/下划线)" v-model="phInput"></input>
					<input class="inp" type="password" ref="password1" v-model="pass1"  placeholder="密码：请输入6～16字符，需同时包含英文和数字"></input>
					<input class="inp psw" type="password" ref="password2" v-model="pass2" placeholder="确认密码"></input>
					<p v-if="!match" class="match">两次密码不一致</p>
				</div>
				<div class="bottom">
					<button class="btn" @click="register">注册</button>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Register",
		data(){
			return {
				phInput:'',
				pass1:'',
				pass2:'',
				match: true
			}
		},
		methods:{
			register(){
				let username = this.$refs.username.value;
				let passwd1 = this.$refs.password1.value;
				let passwd2 = this.$refs.password2.value;
				let unReg = /^\w{3,6}$/ig;
				let pswReg = /^(?=.*\d+)(?=.*[a-z]+).{6,16}$/;
				if(!unReg.test(username)){
					alert("用户名格式不正确");
					return;
				}
				if(!pswReg.test(passwd1)){
					alert("密码格式不正确");
					return;
				}
				if(passwd1 != passwd2){
					this.match = false;
					return;
				}else{
					this.match = true;
					let passwd = passwd2;
					this.$http.post("http://localhost:8888/register",{
						username,
						passwd
					}).then((response)=>{
						console.log(response);
						// 后台返回true，代表注册成功
						if(response.data.flag){
							alert("恭喜你，注册成功");
							this.$router.push({path:"/login"});
						}else{ //返回false，代表用户名已存在
							alert("用户名已存在");
						}
					}).catch(function(error){
						console.log(error);
					})
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
	.middle{
		padding-top: 15px;
	}
	.middle .inp {
		width: 302px;
		height: 38px;
		color: #442818;
		margin-bottom: 10px;
		border: 1px solid #efefef;
		border-radius: 2px;
		padding: 0 5px;
		outline: none;
	}
	.middle .psw {
		width: 302px;
		height: 38px;
		margin-bottom: 42px;
	}
	.middle .match{
		color: red;
	}
	.bottom{
		width: 302px;
		padding-bottom: 40px;
		margin-top: 15px;
		font-size: 12px;
		color: #684029;
		
	}
	.bottom .btn {
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
</style>
