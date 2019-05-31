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
			<el-button @click='over' >添加</el-button> 
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
				};
		},
		methods:{
			over(){
					// 后端网址
				var url = this.baseUrl+"/baseFlow/insert"
				// 传递给后端的数据
				var data ={flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseFlow'});
				})
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findDljByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.options = res.data
				// console.log(this.options)
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findCzjByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.options1 = res.data
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findPdjByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.options2 = res.data
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
