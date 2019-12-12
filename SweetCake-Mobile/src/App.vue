<template>
	<div id="app">
		<div class="space"></div>
		<router-view></router-view>
		<div class="space"></div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		created () {
			document.title="SweetCake"
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0;
		padding: 0;
	}

	* {
		margin: 0;
		padding: 0;
	}

	html {
		font-size: calc(100*100vm/600);
	}

	.space {
		width: 100%;
		height: 3rem;
	}
</style>
