<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 30px;">人员信息</h1>
		<hr/>
		<div class="asa">
						
			<el-input v-model="search_cname" placeholder="员工姓名" style="width: 160px;"></el-input>
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
					<el-button type="text" size="small" @click="del(scope.row.userid)">删除</el-button>
				  </template>
				</el-table-column>
			  </el-table>
		</div>
		<div>
			<!-- <demo6></demo6> -->
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	// import demo6 from './demo6'
	export default {
		// components:{demo6},
		name:'',
		data() {
			return {
				arr : [
				  { prop: 'userid', label: 'ID' },
				  { prop: 'cname', label: '姓名' },
				  { prop: 'username', label: '用户名' },
				  { prop: 'password', label: '密码' },
				  { prop: 'telno', label: '手机号' },
				  { prop: 'email', label: '邮箱' },
				  { prop: 'sex', label: '性别' },
				  { prop: 'baseCompany.compname', label: '所属企业'}
				],
				tableData: [],
				search_cname:''
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/baseUseradd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/search"
					// 传递给后端的数据
				var data = {cname:this.search_cname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						this.tableData=res.data;
						
				})
			},
			del(userid){
				// 后端网址
				var url = this.baseUrl+"/baseUser/delete"
				// 传递给后端的数据
				var data = {userid:userid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.search("删除成功");
				})
			},
			handleClick(row){
				this.$router.push({name:'baseUserupdate',params:{row:row.userid}})
			}
		},
		mounted:function(){
			// 后端网址
// 			var url = this.baseUrl+"/baseUser/list"
// 			this.$axios.post(url,{
// 				headers: {
// 					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// 				}
// 			}).then(res=>{
// 					this.tableData=res.data;
// 			})
			this.search()
		}
		
	}
</script>
<!-- css部分 -->
<style>

</style>
