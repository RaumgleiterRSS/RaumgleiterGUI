<template>
	<div class="rg--articlelist">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'articlelist',
	data: function () {
		return {
			msg: 'This is the article list'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rg--articlelist {
	width: 100%;
	background: #f00;
}
</style>
