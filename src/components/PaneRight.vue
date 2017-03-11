<template>
	<div class="pane--right">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'right pane',
	data: function () {
		return {
			msg: 'This is the right Pane'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pane--right {
	width: 100%;
	background: #f00;
}
</style>
