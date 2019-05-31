<!-- html部分 -->
<template>
	<div>
			<span style="text-align: left;color: white;">能耗综合表</span>
			<div style="display: inline-block; float: right;margin-right: 60px;cursor: pointer;">
					<el-col>
						<el-dropdown>
							<span class="el-dropdown-link">
							{{cname}}<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
							<el-dropdown-item icon="el-icon-circle-plus" @click.native='fn'>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
			</div>
			<div style="display: inline-block;float: right;margin-right: 60px;cursor: pointer;">
				{{compname}}
			</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				compname:'',
				cname:'',
				tableData:[]
			};
		},
		methods:{
			fn(){
				this.$router.push({path:'/login'})
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.tableData=res.data;
			})
			
			// 接受路由传递的数据
			var obj = this.$route.params.obj
			this.cname = obj.cname
			this.compname = obj.baseCompany.compname
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
