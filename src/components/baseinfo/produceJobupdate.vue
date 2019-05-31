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
		 <div class="block">
			<el-date-picker
			  v-model="starttime"
			  type="datetime"
			  value-format="yyyy-MM-dd-HH-mm-ss"
			  placeholder="选择日期时间">
			</el-date-picker>
		  </div>
		   <div class="block">
			<el-date-picker
			  v-model="completetime"
			  type="datetime"
			  value-format="yyyy-MM-dd-HH-mm-ss"
			  placeholder="选择日期时间">
			</el-date-picker>
		   </div>
		   <el-input v-model="duration" placeholder="运行时长" style="width: 220px;"></el-input>
		   <el-input v-model="amount" placeholder="作业量" style="width: 220px;"></el-input>
		   <el-input v-model="reportid" placeholder="报岗id" style="width: 220px;"></el-input>
		   <el-button @click='over'>编辑完成</el-button> 
		   <el-button @click='back'>返回</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				jobid:'',
				devid:'',
				options:[],
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:''
			};
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			over(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/update"
				// 传递给后端的数据
				var data = {jobid:this.jobid,devid:this.devid,starttime:this.starttime,completetime:this.completetime,duration:this.duration,
							amount:this.amount,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("编辑完成")
					// 路由跳转
					this.$router.push({path:'/produceJob'})
				})
			}
		},
		mounted:function(){
			var jobid = this.$route.params.jobid
			// 后端网址
			var url = this.baseUrl+"/produceJob/load"
			// 传递给后端的数据
			var data = {jobid:jobid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 回显传递过来的数据
				var obj = res.data
				this.jobid = obj.jobid;
				this.devid = obj.devid;
				this.starttime = obj.starttime
				this.completetime = obj.completetime;
				this.duration = obj.duration;
				this.amount = obj.amount;
				this.reportid = obj.reportid;
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
