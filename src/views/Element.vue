<template>
	<div class="element">
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
		</el-row>
		<el-row :gutter="6">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6" :offset="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
		<br>
		<br>
		<br>
		<br>
		<el-container style="height: 500px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '3']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
		</el-container>
		<br>
		<br>
		<br>
		<br>
		<i class="el-icon-platform-eleme"></i>
		<br>
		<i class="el-icon-share"></i>
		<br>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<br>
		<br>
		<br>
		<br>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		<br>
		<br>
		<br>
		<br>
		<el-row>
			<el-button plain>朴素按钮</el-button>
			<el-button type="primary" plain>主要按钮</el-button>
			<el-button type="success" plain>成功按钮</el-button>
			<el-button type="info" plain>信息按钮</el-button>
			<el-button type="warning" plain>警告按钮</el-button>
			<el-button type="danger" plain>危险按钮</el-button>
		</el-row>
		<br>
		<br>
		<br>
		<br>

		<el-row>
			<el-button round>圆角按钮</el-button>
			<el-button type="primary" round>主要按钮</el-button>
			<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" round>信息按钮</el-button>
			<el-button type="warning" round>警告按钮</el-button>
			<el-button type="danger" round>危险按钮</el-button>
		</el-row>
		<br>
		<br>
		<br>
		<br>
		<el-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-edit" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
		<br>
		<br>
		<br>
		<el-button type="text">文字按钮</el-button>
		<el-button type="text" disabled>文字按钮</el-button>
		<br>
		<br>
		<el-link>默认链接</el-link>
		<br>
		<el-link type="primary" disabled>主要链接</el-link>
		<br>
		<el-link icon="el-icon-edit">编辑</el-link>
		<br>
		<el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
		<br>
		<br>
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="复选框 A"></el-checkbox>
			<el-checkbox label="复选框 B"></el-checkbox>
			<el-checkbox label="复选框 C"></el-checkbox>
			<el-checkbox label="禁用" disabled></el-checkbox>
			<el-checkbox label="选中且禁用" disabled></el-checkbox>
		</el-checkbox-group>
		<br>
		<br>
		<div class="block">
			<span class="demonstration">Click 指示器触发</span>
			<el-carousel trigger="click" height="150px">
				<el-carousel-item v-for="item in imgs" :key="item">
					<img :src="item" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
		<br>
		<br>
		<br>
		<br>
		<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
		<br>
		<br>
		<el-progress type="circle" :percentage="percentage" :color="customColorMethod"></el-progress>
		<div>
			<el-button-group>
				<el-button icon="el-icon-minus" @click="decrease"></el-button>
				<el-button icon="el-icon-plus" @click="increase"></el-button>
			</el-button-group>
		</div>
		<br>
		<br>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
		<br>
		<br>
		<br>
		<el-switch v-model="value1" active-text="按月付费" inactive-color="#ff4949" inactive-text="按年付费">
		</el-switch>
		<br>
		<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
		</el-switch>
		<br>
		<br>
		<br>
		<br>
		<el-time-picker is-range v-model="value3" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"
		placeholder="选择时间范围">
		</el-time-picker>
		<br>
		<br>
		<br>
		<br>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="form.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="即时配送">
				<el-switch v-model="form.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<br>
		<br>
		<br>
		<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		<br>
		<br>
		<br>
		<el-alert title="成功提示的文案" type="success" show-icon>
		</el-alert>
		<br>
		<el-alert title="消息提示的文案" type="info" show-icon>
		</el-alert>
		<br>
		<el-alert title="警告提示的文案" type="warning" show-icon>
		</el-alert>
		<br>
		<el-alert title="错误提示的文案" type="error" show-icon>
		</el-alert>
		<br>
		<br>
		<br>
		<br>
		<br>
		<el-button type="text" @click="open">点击打开 Message Box</el-button>
		<br>
		<br>
		<br>
		<br>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
		text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				checkList: ['选中且禁用', '复选框 A'],
				activeIndex: '1',
				value1: true,
				value2: true,
				value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				imgs: [require('../assets/1.jpg'),
					require('../assets/2.jpg'),
					require('../assets/3.jpg'),
					require('../assets/4.jpg')
				],
				percentage: 20,
				customColor: '#409eff',
				customColors: [{
						color: '#f56c6c',
						percentage: 20
					},
					{
						color: '#e6a23c',
						percentage: 40
					},
					{
						color: '#5cb87a',
						percentage: 60
					},
					{
						color: '#1989fa',
						percentage: 80
					},
					{
						color: '#6f7ad3',
						percentage: 100
					}
				],
				tableData: [{
						date: '2016-05-02',
						name: '张三',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-04',
						name: '李四',
						address: '北京市朝阳路9号'
					},
					{
						date: '2016-05-01',
						name: '王五',
						address: '郑州市东三街8号'
					},
					{
						date: '2016-05-03',
						name: '赵六',
						address: '南京市人民路1号'
					}
				],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		methods: {
			customColorMethod(percentage) {
				if (percentage < 30) {
					return '#909399';
				} else if (percentage < 70) {
					return '#e6a23c';
				} else {
					return '#67c23a';
				}
			},
			increase() {
				this.percentage += 10;
				if (this.percentage > 100) {
					this.percentage = 100;
				}
			},
			decrease() {
				this.percentage -= 10;
				if (this.percentage < 0) {
					this.percentage = 0;
				}
			},
			onSubmit() {
				console.log('submit!');
			},
			handleNodeClick(data) {
				console.log(data);
			},
			open() {
				this.$alert('这是一段内容', '标题名称', {
					confirmButtonText: '确定',
					callback: action => {
						this.$message({
							type: 'info',
							message: `action: ${ action }`
						});
					}
				});
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
		},
		components: {
	
		},
	}
</script>

<style>
	/* 布局样式 */
	.el-row {
		margin-bottom: 20px;
	
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	
	/* 表格样式 */
	
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	.el-aside {
		color: #333;
	}
</style>
