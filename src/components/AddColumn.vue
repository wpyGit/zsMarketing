<template>
	<div>
		<!-- 导航 -->
		<el-breadcrumb separator="/">
			  <el-breadcrumb-item>栏目管理</el-breadcrumb-item>
			  <el-breadcrumb-item>添加栏目</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 表单 -->
		<div class="form_space">
		<el-form size="small" label-position="right" :rules="rules" label-width="100px" ref="formData" :model="formData">
					<el-form-item label="名称：" prop="name"> 
							<el-col :span="8">
								<el-input v-model="formData.name"></el-input>
							</el-col>
					</el-form-item>
					<el-form-item label="位置："> 
							<el-input-number v-model="formData.area" controls-position="right" :min="1" :max="30"></el-input-number>
					</el-form-item>
					<el-form-item label="上线日期：" prop="onlineDate"> 
							<el-date-picker v-model="formData.onlineDate" type="date" placeholder="选择上线日期"></el-date-picker>
					</el-form-item>
					<el-form-item label="开关："> 
							<el-switch v-model="formData.switch"></el-switch>
					</el-form-item>

					<el-form-item>
					    <el-button :loading="btnLoading" type="primary" @click="submitForm('formData','jump')">保存</el-button>
					    <el-button :loading="btnLoading" @click="submitForm('formData')">保存并继续添加</el-button>
					</el-form-item>
			</el-form>
			</div>





	</div>
</template>

<script>
	import { addColumn } from '../api/api';
	export default{
		data(){
			return {
				btnLoading:false,
				formData:{
					name:'',
					area:'',
					onlineDate:"",
					switch:true
				},
				rules:{
					name: [
			            { required: true, message: '请输入名称', trigger: 'blur' },
			        ],
			        onlineDate: [
			            {type: 'date', required: true, message: '请选择上线日期', trigger: 'blur' },
			        ],
				},
			}
		},
		methods:{
		    submitForm(formName,jump) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            let param = {};
		            param.lmName = this.formData.name;
		            param.lmIndex = this.formData.area;
		            param.lmOnlinedate = this.utils.formDataYMD(this.formData.onlineDate);
		            param.lmSwitch = this.formData.switch;
					var _this = this;
					$.post(this.utils.baseUrl+"addColumn.do",param,function(resp){
							if(resp.code == "ok"){
								_this.$message({
								      message: '保存成功！',
								      type: 'success',
								      duration: 2000
								});
								if(jump != null){
									_this.$router.push({path:'/columnList'})
								}else{
									_this.resetForm(formName)
									_this.formData = {
										name:'',
										area:'',
										onlineDate:"",
										switch:true
									}
								}						
							}
					})
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    },
		    //表单重置
		    resetForm(formName) {
		        this.$refs[formName].resetFields();
     		}
		}
	}
</script>

<style scoped lang="scss">
	
</style>