<!-- html部分 -->
<template>
	<div id="app" style="height: 100%;">
		<div style="text-align: right;">
			<el-button @click='add'>新增</el-button>
			<el-button>修改</el-button>
		</div>
		<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
			  fixed
			  prop="date"
			  label="日期"
			  width="150">
			</el-table-column>
			<el-table-column
			  prop="name"
			  label="姓名"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop="province"
			  label="省份"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop="city"
			  label="市区"
			  width="120">
			</el-table-column>
			<el-table-column
			  prop="address"
			  label="地址"
			  width="300">
			</el-table-column>
			<el-table-column
			  prop="zip"
			  label="邮编"
			  width="120">
			</el-table-column>
			<el-table-column
			  fixed="right"
			  label="操作"
			  width="400">
			  <template slot-scope="scope">
				<el-button
				  @click.native.prevent="deleteRow(scope.$index, tableData)"
				  type="text"
				  size="small">
				  移除
				</el-button>
			  </template>
			</el-table-column>
		 </el-table>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				  tableData: [{
				  date: '2016-05-03',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}, {
				  date: '2016-05-02',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}, {
				  date: '2016-05-04',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}, {
				  date: '2016-05-01',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}, {
				  date: '2016-05-08',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}, {
				  date: '2016-05-06',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}, {
				  date: '2016-05-07',
				  name: '王小虎',
				  province: '上海',
				  city: '普陀区',
				  address: '上海市普陀区金沙江路 1518 弄',
				  zip: 200333
				}]
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/add'});
			},
			 deleteRow(index, rows) {
				rows.splice(index, 1)
			  }
		},
		mounted:function(){
			if(JSON.stringify(this.$route.params)!="{}"){
				var date = this.$route.params.date;
				var name = this.$route.params.name;
				var province = this.$route.params.province;
				var city = this.$route.params.city;
				var address = this.$route.params.address;
				var zip = this.$route.params.zip;
				console.log(this.$route.params);
				this.tableData.push({date:date,name:name,province:province,city:city,address:address,zip:zip});
			}
			
		}
		
	}
</script>
<!-- css部分 -->
<style>

</style>
