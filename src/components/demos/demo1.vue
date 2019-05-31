<!-- html部分 -->
<template>
	<div id="app">
		<el-steps :active="active" finish-status="success">
		  <el-step title="步骤 1"></el-step>
		  <el-step title="步骤 2"></el-step>
		  <el-step title="步骤 3"></el-step>
		  <el-step title="步骤 4"></el-step>
		</el-steps>
		<div v-show="active==0">
			<el-input style="width: 150px;" v-model="msg" ></el-input>
		</div>
		<div v-show="active==1">
			<el-checkbox-group v-model="checkList">
			<el-checkbox label="1">java</el-checkbox>
			<el-checkbox label="2">vue</el-checkbox>
			<el-checkbox label="3">数据库</el-checkbox>
		  </el-checkbox-group>
		</div>
		<div v-show="active==2">
			<el-radio v-model="radio" label="1">男</el-radio>
			<el-radio v-model="radio" label="2">女</el-radio>
		  </el-checkbox-group>
		</div>
		<h1 v-show="active==3">这是最后一步</h1>
		<el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
		<el-button style="margin-top: 12px;" type="primary" @click="next">下一步</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				active:0,
				msg:'',
				checkList:[],
				radio:''
			};
		},
		methods:{
			next() {
				if(this.msg){
					++this.active==4?this.active=0:'';
					this.msg==''
				}else{
					this.$message("请输入内容")
				}
				// if (this.active++ > 2) this.active = 0;
		  },
		  pre() {
			  if(this.active==0){
				  
			  }else{
				  this.active--;
			  }
			 
		  }
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
