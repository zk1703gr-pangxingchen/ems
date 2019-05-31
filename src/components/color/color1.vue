<!-- html部分 -->
<template>
	<div>
		<el-input style="width: 150px;" v-model='color'></el-input>
		<el-button @click='fn'>更改颜色</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				color:''
			};
		},
		methods:{
			fn(){
				this.$store.commit('changecolor',this.color)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
