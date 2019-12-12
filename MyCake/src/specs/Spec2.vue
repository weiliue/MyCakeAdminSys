<template>
	<div class="spec">
		<span>含10套餐具</span>
		<span>约 17 x 17 x 4 cm</span>
		<span>约920g</span>
		<span>甜度：微甜</span>
	</div>
</template>

<script>
	export default {
		name: "Spec2"
	}
</script>

<style scoped>
	.eat-num .spec{
		width: 551px;
		height: 61px;
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e4dbcd;
	}
	.eat-num .spec span{
		flex-grow: 1;
		text-align: left;
	}
	.eat-num .spec span{
		line-height: 21px;
	}
</style>
