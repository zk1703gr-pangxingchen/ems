import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
	tags: [
	  { name: '首页', type: 'warning',url:'/' }
	],
	tableData: [],
	
	loginflag:false
	      
}
// mutations对象用来存储方法
var mutations = {
	addtag(state,obj){
		// 初始话颜色 type ；"info"
		for(var color of state.tags){
			color.type = 'info'
		}
		// 将tag中的重复处理一下
		for(var color of state.tags){
			if(color.name == obj.name){
				color.type='warning'
				return;
			}
		}
		state.tags.push(obj)
	},
	updatetag(state,index){
		//初始化颜色 type:"info"
		for(var color of state.tags){
			color.type = 'info'
		}
		// 改变被选中的颜色 type:'warning'
		state.tags[index].type='warning'
	},
	//删除tag
	deltag(state,index){
		state.tags.splice(index,1)
	},
	compadd(state,comp){
		state.tableData.push(comp)
	}
// 	compdel(state,company){
// 		for(var i=0;i<state.tableData.length;i++){
// 			if(company==state.tableData[i].company){
// 				state.tableData.splice(i,1)
// 			}
// 		}
// 	}
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})