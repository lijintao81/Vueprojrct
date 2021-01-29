<template>
	<div class="about">
		<Heart :stateprop='heartState' @tellparent='statechange'><span slot='to'>给商品点赞</span></Heart>
		<br>
		<Heart :stateprop='heart1State' @tellparent='state1change'><span slot='to'>给客服点赞</span></Heart>
		<br>
		<Heart :stateprop='heart2State' @tellparent='state1change'><span slot='to'>给价格点赞</span></Heart>
		<br>
		<br>
		<br>
		<Star :starprop='start1' @tellparent='star1change' ><span slot='to'>给商品评星</span></Star>
		<br>
		<Star :starprop='start2' @tellparent='star2change' ><span slot='to'>给客服评星</span></Star>
		<br>
		<Star :starprop='start3' @tellparent='star3change' ><span slot='to'>给价格评星</span></Star>
		<br>
		<br>
		<br>
		<br>
		<span v-if="show"><Step></Step></span>
		<br>
		<button @click="show=!show">切换</button>
	</div>
</template>
<script>
	import Heart from '@/components/heart/Heart.vue'
	import Star from '@/components/star/Star.vue'
	import Step from '@/components/Step.vue'
	export default {
	components: {
		Heart,
		Star,
		Step,
	},
	methods:{
		statechange(e){
			console.log('通知服务器将商品点赞状态设置为',e.state);
		},
		state1change(e){
			console.log('通知服务器将客服点赞状态设置为',e.state);
		},
		state2change(e){
			console.log('通知服务器将价格点赞状态设置为',e.state);
		},
		star1change(e){
			console.log('通知服务器将商品的评星设置为',e.starnum)
		},
		star2change(e){
			console.log('通知服务器将客服的评星设置为',e.starnum)
		},
		star3change(e){
			console.log('通知服务器将价格的评星设置为',e.starnum)
		},
	},
	data(){
		return{
			heartState:true,
			heart1State:true,
			heart2State:true,
			start1:1,
			start2:1,
			start3:1,
			show:true,
		}
	}
	}
</script>
