<template>
	<div class="header">
		<div class="title-box">
			<div class="left">
				<a href="#" class="left-icon">
					<img src="https://static.21cake.com/themes/wap/img/top-icon.png" alt="" class="icon-title">
				</a>
				<div class="location-box">
					<img src="https://static.21cake.com/themes/wap/img/address.png" alt="">
					<span>广州</span>
				</div>
			</div>
			<div class="logo-box">
				<img src="../assets/logo.jpg" alt="">
			</div>
			<div class="right">
				<img src="https://static.21cake.com/themes/wap/img/header_message.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mHeader"
	}
</script>

<style scoped>
	.header{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}
	.title-box{
		width: 23.4375rem;
		height: 3rem;
		line-height: 3rem;
		font-size: 0.75rem;
		color: #442818;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #E1E1E1;
		
	}
	.title-box .left{
		display: flex;
		align-items: center;
	}
	.title-box .left-icon{
		display: inline-block;
		width: 1.125rem;
		height: 0.875rem;
		line-height: 0.875rem;
		margin-left: 0.9375rem;
		text-align: center;
	}
	.title-box .left-icon .icon-title{
		width: 1.125rem;
		height: 0.875rem;
	}
	.title-box .location-box{
		width: 2.5rem;
		height: 1rem;
		margin-left: 0.875rem;
		display: flex;
		align-items: center;
	}
	.title-box .location-box img{
		width: 0.75rem;
		height: 0.9375rem;
		margin-right: 4px;
	}
	.title-box .logo-box{
		width: 1.875rem;
		height: 1.875rem;
	}
	.title-box .logo-box img{
		width: 1.875rem;
		height: 1.875rem;
	}
	.title-box .right{
		display: flex;
		align-items: center;
	}
	.title-box .right img{
		width: 1.1875rem;
		height: 1.1875rem;
		margin-right: 1.5625rem;
	}
</style>
