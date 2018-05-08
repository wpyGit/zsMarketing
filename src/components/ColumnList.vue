<template>
	<div>
		<!-- 导航 -->
		<el-breadcrumb separator="/">
			  <el-breadcrumb-item>栏目管理</el-breadcrumb-item>
			  <el-breadcrumb-item>栏目列表</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 搜索区 -->
		<div class="table_search_space">
				<el-input placeholder="请输入内容" size="small" style="width:20%;" v-model="keyword">
				    <el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
		</div>
		<!-- table -->
		 <!-- <template>
		    <el-table border v-loading="listLoading" max-height="1000" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
			    <el-table-column prop="sex" label="性别" width="100"></el-table-column>
			    <el-table-column prop="old" label="年龄" width="100"></el-table-column>
			    <el-table-column prop="birthday" :formatter="tdFormDataYMD" label="出生日期" width="160"></el-table-column>
			    <el-table-column prop="checkList" :formatter="arrToString" label="爱好" width=""></el-table-column>
			    <el-table-column prop="area" label="活动区域" width=""></el-table-column>
			    <el-table-column prop="caoZuo" label="操作" width="">
				    <template slot-scope="scope">
			            <el-button size="small" @click="edit(scope)">编辑</el-button>
			            <el-button type="danger" @click="idelete(scope)" size="small">删除</el-button>
			        </template>
			    </el-table-column>
		    </el-table>
		 </template> -->


	</div>
</template>

<script>
	export default{
		data(){
			return {
				keyword:'',
				listLoading:false,
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.table_search_space{
		width: 100%;
	    background: #F2F2F2;
	    padding: 10px;
	    margin: 10px 0;
	}	
</style>