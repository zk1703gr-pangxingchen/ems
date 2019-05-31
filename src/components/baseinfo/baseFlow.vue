<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 30px;">流程信息</h1>
		<hr/>
		<div class="asa">		
			<el-input v-model="search_flowname" placeholder="流程名称" style="width: 160px;"></el-input>
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
					<el-button type="text" size="small" @click="del(scope.row.flowid)">删除</el-button>
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
				  { prop: 'flowid', label: 'ID' },
				  { prop: 'flowname', label: '流程名称' },
				  { prop: 'dljname', label: '斗轮机' },
				  { prop: 'zcjname', label: '装船机' },
				  { prop: 'pdjname', label: '皮带机' },
				  { prop: 'compname', label: '企业名称' }
				],
				tableData:[],
				search_flowname:''
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/baseFlowadd'})
			},
			del(flowid){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/delete"
				// 传递给后端的数据
				var data = {flowid:flowid};
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
				this.$router.push({name:'baseFlowupdate',params:{flowid:row.flowid}})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/search"
				// 传递给后端的数据
				var data = {flowname:this.search_flowname};
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
		mounted:function() {
			// 后端网址
			var url = this.baseUrl+"/baseFlow/list"
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
