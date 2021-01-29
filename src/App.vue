<template>
	<div id="app">
		<el-container>
			<el-header>
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
				background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1"><router-link :to='{name:"Learn"}'>首页</router-link></el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的</template>
						<el-menu-item index="2-1"><router-link style="color: rgb(255,255,255);text-decoration: none;" :to='{name:"Collect"}'>收藏</router-link></el-menu-item>
					</el-submenu>
					<el-menu-item index="3">消息中心</el-menu-item>
					<el-menu-item index="4"><router-link :to='{name:"Home"}'>Home</router-link></el-menu-item>
					<el-menu-item index="5"><router-link :to='{name:"About"}'>About</router-link></el-menu-item>
					<el-menu-item index="6"><router-link :to='{name:"Element"}'>Element</router-link></el-menu-item>
					<template v-if="user">
						<el-menu-item index="8" class='rt' @click='logout'>退出</el-menu-item>
						<el-menu-item index="7" class='rt'><router-link :to="{name:'Center'}">{{user}}</router-link></el-menu-item>
					</template>
					<template v-else>
						<el-menu-item index="7" class='rt'>注册</el-menu-item>
						<el-menu-item index="8" class='rt'><router-link :to="{name:'Login'}">登录</router-link></el-menu-item>
					</template>
				</el-menu>
			</el-header>
			<el-main>
				<router-view />
			</el-main>
			<el-footer>
				<div id="nav">
					<router-link class="nav1" :underline="false" to="/">友情链接</router-link>
					<el-divider direction="vertical"></el-divider>
					<router-link class="nav1" :underline="false" to="/about">更多内容</router-link>
					<el-divider direction="vertical"></el-divider>
					<router-link class="nav1" to="/element">警告须知</router-link>
				</div>
			</el-footer>
		</el-container>
		
		
	</div>
</template>
<script>
	// import Cookies from 'js-cookie'
	export default {
		data() {
			return {
				user:null,
				activeIndex2: '1'
			};
		},
		created(){
			this.$bus.$on("userlogin",_u=>{
							this.user=_u
						})
						
			let user=this.$jsCookie.get('user')
			if(user){
				this.user=user;
			}
		},
		beforeDestroy() {
					this.$bus.$off("userlogin")
				},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			logout(){
				if(this.$route.name!='Learn'){
					this.$router.push({name:"Learn"});
				}
				this.user=null;
				this.$jsCookie.remove('user')
			}
		}
	}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		.rt{
			float: right;
		}
		.el-header{
			padding: 0;
		}
		.el-main{
			padding: 40px;
			background-color: lightblue;
		}
		.el-footer{
			background-color: lightpink;
			padding: 0;
		}
		a{
			text-decoration: none;
			&.router-link-exact-active {
				
			}
		}
		#nav{
			margin: 20px auto;
		}
		.nav1{
			margin: auto 20px;
		}
	}
</style>
