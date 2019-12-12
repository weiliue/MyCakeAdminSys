<template>
	<div class="login-form-box">
		<div class="middle">
			<el-input class="inp" ref="adminname" placeholder="请输入账号(3-6位的字母/数字/下划线)" v-model="phInput"></el-input>
			<el-input class="inp" type="password" ref="password1" v-model="pass1"
				placeholder="密码：请输入6～16字符，需同时包含英文和数字"></el-input>
			<el-input class="inp psw" type="password" ref="password2" v-model="pass2" placeholder="确认密码"></el-input>
			<p v-if="!match" class="match">两次密码不一致</p>
		</div>
		<div class="bottom">
			<button class="btn" @click="register">注册</button>
		</div>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	export default {
		name: "Register",
		data() {
			return {
				phInput: '',
				pass1: '',
				pass2: '',
				match: true
			}
		},
		methods: {
			register() {
				let name = this.$refs.adminname.value;
				let passwd1 = this.$refs.password1.value;
				let passwd2 = this.$refs.password2.value;
				let unReg = /^\w{3,6}$/ig;
				let pswReg = /^(?=.*\d+)(?=.*[a-z]+).{6,16}$/;
				if (!unReg.test(name)) {
					alert("用户名格式不正确");
					return;
				}
				if (!pswReg.test(passwd1)) {
					alert("密码格式不正确");
					return;
				}
				if (passwd1 != passwd2) {
					this.match = false;
					return;
				} else {
					this.match = true;
					let passwd = passwd2;
					this.$http.post("http://localhost:8888/adminRegister", {
						name,
						passwd
					}).then((response) => {
						console.log(response);
						// 后台返回true，代表注册成功
						if (response.data.flag) {
							alert("恭喜你，注册成功");
							this.$router.push({ path: "/account" });
						} else { //返回false，代表用户名已存在
							alert("用户名已存在");
						}
					}).catch(function (error) {
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
 
	.login-form-box {
		position: absolute;
		width: 388px;
		top: 80px;
		right: -1px;
		padding: 28px 42px;
		border: 1px #E9E9E9 solid;
		background: #fff;
	}

	.middle .inp {
		 
		color: #999693;
		margin-bottom: 10px;
		border-radius: 2px;
		padding: 0 5px;
		outline: none;
	}

	.middle .psw {
		width: 302px;
		height: 38px;
		margin-bottom: 42px;
	}

	.middle .match {
		color: red;
	}

	.bottom {
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
		background-color: #ff4001;
		color: #FFFFFF;
		font-size: 20px;
		padding: 0 5px;
		border: none;
		border-radius: 2px;
		cursor: pointer;
	}
</style>