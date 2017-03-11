<template>
	<div id="app">
		<PaneLeft></PaneLeft>
		<PaneRight></PaneRight>
	</div>
</template>

<script>
import PaneLeft from './components/PaneLeft'
import PaneRight from './components/PaneRight'

export default {
	name: 'app',
	components: {
		PaneLeft,
		PaneRight
	}
}
</script>

<style>
#app {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background: #ddd;
	display: flex;
	align-items: strech;
}
</style>
