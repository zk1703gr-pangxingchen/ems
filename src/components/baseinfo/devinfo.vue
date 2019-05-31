<!-- html部分 -->
<template>
	<div>
		 <div class="block">
			<el-date-picker
			  v-model="year"
			  type="year"
			  value-format='yyyy'
			  placeholder="选择年">
			</el-date-picker>
			<el-button  @click="search()">查询</el-button>
		  </div>
		<h1>港口能耗对比图</h1>
		<ve-line :data="chartData1"></ve-line>
		<h1>港口作业量对比图</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		<!-- <h1>设备作业量对比图</h1>
		<ve-histogram :data="chartData3"></ve-histogram> -->
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				chartData1:[],
				chartData2:[]
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/consume"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.chartData1=res.data
				})
				
				// 后端网址
				var url = this.baseUrl+"/devInfo/amount"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.chartData2=res.data
				})
			}
		},
		mounted:function(){
			this.search()
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
