<template>
	<div class="rg--sourceitem">
		<div>{{ sourceTitle }}</div>	
		<div>{{ unreadCount }}</div>	
	</div>
</template>

<script>
export default {
	name: 'sourceitem',
	data: function () {
		return {
			sourceTitle: 'SOURCETITLE',
			unreadCount: 99	
		}
	}
}
</script>

<style scoped>
.rg--sourceitem {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 40px;
}
</style>
