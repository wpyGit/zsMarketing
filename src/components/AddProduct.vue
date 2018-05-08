<template>
	<div>
		<!-- 导航 -->
		<el-breadcrumb separator="/">
			  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
			  <el-breadcrumb-item>添加商品</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 表单 -->
		<div class="form_space">
		<el-form v-loading="false" size="small" label-position="right" :rules="rules" label-width="100px" ref="formData" :model="formData">
					<el-form-item label="姓名" prop="name"> 
							<el-col :span="8"><el-input v-model="formData.name"></el-input></el-col>
					</el-form-item>
					<!-- <el-row>
						<el-col :span="8">
							<el-form-item label="姓名" prop="name"> 
									<el-col><el-input v-model="formData.name"></el-input></el-col>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item label="姓名" prop="name"> 
									<el-col><el-input v-model="formData.name"></el-input></el-col>
							</el-form-item>
						</el-col>
					</el-row> -->

						<!-- <el-radio-group v-model="formData.sex"> -->
					<!-- <el-form-item label="性别" prop="sex"> 
							 <el-radio label="男">男</el-radio>
							 <el-radio label="女">女</el-radio>
						</el-radio-group>	 
					</el-form-item>
					<el-form-item label="年龄" prop="old"> 
							<el-input-number v-model="formData.old" controls-position="right" :min="1" :max="100"></el-input-number>
					</el-form-item>
					<el-form-item label="出生日期" prop="birthday">
							<el-date-picker v-model="formData.birthday" type="date" placeholder="选择出生日期"></el-date-picker>
					</el-form-item>
					<el-form-item label="活动区域" prop="area">
							<el-select v-model="formData.area" placeholder="请选择">
							    <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
					</el-form-item>
					<el-form-item label="爱好">
							<el-checkbox-group v-model="formData.checkList">
							    <el-checkbox label="读书"></el-checkbox>
							    <el-checkbox label="睡觉"></el-checkbox>
							    <el-checkbox label="看电影"></el-checkbox>
							    <el-checkbox label="打游戏"></el-checkbox>
							    <el-checkbox label="学习" disabled></el-checkbox>
							</el-checkbox-group>
					</el-form-item> -->


					
					<el-form-item label="图片" prop="fileList">
							<el-upload action="https://localhost:8080/uploadCommonFile.do" list-type="picture-card" :beforeUpload = "beforeUpload" :file-list="fileList" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
							  	<i class="el-icon-plus"></i>
							</el-upload>
							<el-dialog :visible.sync="dialogVisible" width="30%">
							 	 <img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
					</el-form-item>
					<el-form-item>  
					    <el-button type="primary" >立即创建</el-button>
					    <el-button>取消</el-button>
				 	</el-form-item>
				 	<el-form-item>
					    <el-button type="primary" @click="submitForm('formData')">提交</el-button>
					    <el-button @click="resetForm('formData')">重置</el-button>
					</el-form-item>
			</el-form>
			</div>





	</div>
</template>

<script>
	export default{
		data(){
			var checkPic = (rule, value, callback) => {
		        if (this.fileList.length == 0) {
		          return callback(new Error('至少上传一张图片'));
		        }
		        // setTimeout(() => {
		        //   if (!Number.isInteger(value)) {
		        //     callback(new Error('请输入数字值'));
		        //   } else {
		        //     if (value < 18) {
		        //       callback(new Error('必须年满18岁'));
		        //     } else {
		        //       callback();
		        //     }
		        //   }
		        // }, 1000);
			};
			return {
				picData:{},
				picObj:{'file':this.picData},

				dialogImageUrl: '',
				dialogVisible: false,
				formData:{
					name:'',
				},
				fileList: [
	        			
			    ],
				rules:{
					name: [
			            { required: true, message: '请输入名称', trigger: 'blur' },
			            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
			        ],
			       
			        fileList:[
			        	{validator: checkPic, trigger: 'blur' }
			        ]
				},
			}
		},
		methods:{
			handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		    handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		    },
		    beforeUpload(file){
		    	this.picData = file;
		    	console.log(file)
		    },


		    submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		            
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    },
		    resetForm(formName) {
		        this.$refs[formName].resetFields();
     		}
		},
	}
</script>

<style scoped lang="scss">
	
</style>