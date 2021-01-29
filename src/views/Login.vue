<template>
	<div class="login">
		<el-row>
			<el-col :span="8" :offset="8">
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
					<el-form-item label="用户名">
						<el-input placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">登录</el-button>
						<el-button>该账号未注册，请注册</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	// import Cookies from 'js-cookie'
	export default {
		data() {
			return {
				labelPosition: 'right',
				formLabelAlign: {
					username: '',
					password: '',
				}
			};
		},
		methods: {
			onSubmit() {
				this.$jsCookie.set('user', 'ljt81', { expires: 7 })
				this.$root.$children[0].user='ljt81'
				let next = this.$route.query.next;
				if(next){
					this.$router.push(next)
				}
				else{
					this.$router.push({name:'Learn'})
				}
				
				
			}
		}
	}
</script>

<style>
</style>
