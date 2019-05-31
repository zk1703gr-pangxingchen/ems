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
		<h1>流程能耗对比图</h1>
		<ve-line :data="chartData1"></ve-line>
		<h1>设备类别能耗对比图</h1>  
		<ve-radar :data="chartData2"></ve-radar>
		<h1>设备能耗对比图</h1> 
		<ve-histogram :data="chartData3"></ve-histogram>
		<h1>设备单位作业量耗电量对比图</h1> 
		<ve-line :data="chartData4"></ve-line>
		<h1>设备单位作业量耗水量对比图</h1>
		<ve-histogram :data="chartData5"></ve-histogram>
		<h1>设备单位作业量耗油量对比图</h1>
		<ve-radar :data="chartData6"></ve-radar>
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
				chartData2:[],
				chartData3:[],
				chartData4:[],
				chartData5:[],
				chartData6:[],
			};
		},
		methods:{
			search(){
					// 后端网址
				var url = this.baseUrl+"/energyConsume/flowConsume"
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
				var url = this.baseUrl+"/energyConsume/devTypeConsume"
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
				
					// 后端网址
				var url = this.baseUrl+"/energyConsume/devConsume"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.chartData3=res.data
				})
				
					// 后端网址
				var url = this.baseUrl+"/energyConsume/electricConsume"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.chartData4=res.data
				})
				
					// 后端网址
				var url = this.baseUrl+"/energyConsume/waterConsume"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.chartData5=res.data
				})
				
					// 后端网址
				var url = this.baseUrl+"/energyConsume/oilConsume"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.chartData6=res.data
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
