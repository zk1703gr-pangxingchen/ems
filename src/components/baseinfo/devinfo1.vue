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
		 <div>
		 	 <el-table :data="tableData" border style="width: 100%">
		 		<el-table-column
		 		  v-for="{ prop, label } in arr"
		 		  :key="prop"
		 		  :prop="prop"
		 		  :label="label">
		 		</el-table-column>
		 	  </el-table>
		 </div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				arr:[
					{ prop: 'devname', label: '设备名称' },
					{ prop: 'amount', label: '作业量' },
					{ prop: 'consume', label: '能耗（折标煤）' },
					{ prop: 'cost', label: '维修成本' }
				],
				tableData:[]
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/cost"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.tableData=res.data
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
