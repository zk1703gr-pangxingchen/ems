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
		 <el-input v-model="cost" placeholder="请输入故障原因" style="width: 220px;"></el-input>
		  <div class="block">
		 	<el-date-picker
		 	  value-format="yyyy-MM-dd"
		 	  v-model="repairdate"
		 	  type="date"
		 	  placeholder="选择日期">
		 	</el-date-picker>
		 </div>
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
				devid:'',
				options:[],
				repairdate:'',
				cost:'',
				repairid:'',
				cause:''
			};
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			over(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,cost:this.cost,repairid:this.repairid,repairdate:this.repairdate,cause:this.cause};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("编辑完成")
					// 路由跳转
					this.$router.push({path:'/produceRepair'})
				})
			}
		},
		mounted:function(){
			var repairid = this.$route.params.repairid
			// 后端网址
			var url = this.baseUrl+"/produceRepair/load"
			// 传递给后端的数据
			var data = {repairid:repairid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 回显传递过来的数据
				var obj = res.data
				this.repairid=obj.repairid;
				this.devid = obj.devid;
				this.repairdate = obj.repairdate;
				this.cost = obj.cost;
				this.cause = obj.cause;
			})
			
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
