<!-- html部分 -->
<template>
	<div id="app">
		<!-- <el-table :data="arr" border style="width: 100%">
			<el-table-column fixed prop="name" label="姓名" width="150"></el-table-column> -->
			
			
			
			<el-table :data="tableData">
				<el-table-column
				  v-for="{ prop, label } in colConfigs"
				  :key="prop"
				  :prop="prop"
				  :label="label">
				</el-table-column>
				<el-table-column  fixed="right"  label="操作"  width="200">   <!-- 是这个的问题 -->
				  <template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				  </template>
				</el-table-column>
			 </el-table>

			
			
			
			
		 <!-- </el-table> -->
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			 this.colConfigs = [
				  { prop: 'date', label: '日期' },
				  { prop: 'name', label: '姓名' },
				  { prop: 'address', label: '地址' },
				  
				]
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				  }, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				  }]

			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
