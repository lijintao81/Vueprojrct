<template>
	<div class="learn">
		<el-row :gutter='20'>
			<el-col :span="6" v-for="b in books" :key="b.id">
				<router-link :to="{name:'Book',params:{pk:b.id}}">
					<el-card :body-style="{ padding: '0px' }" shadow='hover' class='book' >
						<img :src="b.mainimg" class="image">
						<div style="padding: 14px;">
							<h3>{{b.title}}</h3>
						</div>
					</el-card>
				</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {books} from '../data/bookdata.js'
	export default{
		name:'Learn',
		data(){
			return{
				books:books,
			}
		}
	}
</script>

<style lang="less">
.learn{
	width: 80%;
	margin: 0 auto;
	a{
		text-decoration: none;
	}
	h3{
		text-align: center;
	}
	.book{
		img{
			width: 100%;
		}
	}
	.el-col{
		margin: 10px 0;
	}
}
	
</style>
