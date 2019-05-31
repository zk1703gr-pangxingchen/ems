<!-- html部分 -->
<template>
	<div id="app">
		<div id="app" style="margin-top: 50px;">
			<el-input style='width: 180px;' v-model='devname'placeholder="请输入设备名称"></el-input>
			
			<el-select v-model="typeid" placeholder="请选择设备类别">
				<el-option
				  v-for="item in options"
				  :label="item.typename"
				  :value="item.typeid">
				</el-option>
			 </el-select>
			 
			 <el-select v-model="compid" placeholder="请选择企业名称">
			 	<el-option
			 	  v-for="item in options1"
			 	  :label="item.compname"
			 	  :value="item.compid">
			 	</el-option>
			  </el-select>
			  <!-- <el-input style='width: 180px;' v-model='devdate'placeholder="请输入时间"></el-input> -->
			  <div class="block">
				<el-date-picker
				  value-format="yyyy-MM-dd"
				  v-model="devdate"
				  type="date"
				  placeholder="选择日期">
				</el-date-picker>
			  </div>
			  <el-input style='width: 180px;' v-model='devuser'placeholder="请输入责任人"></el-input>
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
				devid:'',
				devname:'',
				options:[],
				options1:[],
				devdate:'',
				devuser:'',
				typeid:'',
				compid:''
			};
		},
		methods:{
			over(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/insert"
				// 传递给后端的数据
				var data ={devid:this.devid,devname:this.devname,devdate:this.devdate,devuser:this.devuser,typeid:this.typeid,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseDevice'});
				})
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.options=res.data;
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.options1=res.data;
			})
		}
		
	}
</script>
<!-- css部分 -->
<style>

</style>
