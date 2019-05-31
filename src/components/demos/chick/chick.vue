<!-- html部分 -->
<template>
	<div id="app">
		<h1>最萌的小鸡</h1>
		<h2>这是一个父组件</h2>
		<el-button @click='fn'>小天</el-button>
		<el-button @click='fn1'>小王</el-button>
		<router-view/>
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
			fn(){
				this.$router.push({path:'/chick/chick1'})
			},
			fn1(){
				this.$router.push({path:'/chick/chick2'})
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
