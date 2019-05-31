<!-- html部分 -->
<template>
	<div id="app" style="margin-top: 50px;">
		<el-input style='width: 180px;' v-model='compname'></el-input>
		<el-input style='width: 180px;' v-model='contacts'></el-input>
		<el-input style='width: 180px;' v-model='comptel'></el-input>
		<el-input style='width: 180px;' v-model='industry'></el-input>
		<el-input style='width: 180px;' v-model='address'></el-input>
		<el-button @click='over' >添加</el-button>
		<el-button @click='back' >返回</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				compname:'',
				contacts: '',
				comptel: '',
				industry: '',
				address: ''
			};
		},
		methods:{
			over(){
					// 后端网址
					var url = this.baseUrl+"/baseCompany/insert"
					// 传递给后端的数据
					var data ={compname:this.compname,contacts:this.contacts,comptel:this.comptel,industry:this.industrys,address:this.address};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'/center'});
					})
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
