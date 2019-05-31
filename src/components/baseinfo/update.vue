<!-- html部分 -->
<template>
	<div id="app">
		<el-input style='width: 180px;' v-model='compname'></el-input>
		<el-input style='width: 180px;' v-model='contacts'></el-input>
		<el-input style='width: 180px;' v-model='comptel'></el-input>
		<el-input style='width: 180px;' v-model='industry'></el-input>
		<el-input style='width: 180px;' v-model='address'></el-input>
		<el-button @click='over' >编辑成功</el-button>
		<el-button @click='back' >返回</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				compid:'',
				compname:'',
				contacts:'',
				comptel:'',
				industry:'',
				address:''
			};
		},
		methods:{
			over(){
				// 后端网址
				var url = this.baseUrl+"/baseCompany/update"
				// 传递给后端的数据
				var data = {compid:this.compid,compname:this.compname,contacts:this.contacts,comptel:this.comptel,industry:this.industry,address:this.address};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("编辑成功");
					this.$router.push({path:'center'})
					
				})
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function() {
			// 接收路由传递的数据
				var row = this.$route.params.row
				// 回显传递过来的数据
				this.compid = row.compid
				this.compname = row.compname
				this.contacts = row.contacts
				this.comptel = row.comptel
				this.industry = row.industry
				this.address = row.address
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
