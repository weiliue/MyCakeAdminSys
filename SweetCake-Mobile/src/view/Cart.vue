<template>
	<div class='main'>
		<!-- top区域 -->
		<div class='header'>
			<span class="car"><i class="el-icon-arrow-left"></i></span>
			<span class="car1">购物车</span>
		</div>

		<!-- 商品信息 -->

		<div class='carbox'>
			<div class='items'>
				<div class='pro'>
					<img class='goodsimg' src='../assets/images/cake.jpg' />
					<div class='info'>
						<p>蛋糕详细信息蛋糕详细信息蛋糕详细信息蛋糕详细信息</p>
						<div class="money">
							<p>价格</p>
							<div class='btn'>
								<button>-</button>
								<span class="num">5</span>
								<button>+</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'Cart'

	}
</script>

<style>
	
	.header {
		font-size: 1.6rem
	}

	.car1 {
		margin-left: 8rem;
	}

	.carbox {
		margin-top: 1.5rem;
	}

	.items {
		margin-bottom: 1rem;
		border: 0.1rem solid red;
	}

	.pro {
		width: 20.5rem;
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
	}

	.goodsimg {
		width: 7rem;
		height: 7rem;
		padding: 0.5rem;
		margin-left: -1rem;
	}
	.info{
		width: 80%;
	}

	.money {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.num{
		margin: 0 1.5rem;
	}
</style>