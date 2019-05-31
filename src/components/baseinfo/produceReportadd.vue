<!-- html部分 -->
<template>
	<div id="app">
		<el-input v-model="shipname" placeholder="请输入船队名称" style="width: 220px;"></el-input>
		<el-input v-model="capacity" placeholder="请输入装载量" style="width: 220px;"></el-input>
		 <div class="block">
			<el-date-picker
			  v-model="planjobtime"
			  type="datetime"
			  value-format="yyyy-MM-dd-HH-mm-ss"
			  placeholder="选择日期时间">
			</el-date-picker>
		  </div>
		<el-select v-model="flowid" placeholder="请选择流程">
			<el-option
			  v-for="item in options1"
			  :label="item.flowname"
			  :value="item.flowid">
			</el-option>
		 </el-select>
		<el-input v-model="reportuser" placeholder="请输入报岗人" style="width: 220px;"></el-input>
		<el-select v-model="compid" placeholder="请选择企业名称">
			<el-option
			  v-for="item in options"
			  :label="item.compname"
			  :value="item.compid">
			</el-option>
		 </el-select>
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
				shipname:'',
				capacity:'',
				planjobtime:'',
				flowid:'',
				reportuser:'',
				compid:'',
				options:[],
				options1:[]
			};
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			over(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,
							flowid:this.flowid,reportuser:this.reportuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'produceReport'})
					
				})
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
				// res是后端的响应
				 this.options=res.data
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseFlow/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 this.options1=res.data
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
