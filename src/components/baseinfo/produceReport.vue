<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 30px;">报岗信息</h1>
		<hr/>
		<div class="asa">		
			<el-input v-model="search_shipname" placeholder="船队名称" style="width: 160px;"></el-input>
			<!-- <el-select v-model="search_devid" placeholder="请选择设备ID">
				<el-option
				  v-for="item in options"
				  :label="item.devname"
				  :value="item.devid">
				</el-option>
			 </el-select> -->
			<el-button  @click="search()">查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		<div>
			 <el-table :data="tableData" border style="width: 100%">
				<el-table-column
				  v-for="{ prop, label } in arr"
				  :key="prop"
				  :prop="prop"
				  :label="label">
				</el-table-column>
				<el-table-column  fixed="right"  label="操作"  width="200">
				  <template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
					<el-button type="text" size="small" @click="del(scope.row.reportid)">删除</el-button>
				  </template>
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
				arr : [
				  { prop: 'reportid', label: 'ID' },
				  { prop: 'shipname', label: '船队名称' },
				  { prop: 'capacity', label: '装载量（吨）' },
				  { prop: 'planjobtime', label: '预计到港时间' },
				  { prop: 'startjobtime', label: '实际到港时间' },
				  { prop: 'completetime', label: '完成时间' },
				  { prop: 'flowname', label: '流程' },
				  { prop: 'reportuser', label: '报岗人' },
				  { prop: 'compname', label: '所属企业' },
				],
				tableData:[],
				search_shipname:''
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/produceReportadd'})
			},
			handleClick(row){
				this.$router.push({name:'produceReportupdate',params:{reportid:row.reportid}})
			},
			del(reportid){
				// 后端网址
				var url = this.baseUrl+"/produceReport/delete"
				// 传递给后端的数据
				var data = {reportid:reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 // this.search("删除成功");
					this.$message("删除成功") 
				})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/search"
				// 传递给后端的数据
				var data = {shipname:this.search_shipname};
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
			// 后端网址
			var url = this.baseUrl+"/produceReport/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 this.tableData=res.data
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
