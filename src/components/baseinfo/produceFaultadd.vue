<!-- html部分 -->
<template>
	<div id="app">
		<el-select v-model="devid" placeholder="请选择设备名称">
			<el-option
			  v-for="item in options"
			  :label="item.devname"
			  :value="item.devid">
			</el-option>
		 </el-select>
		<el-input v-model="cause" placeholder="请输入故障原因" style="width: 220px;"></el-input>
		<el-input v-model="faultuser" placeholder="请输入报告人" style="width: 150px;"></el-input>
		<el-input v-model="faulttime" placeholder="故障时间" style="width: 150px;"></el-input>
		 <el-button @click='over'>添加</el-button> 
		 <el-button @click='back'>返回</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				options:[],
				devid:'',
				faulttime:'',
				cause:'',
				faultuser:''
				
			};
		},
		methods:{
			over(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,faultuser:this.faultuser,cause:this.cause,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'produceFault'})
					
				})
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function(){
// 			// 后端网址
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
