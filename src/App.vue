<template>
	<div id="rg">
		<SourceList></SourceList>
		<ArticleList></ArticleList>
	</div>
</template>

<script>
import SourceList from './components/SourceList'
import ArticleList from './components/ArticleList'

export default {
	name: 'rg',
	components: {
		SourceList,
		ArticleList
	}
}
</script>

<style>
#rg {
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
