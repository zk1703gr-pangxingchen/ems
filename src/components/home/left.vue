<!-- html部分 -->
<template>
	<div id="app" style="height: 100%;text-align: left;">	
		<el-menu>
			<div v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show='!obj.children'  :index='obj.index' @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for='item in obj.children' :index='item.index' @click='fn(item)'>
						{{item.text}}
					  </el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</div>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/center'},
						 {text:'人员信息',index:'1022',url:'/baseUser'},
						 {text:'设备类别',index:'1023',url:'/basedevtype'},
						 {text:'设备信息',index:'1024',url:'/baseDevice'},
						 {text:'流程信息',index:'1025',url:'/baseFlow'},
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'/produceReport'},
					 	 {text:'中控',index:'1035',url:'/Control'},
					 	 {text:'流程控制',index:'1032'},
					 	 {text:'故障信息',index:'1033',url:'/produceFault'},
					 	 {text:'维修信息',index:'1034',url:'/produceRepair'},
					 	 {text:'作业信息',index:'1035',url:'/produceJob'}
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'能耗信息',index:'1041',url:'/energyConsume'},
					 	 {text:'折标煤系数',index:'1042',url:'/energyStandradcoal'}
					 ]},
					 {text:'作业信息',index:'105',children:[
					 	 {text:'作业量信息',index:'1051',url:'/JobAmount'},
					 	 {text:'作业时间信息',index:'1052'},
					 	 {text:'故障信息',index:'1053'}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061'},
					 	 {text:'实时监控',index:'1062'},
					 	 {text:'异常处理',index:'1063'}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071'}
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'港口能耗对比',index:'1081',url:'/devinfo'},
					 	 {text:'成本核算信息',index:'1082',url:'/devinfo1'},
					 	 {text:'设备运行信息',index:'1083',url:'/devinfo2'}
					 ]},
					 {text:'模型建立与展示',index:'109',children:[
					 	 {text:'企业用能模型',index:'1091',url:'/Consume'},
					 	 {text:'企业产销模型',index:'1092',url:'/EnergyModel'},
					 ]},
					 {text:'企业数据采集',index:'1010',children:[
					 	 {text:'数据采集',index:'10101'},
					 ]},
				]

			};
		},
		methods:{
			fn(obj){
				//路由跳转
				this.$router.push({path:obj.url});
				// 创建tag对象
				var obj ={name:obj.text,type:'warning',url:obj.url};
				//添加到tag中
				this.$store.commit('addtag',obj);
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #f4f4f4;
	height: 100%;
}
</style>
					 