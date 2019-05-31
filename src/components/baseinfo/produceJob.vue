<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 30px;">作业信息</h1>
		<hr/>
		<div class="asa">		
			<!-- <el-input v-model="search_devid" placeholder="设备名称" style="width: 160px;"></el-input> -->
			<el-select v-model="search_devid" placeholder="请选择设备ID">
				<el-option
				  v-for="item in options"
				  :label="item.devname"
				  :value="item.devid">
				</el-option>
			 </el-select>
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
					<el-button type="text" size="small" @click="del(scope.row.jobid)">删除</el-button>
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
				  { prop: 'jobid', label: 'ID' },
				  { prop: 'devname', label: '设备名称' },
				  { prop: 'starttime', label: '开始作业时间' },
				  { prop: 'completetime', label: '结束作业时间' },
				  { prop: 'duration', label: '运行时长' },
				  { prop: 'amount', label: '作业量' },
				  { prop: 'reportid', label: '报岗id' }
				],
				tableData:[],
				search_devid:'',
				options:[]
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/produceJobadd'})
			},
			del(jobid){
				// 后端网址
				var url = this.baseUrl+"/produceJob/delete"
				// 传递给后端的数据
				var data = {jobid:jobid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.search("删除成功");
					// this.$message("删除成功") 
				})
			},
			handleClick(row){
				this.$router.push({name:'produceJobupdate',params:{jobid:row.jobid}})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/search"
				// 传递给后端的数据
				var data = {devid:this.search_devid};
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
// 			var url = this.baseUrl+"/produceJob/list"
// 			this.$axios.post(url,{
// 				headers: {
// 					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// 				}
// 			}).then(res=>{
// 				// res是后端的响应
// 				 this.tableData=res.data
// 			})
			this.search()
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 this.options=res.data
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
