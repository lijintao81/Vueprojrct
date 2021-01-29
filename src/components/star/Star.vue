<template>
	<div class="star">
		<img v-for="(item,index) in 5" :key="index" :src='index<starnum?starselpng:starnormal' 
		@click="setstarnum(index+1)" alt="item">
		<slot name="to"></slot>
		<span>{{starnum}}星</span>
	</div>
</template>

<script>
	export default{
		props:{
			starprop:{
				required:true,
			}
		},
		created(){
			this.starnum=this.starprop
		},
		data(){
			return{
				starnum:1,
				starnormal:require('./img/star.png'),
				starselpng:require('./img/starsel.png')
			}
		},
		methods:{
			setstarnum(num){
				this.starnum=num,
				this.$emit('tellparent',{'starnum':num})
			}
		}
	}
</script>

<style lang="less">
	.star{
		display: inline-block;
		img{
			vertical-align: -10px;
		}
	}
</style>
