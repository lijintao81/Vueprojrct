<template>
	<div class="about">
		<h3>简单的计数器</h3>
		<div>
			<button @click="reduce">-</button>
			<span>{{num}}</span>
			<button @click="add">+</button>
		</div>
		<div>
			<h2>事件发生情况</h2>
			<h3><span>普通方法执行了:{{normal()}}</span></h3>
			<br>
			<h3><span>关联方法执行了:{{comput1}}</span></h3>
			<br>
			<h3><span>关联中的不关联:{{comput2}}</span></h3>
			<br>
			<h3><span>监听事件:{{num}}</span></h3>
		</div>
	</div>
</template>
<script>
	export default {
	data(){
		return{
			num:0
		}
	},
	methods:{
		reduce(){
			this.num--;
		},
		add(){
			this.num++;
		},
		normal(){
			console.log('普通方法执行了');
			return '普通方法'
		}
	},
	computed:{
		comput1(){
			console.log('关联方法执行了');
			return '关联方法'+this.num
		},
		comput2(){
			console.log('关联方法中的不关联');
			return '关联中的不关联'
		}
	},
	watch:{
		num(newValue,oldValue){
			console.log('监听num事件',newValue,oldValue);
		}
	}
	
	}
</script>
