<template>
	<div class="pane--left">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'left pane',
	data: function () {
		return {
			msg: 'This is the left Pane'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pane--left {
	min-width: 400px;
	max-width: 400px;
	background: #0f0;
}
</style>
