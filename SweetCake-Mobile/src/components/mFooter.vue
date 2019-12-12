<template>
	<div class="footer">
		<ul>
			<li>下载app</li>
			<li>联系我们</li>
			<li>全站公告</li>
			<li>生产经营资质</li>
		</ul>
		<p>
			Copyright© 21Cake蛋糕官网商城 2007-2019, <br />
			版权所有 京ICP备14006254号-1<br>
			网站注册公司名称: 北京廿一客食品有限公司
		</p>
	</div>
</template>

<script>
	export default {
		name:"mFooter"
	}
</script>

<style scoped>
	.footer {
		width: 23.4375rem;
		height: 10.1875rem;
		color: #442818;
		font-size: 0.75rem;
		background-color: #414141;
		padding: 1.875rem 0.625rem;
		box-sizing: border-box;
	}
	.footer ul{
		list-style: none;
		display: flex;
		margin-bottom: 1.4375rem;
	}
	.footer ul li{
		height: 1.875rem;
		line-height: 1.875rem;
		color: #979797;
		font-size: 0.75rem;
		text-align: center;
		border: 0.0625rem solid #979797;
		cursor: pointer;
		padding: 0 10px;
		margin-left: 0.375rem;
		flex-grow: 1;
	}
	.footer p{
		text-align: center;
		color: #a0a0a0;
		line-height: 1rem;
	}
</style>
