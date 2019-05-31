<!-- html部分 -->
<template>
	<div id="app">
		<div id="app" style="margin-top: 50px;">
			<el-input style='width: 180px;' v-model='flowname'placeholder="请输入流程名称"></el-input>
			
			<el-select v-model="dljid" placeholder="请选择斗轮机">
				<el-option
				  v-for="item in options"
				  :label="item.devname"
				  :value="item.devid">
				</el-option>
			 </el-select>
			 
			 <el-select v-model="zcjid" placeholder="请选择装船机">
			 	<el-option
			 	  v-for="item in options1"
			 	  :label="item.devname"
			 	  :value="item.devid">
			 	</el-option>
			  </el-select>
			  
			  <el-select v-model="pdjid" placeholder="请选择皮带机">
			  	<el-option
			  	  v-for="item in options2"
			  	  :label="item.devname"
			  	  :value="item.devid">
			  	</el-option>
			   </el-select>
			<el-button @click='over' >编辑成功</el-button> 
			<el-button @click='back' >返回</el-button>   
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				flowid:'',
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				options:[],
				options1:[],
				options2:[],
				compid:''
				
			};
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			over(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/update"
				// 传递给后端的数据
				var data = {flowid:this.flowid,flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("编辑完成")
					// 路由跳转
					this.$router.push({path:'/baseFlow'})
				})
			}
		},
		mounted:function(){
			// 接受路由传递数据
			var flowid = this.$route.params.flowid
				// 后端网址
			var url = this.baseUrl+"/baseFlow/load"
			// 传递给后端的数据
			var data = {flowid:flowid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 var obj = res.data
				 this.flowid = obj.flowid
				 this.dljid = obj.dljid
				 this.zcjid = obj.zcjid
				 this.pdjid = obj.pdjid
				 this.flowname = obj.flowname
				 this.compid = obj.compid
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findDljByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 this.options=res.data
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findCzjByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 this.options1=res.data
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findPdjByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				 this.options2=res.data
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
