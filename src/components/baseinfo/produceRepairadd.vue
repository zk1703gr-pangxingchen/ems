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
		 <el-input v-model="cost" placeholder="请输入维修费用" style="width: 220px;"></el-input>
		  <div class="block">
		 	<el-date-picker
		 	  value-format="yyyy-MM-dd"
		 	  v-model="repairdate"
		 	  type="date"
		 	  placeholder="选择日期">
		 	</el-date-picker>
		 </div>
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
				devid:'',
				options:[],
				repairdate:'',
				cause:'',
				cost:''
			};
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			over(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,repairdate:this.repairdate,cause:this.cause,cost:this.cost};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'produceRepair'})
					
				})
			}
		},
		mounted:function(){
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
