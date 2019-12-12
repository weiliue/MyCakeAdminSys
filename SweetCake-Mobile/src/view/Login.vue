<template>
	<div class='main'>

		<!-- 头部 -->
		<div class="top">
			<p class="title"> <span @click="ret()"><img class='nav' src="../assets/images/nav_icon.png" alt=""></span>
				<span>登录</span>
				<span @click="zhuc()">注册</span>
			</p>

		</div>

		<!-- 中间 -->
		<div class="center">
			<div class="center1">
				手机号：<input type="text" v-model="phone">
			</div>
			<div class="center1">
				密 &nbsp; 码：<input type="password" v-model="password">
			</div>
			<p class="pw">忘记密码</p>
			<button @click="login()">登录</button>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				phone: '',
				password: ''
			}
		},
		methods: {
			login() {
				var reg = /^1[3-9][0-9]{9}$/;
				if (this.phone == "" || this.password == "" || this.code == false) {
					alert("手机号或密码不能为空");
				} else if (!reg.test(this.phone)) {
					alert("请输入正确手机号");
				} else if (this.password.length < 6) {
					alert("至少六位数");
				} else {
					this.$http({
						url: "http://localhost:8888/login",
						params: {
							phone: this.phone,
							passwd: this.password
						}
					}).then(res => {
						console.log(res);
						if (res.data.msg === '登录成功') {
							alert('登录成功')
							this.$router.push('./mine')
							localStorage.setItem("isLogin",true);
							localStorage.setItem("userID",res.data.userID);
						} else {
							alert('账号或密码错误')
						}
					});
				}

			},

			ret() {
				this.$router.push('/mine')
			},

			zhuc() {
				this.$router.push({
					path: '/register'
				})
			}
		}
	}
</script>

<style scoped>
	.main {
		/* margin-left: -8px 0 0 -8px !important; */
		width: 100%;
	}

	.top {
		width: 100%;
		background: #FDC687;
		margin-top: -3rem;
	}

	.title {
		margin: -8px !important;
		padding: 10px;
	}

	.top p {
		background: #FDC687;
		display: flex;
		height: 45px;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		padding: 1rem;

	}

	.nav {
		widows: 15px;
		height: 20px;
	}

	.center {
		padding-top: 100px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	.center1 {
		border-bottom: 2px solid #a3a3a3;
		padding: 24px;
		font-size: 18px;
		color: #333;
		margin-top: 1.5rem;
		margin-left: 2.2rem;
		margin-right: 2.2rem;
	}

	.center1 input {
		vertical-align: center;
		height: 33px;
		width: 160px;
		font-size: 18px;
		border: none;
		outline: none;
	}

	.center1 span {
		font-size: 18px;
		color: #fe0041;
		float: right;
	}

	.center button {
		width: 18rem;
		height: 2.6rem;
		background: #ECA24E;
		line-height: 2.6rem;
		text-align: center;
		border-radius: 10px;
		border: none;
		color: #fff;
		font-size: 30px;
		margin: 0 auto;
	}

	.pw {
		margin: 2rem 0rem 2rem 16rem;
	}
</style>
