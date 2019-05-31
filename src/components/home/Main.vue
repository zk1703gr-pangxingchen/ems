<!-- html部分 -->
<template>
	<div>
		<!-- tag标签 -->
		<div style="text-align: left;">
			<el-tag v-for="(tag,index) in $store.state.tags" 
			:key="tag.name" closable :type="tag.type" 
			style="margin-left: 10px;" @click='fn(tag,index)'@close="del(tag,index)">
			  {{tag.name}}
			</el-tag>
			<router-view/>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn(tag,index){
				//路由跳转
				this.$router.push({path:tag.url});
				//改变被选中的颜色  type:'warning'
				this.$store.commit('updatetag',index)
			},
			del(tag,index){
				// 只有一个tag对象时
				if(this.$store.state.tags.length==1){
					this.$message("当前只有一个标签,不可删除")
				}else{
					//获取当前tag对象是被选中的
					var falg = this.$store.state.tags[index].type=='warning'
					if(falg){  // 如果type=='warning'
						//如果当前选中的是第一个 index==0
						if(index==0){
							// 更新并跳转
							this.$store.commit('updatetag',index+1)
							this.$router.push({path:this.$store.state.tags[index+1].url})
						}else{  //如果当前选中的不是第一个
							this.$store.commit('updatetag',index-1)
							this.$router.push({path:this.$store.state.tags[index-1].url})
						}
					}
					this.$store.commit('deltag',index)
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
