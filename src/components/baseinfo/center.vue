<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 25px;">企业信息</h1>
		<hr/>
		<div class="asa">
						
						<el-input v-model="search_compname" placeholder="请输入公司名字" style="width: 160px;"></el-input>
						<el-input v-model="search_industry" placeholder="请输入行业"style="width: 160px;"></el-input>
						<el-button  @click="search()">查询</el-button>
						<el-button @click='add'>新增</el-button>
		</div>
		<div>
			 <el-table :data="tableData" border style="width: 100%;">
				 <el-table-column fixed prop="compid" label="id" width="80">
				 </el-table-column>
				 <el-table-column prop="compname" label="公司名称" width="200">
				 </el-table-column>
				
				<el-table-column prop="contacts" label="联系人" width="200">
				</el-table-column>
				<el-table-column prop="comptel" label="联系电话"  width="200">
				</el-table-column>
				<el-table-column  prop="industry"  label="行业"  width="200">
				</el-table-column>
				<el-table-column  prop="address"  label="地址"  width="200">
				</el-table-column>
				<el-table-column  fixed="right"  label="操作"  width="200">   <!-- 是这个的问题 -->
				  <template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="mini">编辑</el-button>
					<el-button type="text" size="mini" @click='del(scope.row.compid)'>删除</el-button>
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
				search_compname:'',
				search_industry:'',
				tableData:[]
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/add'})
			},
			del(compid){
				// 后端网址
				var url = this.baseUrl+"/baseCompany/delete"
				// 传递给后端的数据
				var data = {compid:compid};
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
				this.$router.push({name:'update',params:{row:row}})
				},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseCompany/search"
					// 传递给后端的数据
				var data = {compname:this.search_compname,industry:this.search_industry};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						this.tableData=res.data;
						
				})
			}
			
		},
		mounted:function(){
				// 后端网址
// 				var url = this.baseUrl+"/baseCompany/list"
// 				this.$axios.post(url,{
// 					headers: {
// 						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// 					}
// 				}).then(res=>{
// 						this.tableData=res.data;
// 				})
				this.search()
		}
	}
</script>
<!-- css部分 -->
<style>
/* .block{
	text-align: left;
} */
</style>
