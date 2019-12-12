<template>
	<div class="main">
		<div class="top">
			<p class='title'>
				<span @click="fanh">
					<img class="nav" src="../assets/images/nav_icon.png" alt />
				</span>
				<span>注册</span>
				<span @click="logi()">登录</span>
			</p>
		</div>

		<div class="center">
			<div class="center1">
				用户名：
				<input type="text" v-model="username" />
			</div>
			<div class="center1">
				手机号：
				<input type="text" v-model="phone" />
			</div>
			<div class="center1">
				密 &nbsp; 码：
				<input type="password" v-model="password" />
			</div>
			<!-- <div class="center1">
				确认密码：
				<input type="text" v-model="code" />
				<span @click="get()">点击获取</span>
			</div> -->
			<button @click="registe()">注册</button>
			<div class="tiaokuan">
				<input type="checkbox" />我已阅读并同意使用条款和隐私政策
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Register",
		data() {
			return {
				username:'',
				phone: "",
				password: ""
			};
		},
		methods: {
			
			// 获取验证码
			// get() {
			// 	var reg = /^1[3-9][0-9]{9}$/;
			// 	if (reg.test(this.phone)) {
			// 		this.$http({
			// 			url: "http://localhost:",
			// 			params: {
			// 				phone: this.phone
			// 			}
			// 		}).then(res => {
			// 			console.log(res);
			// 		});
			// 	} else {
			// 		alert("请输入正确手机号");
			// 	}
			// },

            //返回上一级
			fanh() {
				this.$router.go(-1)
			},
			
			// 跳转到登录
			logi() {
				this.$router.push('./login')
			},

             // 注册
			registe() {
				var params = {
					username:this.username,
					phone: this.phone,
					passwd: this.password
				}
				var reg = /^1[3-9][0-9]{9}$/;
				if (this.phone == "" || this.password == "" || this.code == false) {
					alert("手机号或密码不能为空");
				} else if (!reg.test(this.phone)) {
					alert("请输入正确手机号");
				} else if (this.password.length < 6) {
					alert("至少六位数");
				} else {
					this.$http("http://localhost:8888/register", {
						params: {
							username:this.username,
							phone: this.phone,
							passwd: this.password
						}
					}).then(res => {
					console.log(res);
					if (res.data.msg === '注册成功') {
						alert('注册成功')
						this.$router.push('./mine')
					} else {
						alert('注册失败')
					}
				});
				}
			}
		}
	};
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.main {
		width: 100%;
	}

	.top {
		background: #FDC687;
		margin-top: -3rem;
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

	.title {
		margin: -8px !important;
		padding: 10px;
	}

	.nav {
		widows: 15px;
		height: 20px;
	}

	.center {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
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
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.center .tiaokuan {
		font-size: 18px;
		color: #666;
		margin: 0 auto;
	}

	.center .tiaokuan input {
		width: 30px;
		height: 30px;
		vertical-align: middle;
		margin-right: 15px;
		margin-bottom: 6px;
	}
	
	.pw {
		margin: 2rem 0rem 2rem 16rem;
	}
</style>
