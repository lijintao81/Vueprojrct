<template>
	<div class="userinfo">
		<el-row>
			<el-col :span="8" :offset="8">
				<ul>
					<h3>请进行个人操作</h3>
					<br>
					<br>
					<br>
					<ol>
						<h3><router-link :to='{name:"SetHeadimg"}'><el-button type="success">修改头像</el-button></router-link></h3>
					</ol>
					<br>
					<br>
					<br>
					<ol>
						<h3><router-link :to='{name:"SetPassword"}'><el-button type="success">修改密码</el-button></router-link></h3>
					</ol>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style>
</style>
