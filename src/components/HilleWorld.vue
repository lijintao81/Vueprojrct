<template>
	<div>
		<h2>这是HilleWorld{{msg}}</h2>
		<h2>HilleWorld的数字为:{{num}}</h2>
		<button @click="f1"><slot name="inner"></slot>点击发送事件</button>
		<slot name="top"></slot>
	</div>
	
</template>

<script>
	export default {
	name: 'HilleWorld',
	props:{
	msg:String,
	num:{
		type:Number,
		required:true
	}
	},
	methods:{
		f1(){
			this.$emit('toparent',{'name':'qiku'})
		}
	}
	}
</script>

<style>
</style>
