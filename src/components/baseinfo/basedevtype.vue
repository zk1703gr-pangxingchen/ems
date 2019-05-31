<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: left; font-size: 30px;">设备类别</h1>
		<hr/>
		<div class="asa">
						
			<el-input v-model="search_typename" placeholder="员工姓名" style="width: 160px;"></el-input>
			<el-button  @click="search()">查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		<div>
			<el-table :data="tableData" border style="width: 100%;">
				 <el-table-column fixed prop="typeid" label="id" width="300">
				 </el-table-column>
				 <el-table-column prop="typename" label="类别名称" width="300">
				 </el-table-column>
				 <el-table-column  fixed="right"  label="操作"  width="300">   <!-- 是这个的问题 -->
				   <template slot-scope="scope">
				 	<el-button @click="handleClick(scope.row)" type="text" size="mini">编辑</el-button>
				 	<el-button type="text" size="mini" @click='del(scope.row.typeid)'>删除</el-button>
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
				tableData:[],
				search_typename:''
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/search"
					// 传递给后端的数据
				var data = {typename:this.search_typename};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						this.tableData=res.data;
						
				})
			},
			del(typeid){
					// 后端网址
				var url = this.baseUrl+"/baseDevtype/search"
					// 传递给后端的数据
				var data = {typid:typeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						// res是后端的响应
						 this.search("删除成功");
				})
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.tableData=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
