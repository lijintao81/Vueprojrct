<template>
	<div class="center">
		<h1>{{user}}的个人中心</h1>
		<br>
		<br>
		<br>
		<br>
		<div>
			<router-view />
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:this.$jsCookie.get('user')
			}
		}
	}
</script>

<style>
</style>
