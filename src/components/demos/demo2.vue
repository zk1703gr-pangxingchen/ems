<!-- html部分 -->
<template>
	<div id="app">
		<el-select v-model='v1' placeholder="请选择" @change="v2=''">
			<el-option v-for="(obj,index) in arr" :value="index" :label="obj.label"></el-option>
		</el-select>
		<el-select v-model='v2' placeholder="请选择">
			<el-option v-for="(obj,index) in arr[v1].children" :value="obj.value" :label="obj.label"></el-option>
		</el-select>
		<el-input style="width: 150px;" v-model='sf'></el-input>
		<el-button @click="fn1">添加省份</el-button>
		<el-input style="width: 150px;" v-model='cs'></el-input>
		<el-button @click='fn2'>添加城市</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				v1:0,
				v2:'',
				sf:'',
				cs:'',
				arr:[
					{label:'河南',value:'p01',children:[{label:'周口',value:'c01'}]},
					{label:'河北',value:'p02',children:[{label:'保定',value:'c02'}]},
					{label:'安徽',value:'p03',children:[{label:'淮北',value:'c03'}]}
				]
			};
		},
		methods:{
			fn1(){
				// 将省份输入框的内容封装成对象
				var arr = this.sf.split(",")
				var obj ={label:arr[1],value:arr[0],children:[]}
				// 存入数组中
				this.arr.push(obj)
				this.sf=''
			},
			fn2(){
				// 将城市输入框的内容封装成对象
				var arr = this.cs.split(",")
				var obj = {label:arr[1],value:arr[0]}
				this.arr[this.v1].children.push(obj)
				this.cs=''
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
