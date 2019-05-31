<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<el-container>
		  <el-header>
			  <top></top>
		  </el-header>
		  <el-container>
			<el-aside width="200px">
				<left></left>
			</el-aside>
			<el-main>
				<Main></Main>
			</el-main>
		  </el-container>
		</el-container>
	</div>
</template>
<!-- js部分 -->
<script>
	import left from './left'
	import Main from './Main'
	import top from './top'
	export default {
		components:{left,Main,top},
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container.is-vertical{
	  height: 100%;
  }
</style>
