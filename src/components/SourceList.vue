<template>
	<div class="rg--sourcelist">
		<h1>{{ msg }}</h1>
		<SourceItem 
			v-for="item in sourceItems"
			:key="item.id">
		</SourceItem>
	</div>
</template>

<script>
import SourceItem from './SourceItem'

export default {
	name: 'sourcelist',
	components: {
		SourceItem
	},
	data: function () {
		return {
			msg: 'This is the sourcelist',
			sourceItems: [
				{ 
					id: 1,
					title: 'source1',
					unreadCount: 99
				},
				{
					id: 2,
					title: 'source2',
					unreadCount: 42
				}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rg--sourcelist {
	min-width: 400px;
	max-width: 400px;
	background: #0f0;
}
</style>
