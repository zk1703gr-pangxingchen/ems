<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 30px;">设备信息</h1>
		<hr/>
		<div class="asa">		
			<el-input v-model="search_devname" placeholder="设备名称" style="width: 160px;"></el-input>
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
					<el-button type="text" size="small" @click="del(scope.row.devid)">删除</el-button>
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
				  { prop: 'devid', label: 'ID' },
				  { prop: 'devname', label: '设备名称' },
				  { prop: 'baseDevtype.typename', label: '设备类别' },
				  { prop: 'baseCompany.compname', label: '所属企业' },
				  { prop: 'devdate', label: '投入时间' },
				  { prop: 'devuser', label: '责任人'}
				],
				tableData:[],
				search_devname:''
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/baseDeviceadd'})
			},
			handleClick(row){
				this.$router.push({name:'baseDeviceupdate',params:{devid:row.devid}})
			},
			del(devid){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/delete"
				// 传递给后端的数据
				var data = {devid:devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					 this.search("删除成功");
				})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/search"
					// 传递给后端的数据
				var data = {devname:this.search_devname};
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
// 			var url = this.baseUrl+"/baseDevice/list"
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
