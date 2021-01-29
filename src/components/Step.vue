<template>
	<div class="step">
		<button @click="num--">-</button>
		<span>{{num}}</span>
		<button @click="num++">+</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
			}
		},
		methods:{
			myfun(){},
		},
		// 仅仅初始化 基本事件和生命周期钩子
		beforeCreate(){
			console.log('组建创建之前',this.num,this.myfun);
		},
		//  执行 注入工作data或者
		created(){
			console.log('组建创建了',this.$el);
		},
		beforeMount(){
			console.log('组建渲染之前',this.$el);
		},
		mounted(){
			console.log('组建渲染了');
		},
		beforeUpdate(){
			console.log('组建更新之前');
		},
		updated(){
			console.log('组建更新了');
		},
		beforeDestroy(){
			console.log('组建删除之前');
		},
		destroyed(){
			console.log('组建删除了');
		},
	}
</script>

<style>
</style>
<!-- 从组建的创建，到组建的销毁过程 每一个阶段都有一组对应的函数，称为生命周期函数
 生命周期函数是由框架自行调用 不需要用户调用-->