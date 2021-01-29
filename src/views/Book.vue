<template>
	<div class="book">
		<el-row>
			<el-col :span="20">
				<h1 class="title">{{book.title}} </h1>
			</el-col>
			<el-col :span="4">
				<template v-if="user">
					<el-button v-if="has" type="success" round disabled>已在书架</el-button>
					<el-button v-else type="success" round @click="add">加入书架</el-button>
				</template>
				<template v-else>
					<el-button type="success" round @click="$router.push({name:'Login',query:{next:$route.path}})">加入书架</el-button>
				</template>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<p class="outline">{{book.outline}}</p>
			</el-col>
		</el-row>
		<el-row class='list'>
			<el-col class='articletitle' :span="6" v-for="(a,index) in articles" :key="a.title">
				<router-link :to="'/article/'+a.id">
					<el-tag type="success"> 第{{index+1}}章:{{a.title}} </el-tag>
				</router-link>
			</el-col>
		</el-row>
		<el-row>
			<el-button type="warning" plain @click='forGo'>返回首页</el-button>
		</el-row>
	</div>
</template>

<script>
	import {
		books,
		articles
	} from '../data/bookdata.js'
	export default {
		data() {
			return {
				user:null,
				book: null,
				has:false,
				articles: [],
			}
		},
		created() {
			let user = this.$jsCookie.get("user")
			if (user) {
				this.user = user;
			}
			console.log(this.$route.params.pk);
			this.book = books.filter((item) => {
				return item.id == this.$route.params.pk;
			})[0]
			this.articles = articles.filter((item) => {
				return item.bookid == this.$route.params.pk;
			})
			this.has = this.$store.getters.getCollectBoos.indexOf(this.book.id) >= 0 ? true : false
		},
		methods: {
			forGo() {
				this.$router.go(-1)
			},
			add() {
				this.$message('加入书架');
				this.has = true
				this.$store.commit("addCollect", this.book.id)
			}
		}
	}
</script>

<style lang="less">
	.book {
		.title {
			text-align: center;
		}

		.outline {
			text-indent: 2em;
		}

		.list {
			padding: 40px 0px;

			.articletitle {
				text-align: left;
				padding: 20px;
			}
		}
	}
</style>
