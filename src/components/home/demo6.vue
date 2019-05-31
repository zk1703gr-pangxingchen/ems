<!-- html部分 -->
<template>
	<div id="app">
		<!-- <span class="demonstration">完整功能</span> -->
		<el-pagination
		  @size-change="handleSizeChange"
		  @current-change="handleCurrentChange"
		  :current-page="currentPage4"
		  :page-sizes="[100, 200, 300, 400]"
		  :page-size="100"
		  layout="total, sizes, prev, pager, next, jumper"
		  :total="400">
		</el-pagination>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			};
		},
		methods:{
			 handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			  },
			  handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			  }
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
