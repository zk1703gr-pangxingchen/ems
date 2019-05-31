import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/home/index.vue'
import login from '@/components/home/login'

import welcome from '@/components/home/welcome.vue'
import center from '@/components/baseinfo/center.vue'
import add from '@/components/baseinfo/add.vue'
import update from '@/components/baseinfo/update'
import baseUser from '@/components/baseinfo/baseUser'
import baseUseradd from '@/components/baseinfo/baseUseradd'
import baseUserupdate from '@/components/baseinfo/baseUserupdate'
import basedevtype from '@/components/baseinfo/basedevtype'
import baseDevice from '@/components/baseinfo/baseDevice'
import baseDeviceadd from '@/components/baseinfo/baseDeviceadd'
import baseDeviceupdate from '@/components/baseinfo/baseDeviceupdate'
import baseFlow from '@/components/baseinfo/baseFlow'
import baseFlowadd from '@/components/baseinfo/baseFlowadd'
import baseFlowupdate from '@/components/baseinfo/baseFlowupdate'

import produceFault from '@/components/baseinfo/produceFault'
import produceFaultadd from '@/components/baseinfo/produceFaultadd'
import produceFaultupdate from '@/components/baseinfo/produceFaultupdate'

import produceRepair from '@/components/baseinfo/produceRepair'
import produceRepairadd from '@/components/baseinfo/produceRepairadd'
import produceRepairupdate from '@/components/baseinfo/produceRepairupdate'


import produceReport from '@/components/baseinfo/produceReport'
import produceReportadd from '@/components/baseinfo/produceReportadd'
import produceReportupdate from '@/components/baseinfo/produceReportupdate'

import produceJob from '@/components/baseinfo/produceJob'
import produceJobadd from '@/components/baseinfo/produceJobadd'
import produceJobupdate from '@/components/baseinfo/produceJobupdate'



import energyConsume from '@/components/baseinfo/energyConsume'

import energyStandradcoal from '@/components/baseinfo/energyStandradcoal'
import energyStandradcoaladd from '@/components/baseinfo/energyStandradcoaladd'



import JobAmount from '@/components/baseinfo/JobAmount'
import Consume from '@/components/baseinfo/Consume'
import EnergyModel from '@/components/baseinfo/EnergyModel'
import devinfo  from '@/components/baseinfo/devinfo'
import devinfo1  from '@/components/baseinfo/devinfo1'
import devinfo2  from '@/components/baseinfo/devinfo2'




import Control from '@/components/baseinfo/Control'

import center3 from '@/components/home/center3'

import demo3 from '@/components/demos/demo3.vue'
import chick from '@/components/demos/chick/chick.vue'
import chick1 from '@/components/demos/chick/chick1.vue'
import chick2 from '@/components/demos/chick/chick2.vue'

import parent from '@/components/vuex/parent.vue'
import color from '@/components/color/color.vue'



Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
	  { path: '/login', name: 'login', component: login},
		{
		  path: '/', name: 'index', component: index,children:[
				{path:'/',component:welcome},
				{path:'center',component:center},
				{path:'add', name: 'add',component:add},
				{path:'update',name:'update',component:update},
				{path:'baseUser',component:baseUser},
				{path:'baseUseradd', name: 'baseUseradd',component:baseUseradd},
				{path:'baseUserupdate', name: 'baseUserupdate',component:baseUserupdate},
				{path:'basedevtype',component:basedevtype},
				{path:'baseDevice',component:baseDevice},
				{path:'baseDeviceadd', name: 'baseDeviceadd',component:baseDeviceadd},
				{path:'baseDeviceupdate', name: 'baseDeviceupdate',component:baseDeviceupdate},
				{path:'baseFlow',component:baseFlow},
				{path:'baseFlowadd', name: 'baseFlowadd',component:baseFlowadd},
				{path:'baseFlowupdate', name: 'baseFlowupdate',component:baseFlowupdate},
				{path:'produceFault',component:produceFault},
				{path:'produceFaultadd', name: 'produceFaultadd',component:produceFaultadd},
				{path:'produceFaultupdate', name: 'produceFaultupdate',component:produceFaultupdate},
				{path:'produceRepair',component:produceRepair},
				{path:'produceRepairadd',name:'produceRepairadd',component:produceRepairadd},
				{path:'produceRepairupdate',name:'produceRepairupdate',component:produceRepairupdate},
				{path:'produceReport',component:produceReport},
				{path:'produceReportadd',component:produceReportadd,name:'produceReportadd'},
				{path:'produceReportupdate',component:produceReportupdate,name:'produceReportupdate'},
				{path:'produceJob',component:produceJob},
				{path:'produceJobadd',component:produceJobadd,name:'produceJobadd'},
				{path:'produceJobupdate',component:produceJobupdate,name:'produceJobupdate'},
				{path:'energyConsume',component:energyConsume},
				{path:'energyStandradcoal',component:energyStandradcoal},
				{path:'energyStandradcoaladd',component:energyStandradcoaladd,name:'energyStandradcoaladd'},
				{path:'JobAmount',component:JobAmount},
				{path:'Consume',component:Consume},
				{path:'EnergyModel',component:EnergyModel},
				{path:'devinfo',component:devinfo},
				{path:'devinfo1',component:devinfo1},
				{path:'devinfo2',component:devinfo2},
				
				
				
				{path:'Control',component:Control},
			]
		},
		{
		  path: '/demo3', name: 'demo3', component: demo3
		},
		{ 
			path: '/add', name: 'add', component: add
		},
		{ 
			path: '/chick', name: 'chick', component: chick,
			children:[{path:'chick1',component:chick1},{path:'chick2',component:chick2}]
		},
		{ 
			path: '/center3', name: 'center3', component: center3
		},
		{ 
			path: '/parent', name: 'parent', component: parent
		},
		{ 
			path: '/color', name: 'color', component: color
		}
  ]
})
