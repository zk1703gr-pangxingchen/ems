<!-- html部分 -->
<template>
	<div>
		<div id="d" :style="{background:$store.state.color}"></div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
#d{
	border: 1px solid #0000FF;
	width: 300px;
	height: 300px;
	display: inline-block;
}
</style>
